import { createInvestment } from "@/actions/investor";
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

type TInvestmentProps = {
  title: string;
  description: string;
  imageFile: File;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
};
// Utility function to convert File to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};
export const createInvestmentFunction = async (
  data: TInvestmentProps
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

  const { request } = await simulateContract(config, {
    address: process.env.NEXT_PUBLIC_INVESTOR_CONTRACT as Address,
    chainId: 97,
    abi: investorcontractabi,
    functionName: "listNewInvestor",
    args: [data.tokenName, data.tokenSymbol],
  });

  const hash = await writeContract(config, request);

  // const receipt = await waitForTransactionReceipt(config, {
  //   hash,
  //   confirmations: 1,
  // });

  // console.log({ receipt });
  

  // if (receipt.status === "success") {
   

const base64Image = await fileToBase64(data.imageFile);
console.log({ base64Image });

  const response = await createInvestment({
    title: data.title,
    description: data.description,
    imageFile: base64Image,
    tokenAddress: data.tokenAddress,
    tokenSymbol: data.tokenSymbol,
    tokenName: data.tokenName,
    walletAddress: walletAddress,
  })
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
