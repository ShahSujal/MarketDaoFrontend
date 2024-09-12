import { ParticpationType, RewardsType, Status, TaskType } from "@prisma/client";
import { creationType } from "./enum";

export enum EStatus {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
  CANCEL = "cancel",
  LOADERROR = "loaderror",
  NOTFOUND = "notfound",
}
export type TApiResponse = {
  status: EStatus;
  title: string;
  desciption: string;
};
export type TInvestmentMonthlyData = {
  monthlyData: {
    month: string;
    count: number;
  }[];
  last10Investments: {
    userId: string;
    isExecuted: boolean;
    Status: Status;
    createdAt: Date;
    deadline: Date;
  }[];
};

export type TInvestorIdProps = {
  id: string;
  userId: string;
  accounts: string[];
  title: string;
  description: string;
  partners: Stake[];
  image: string;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  chainId: number[];
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  user: {
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

export type TInvestorStake = (User & {
  stakes: Stake[];
});

export type TCreateCampaignProps = {
  title: string;
  description: string;
  image: File;
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
  taskType: TaskType;
  particpationType: ParticpationType;
  walletAddress: string; 
  imageFile?: string;
};
export interface LoadDataType {
  creationType: creationType;
  step: number;
  title: string;
  description: string;
  image: string;
  tokenName: string;
  tokenSymbol: string;
  chainId: number[];
}