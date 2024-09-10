import { client } from "@/lib/config/prismaconfig";
import { EStatus } from "@/types/common";
import { RewardsType, ParticpationType } from "@prisma/client";

type TCampaignProps = {
  title: string;
  description: string;
  image: string;
  totalWinners: number;
  totalPrize: number;
  campaignStartDate: Date;
  campaginEndDate: Date;
  rewardType: RewardsType;
  isNative: boolean;
  chainId: number;
  tokenAddress?: string;
  tokenSymbol?: string;
  tokenName?: string;
  particpationType: ParticpationType;
  walletAddress: string; 
};

export const createCampaign = async (data: TCampaignProps) => {
  const response = await client.campaign.create({
    data: {
      title: data.title,
      description: data.description,
      image: data.image,
      totalWinners: data.totalWinners,
      totalPrize: data.totalPrize,
      campaignStartDate: data.campaignStartDate,
      campaginEndDate: data.campaginEndDate,
      rewardType: data.rewardType,
      isNative: data.isNative,
      chainId: data.chainId,
      tokenAddress: data.tokenAddress,
      tokenSymbol: data.tokenSymbol,
      tokenName: data.tokenName,
      particpationType: data.particpationType,
      ownerId: data.walletAddress, 
    },
  });

  if (!response) {
    return {
      status: EStatus.ERROR,
      title: "Campaign creation failed",
      description: "Campaign creation failed",
    };
  } else {
    return {
      status: EStatus.SUCCESS,
      title: "Campaign created",
      description: "Campaign created successfully",
    };
  }
};