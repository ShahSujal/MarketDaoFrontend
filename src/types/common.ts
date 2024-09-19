import { Campaign, CurrentLiquidity, Investment, ParticpationType, Pitch, RewardsType, Stake, Status, TaskType, User } from "@prisma/client";
import { creationType } from "./enum";
import { Address } from "viem";
import type {
  CachedConversation
} from "@xmtp/react-sdk";
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

// export type TInvestorIdProps = {
//   id: string;
//   userId: string;
//   accounts: string[];
//   title: string;
//   description: string;
//   partners: Stake[];
//   image: string;
//   tokenAddress: string;
//   tokenSymbol: string;
//   tokenName: string;
//   chainId: number[];
//   status: Status;
//   createdAt: Date;
//   updatedAt: Date;
//   user: {
//     walletAddress: string;
//     name: string | null;
//     bio: string | null;
//     image: string | null;
//     discord: string | null;
//     twitter: string | null;
//     opensea: string | null;
//     createdAt: Date;
//     updatedAt: Date;
//   };
// };

export type TInvestorIdProps = Investment & {
  user: User;
  partners: User[];
};


export type TInvestorStake = (User & {
  stakes: Stake[];
});

export type TCreateCampaignProps = {
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
  taskType: TaskType;
  particpationType: ParticpationType;
  walletAddress: string; 
  imageFile?: File;
};
// export enum TCampaignTypes {
//   YoutubeShorts="YoutubeShorts",
//   YoutubeVideo="YoutubeVideo",
//   TwitterPost="TwitterPost",
// }
export enum EChains {
  sepolia="Sepolia",
  bsc="BSC",
}
export interface LoadDataType {
  creationType: creationType;
  step: number;
  title: string;
  description: string;
  image: string;
  tokenName: string;
  tokenSymbol: string;
  campaignType: TaskType;
  minimumEligiablity: number;
  numberOfWinners: number;
  priceValue: number;
  isNative: boolean;
  chain: EChains;
  tokenAddress: string;
  RewardsType: RewardsType;
  imageFile: File | undefined;
  
}
export type TUpdateUserDetails = {
  walletAddress: `0x${string}`;
  username: string;
  bio: string;
  image: string;
  imageFile?: File;
}
export type TPeerType = {
  peerAddress: Address | undefined;
  conversation: CachedConversation | undefined;
}

export type TInvestorDetails = User & {
  investments: Investment[];
  stakes: Stake[];
  campaigns: Campaign[];
  liquiditys: CurrentLiquidity[];
  pitches: Pitch[];
  winnedCampaigns: Campaign[];
};