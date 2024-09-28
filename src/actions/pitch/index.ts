"use server";

import { client } from "@/lib/config/prismaconfig";

export const createPitch = async ({
  userId,
  investmentId,
  title,
  description,
  deadline,
  initialInvestment,
  profitAmountEstimation,
  isNative,
  investmentTokenAddress,
  profitPercentageAmount,
  chainId,
}: {
  userId: string;
  investmentId: string;
  title: string;
  description: string;
  deadline: Date;
  initialInvestment: number;
  profitAmountEstimation: number;
  isNative: boolean;
  investmentTokenAddress?: string;
  profitPercentageAmount: number;
  chainId: number;
}) => {
  try {
    const newPitch = await client.pitch.create({
      data: {
        userId,
        investmentId,
        title,
        description,
        deadline,
        initialInvestment,
        profitAmountEstimation,
        isNative,
        investmentTokenAddress,
        profitPercentageAmount,
        chainId,
        isExecuted: false,
        voteFor: 0,
        voteAgainst: 0,
        totalVoters: 0,
        Status: 'ACTIVE',
      },
    });

    return {
      status: 'success',
      data: newPitch,
    };
  } catch (error) {
    console.error('Error creating pitch:', error);
    return {
      status: 'error',
      message: 'Failed to create pitch',
    };
  }
};
