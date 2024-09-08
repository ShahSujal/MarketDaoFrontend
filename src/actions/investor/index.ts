"use server";

import { client } from "@/lib/config/prismaconfig";
import { EStatus, TApiResponse } from "@/types/common";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from "@supabase/supabase-js";

type TInvestmentProps = {
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  title: string;
  description: string;
  imageFile: string; // Base64 string
  walletAddress: string;
};

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Utility function to convert Base64 to Blob
const base64ToBlob = (base64: string): Blob => {
  const byteString = atob(base64.split(',')[1]);
  const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

export const createInvestment = async (
  data: TInvestmentProps
): Promise<TApiResponse> => {
  console.log({ data });

  const imageId = uuidv4();
  console.log({ imageId });

  const imageBlob = base64ToBlob(data.imageFile);

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(process.env.BUCKET_NAME!)
    .upload(imageId, imageBlob, {
      cacheControl: "3600",
      upsert: false,
    });
  console.log({ uploadData, uploadError });

  if (uploadError) {
    return {
      status: EStatus.ERROR,
      title: "Image upload failed",
      desciption: "Image upload failed",
    };
  }
  const response = await client.investment.create({
    data: {
      title: data.title,
      description: data.description,
      image: uploadData?.path,
      tokenAddress: data.tokenAddress,
      tokenSymbol: data.tokenSymbol,
      tokenName: data.tokenName,
      userId: data.walletAddress,
    },
  });
  console.log({ response });

  if (!response) {
    return {
      status: EStatus.ERROR,
      title: "Investment creation failed",
      desciption: "Investment creation failed",
    };
  } else {
    return {
      status: EStatus.SUCCESS,
      title: "Investment created",
      desciption: "Investment created successfully",
    };
  }
};