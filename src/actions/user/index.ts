"use server";

import { client } from "@/lib/config/prismaconfig";
import { EStatus, TInvestorDetails, TUpdateUserDetails } from "@/types/common";
import { createClient } from "@supabase/supabase-js";
import { Address } from "viem";
import { v4 as uuidv4 } from "uuid";
import { base64ToBlob } from "@/lib/actions";
import { useAccount } from "wagmi";
import { Campaign, CurrentLiquidity, Investment, Pitch, Stake, User } from "@prisma/client";
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
export const createUser = async (walletAddress: Address) => {
  const checkUser = await client.user.findUnique({
    where: {
      walletAddress: walletAddress,
    },
  });
  if (checkUser) {
    return checkUser;
  }
  const response = await client.user.create({
    data: {
      walletAddress: walletAddress,
    },
  });
  return response;
};

export const getUserDetails = async (walletAddress: Address): Promise<User> => {
  const investor = await client.user.findUnique({
    where: {
      walletAddress: walletAddress,
    },
  });
  if (investor) {
    return investor;
  } else {
    return {} as User;
  }
};

export const updateUser = async ({
  walletAddress,
  username,
  image,
  bio,
}: TUpdateUserDetails) => {
  const imageId = uuidv4();
  console.log({ imageId });

  const imageBlob = base64ToBlob(image);

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(process.env.BUCKET_NAME!)
    .upload(imageId, imageBlob, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    return {
      status: EStatus.ERROR,
      title: "Image upload failed",
      desciption: "Image upload failed",
    };
  }

  const response = await client.user.update({
    where: {
      walletAddress: walletAddress,
    },
    data: {
      name: username,
      bio: bio,
      image: imageId,
    },
  });
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


export const getUserAllDetails = async (walletAddress: string): Promise<TInvestorDetails> => {
  const user = await client.user.findUnique({
    where: {
      walletAddress: walletAddress,
    },
    include: {
      pitches: true,
      winnedCampaigns: true,
      stakes: true,
      investments: true,
      campaigns: true,
      liquiditys: true,
    },
  });
  if (user) {
    return user;
  }
  return {} as TInvestorDetails;
};
