import { createInvestment } from "@/actions/investor";
import { createPitch } from "@/actions/pitch";
import { investorcontractabi } from "@/contract/abi/InvestorContractAbi";
import { client } from "@/lib/config/prismaconfig";
import { config } from "@/lib/config/wagmiConfig";
import { EStatus, TApiResponse } from "@/types/common";
import {
  getAccount,
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import { Address } from "viem";

type TPitchProps = {
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
};
export const createPitchFunction = async (
  data: TPitchProps
): Promise<TApiResponse> => {
try {
  const walletAddress = await getAccount(config).address;
  if (!walletAddress) {
    return {
      status: EStatus.ERROR,
      title: "Wallet not found",
      desciption: "Please connect your wallet to continue",
    };
  }

//   const { request } = await simulateContract(config, {
//     address: process.env.NEXT_PUBLIC_INVESTOR_CONTRACT as Address,
//     chainId: 97,
//     abi: investorcontractabi,
//     functionName: "listNewInvestor",
//     args: [data., data.tokenSymbol],
//   });

//   const hash = await writeContract(config, request);

const response = await createPitch({
  userId: walletAddress, 
  investmentId: data.investmentId, 
  title: data.title,
  description: data.description,
  deadline: data.deadline,
  initialInvestment: data.initialInvestment, 
  profitAmountEstimation: data.profitAmountEstimation,
  isNative: data.isNative,
  investmentTokenAddress: data.investmentTokenAddress, 
  profitPercentageAmount: data.profitPercentageAmount, 
  chainId: data.chainId, 
});
  if (!response) {
    return {
      status: EStatus.ERROR,
      title: "Investment creation failed",
      desciption: "Investment creation failed",
    };
  }else{ 
      return {
          status: EStatus.SUCCESS,
          title: "Investment created",
          desciption: "Investment created successfully",
        };
    }
  // }else{
  //   return {
  //     status: EStatus.ERROR,
  //     title: "Investment creation failed",
  //     desciption: "Investment creation failed",
  //   };
  // }
} catch (error) {
  console.log(error);
  return {
    status: EStatus.ERROR,
    title: "Investment creation failed",
    desciption: "Investment creation failed",
  };
  
}
};
