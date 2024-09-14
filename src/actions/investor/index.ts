"use server";
import { client } from "@/lib/config/prismaconfig";
import {
  EStatus,
  TApiResponse,
  TInvestmentMonthlyData,
  TInvestorIdProps,
} from "@/types/common";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import { Investment, Pitch, Status } from "@prisma/client";
import { subMonths, startOfMonth, endOfMonth } from "date-fns";
import { base64ToBlob } from "@/lib/actions";

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

export const getInvestments = async (): Promise<Investment[]> => {
  const response = await client.investment.findMany();
  if (response) {
    return response;
  } else {
    return [];
  }
};

export const getInvestmentById = async (
  id: string
): Promise<TInvestorIdProps> => {
  const response = await client.investment.findUnique({
    where: {
      id: id,
    },
    include: {
      pitches: true,
      user: true,
      partners: true, 
    }
  });

  if (response) {
    return response as TInvestorIdProps;
  } else {
    return {} as TInvestorIdProps;
  }
};

export const getPitchesByInvestorAndMonth = async (
  investorId: string
): Promise<TInvestmentMonthlyData> => {
  const now = new Date();
  const sixMonthsAgo = subMonths(now, 6);

  const pitches = await client.pitch.findMany({
    where: {
      investment: {
        userId: investorId,
      },
      createdAt: {
        gte: sixMonthsAgo,
      },
    },
    select: {
      createdAt: true,
      userId: true,
      Status: true,
      isExecuted: true,
      deadline: true,
    },
  });
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const monthStart = startOfMonth(subMonths(now, i));
    const monthEnd = endOfMonth(subMonths(now, i));
    const monthName = monthStart.toLocaleString("default", { month: "long" });

    const monthlyPitches = pitches.filter(
      (pitch) => pitch.createdAt >= monthStart && pitch.createdAt <= monthEnd
    );

    return {
      month: monthName,
      count: monthlyPitches.length,
    };
  }).reverse();

  return {
    monthlyData: monthlyData,
    last10Investments: pitches.slice(0, 10),
  };
};

type User = {
  walletAddress: string;
  name: string | null;
  bio: string | null;
  image: string | null;
  discord: string | null;
  twitter: string | null;
  opensea: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Stake = {
  id: string;
  userId: string;
  investmentId: string;
  stake: number;
  chainId: number;
  createdAt: Date;
};

type TInvestorStake = (User & {
  stakes: Stake[];
})[];
export const getInvestors = async (): Promise<TInvestorStake> => {
  const investors = await client.user.findMany({
    include: {
      stakes: true,
    },
  });

  if (investors) {
    return investors as TInvestorStake;
  } else {
    return [] as TInvestorStake;
  }
};
