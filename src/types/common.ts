import { Status } from "@prisma/client";

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
  partnerInvestors: string[];
  title: string;
  description: string;
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
    createdAt: Date;
    updatedAt: Date;
  };
};