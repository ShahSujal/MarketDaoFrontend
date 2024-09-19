import { createCampaign } from "@/actions/campaign";
import { createInvestment } from "@/actions/investor";
import { investorcontractabi } from "@/contract/abi/InvestorContractAbi";
import { fileToBase64 } from "@/lib/actions";
import { client } from "@/lib/config/prismaconfig";
import { config } from "@/lib/config/wagmiConfig";
import { EChains, EStatus, TApiResponse, TCreateCampaignProps } from "@/types/common";
import { ParticpationType, RewardsType, TaskType } from "@prisma/client";
import {
  getAccount,
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import { Address } from "viem";

type TCampaignProps = {
  title: string;
  description: string;
  imageFile: File;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  chain: EChains;
  campaignType: TaskType;
  minimumEligiablity: number;
  numberOfWinners: number;
  priceValue: number;
  isNative: boolean;
  rewardType: RewardsType;
  particpationType: ParticpationType;
};

export const createCampaignFunction = async (
  data: TCampaignProps
): Promise<TApiResponse> => {
try {
  const walletAddress = "0xC199B073f2c43bC347dE431fAD9B01208F6aC7E5";
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
//     args: [data.tokenName, data.tokenSymbol],
//   });

//   const hash = await writeContract(config, request);

  // const receipt = await waitForTransactionReceipt(config, {
  //   hash,
  //   confirmations: 1,
  // });

  // console.log({ receipt });
  

  // if (receipt.status === "success") {
   

const base64Image = await fileToBase64(data.imageFile);
// console.log({ base64Image });
const currentDate = new Date();
const response = await createCampaign({
  title: data.title,
  description: data.description,
  totalWinners: data.numberOfWinners,
  totalPrize: data.priceValue,
  campaignStartDate: new Date(),
 campaginEndDate: new Date(currentDate.setDate(currentDate.getDate() + 5)),
  rewardType: data.rewardType,
  isNative: data.isNative,
  chainId: 97,
  tokenAddress: data.tokenAddress,
  tokenSymbol: data.tokenSymbol,
  tokenName: data.tokenName,
  taskType: data.campaignType,
  particpationType: data.particpationType,
  walletAddress: walletAddress,
  image: base64Image,
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
} catch (error) {
  console.log(error);
  return {
    status: EStatus.ERROR,
    title: "Investment creation failed",
    desciption: "Investment creation failed",
  };
  
}
};
