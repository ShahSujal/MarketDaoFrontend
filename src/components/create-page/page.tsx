"use client";
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step } from "./step";

export enum creationType {
  AI_NFT = "AI_NFT",
  BIDDING_NFT = "BIDDING_NFT",
  PLATFORM_NFT = "PLATFORM_NFT",
}
export enum orderType {
  PRIVATE,
  PUBLIC,
}

/*
user 
model User {
  walletAddress String @id
  name          String?
  bio           String?
  image         String?
  investments   Investment[]
  pitches       Pitch[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Investment {
  id                     String   @default(uuid()) @id
  userId                 String
  user                   User     @relation(fields: [userId], references: [walletAddress])
  accounts               String[] @default([])
  partnerInvestors       String[]
  tokenAddress           String
  tokenSymbol            String
  tokenName              String
  stake                  Int
  amount                 Int
  pitches                Pitch[]
  chainId                Int[] @default([])
  status                 Status
  createdAt              DateTime @default(now())
  updatedAt              DateTime @updatedAt
}
*/
export interface LoadDataType {
  step: number;
  title: string;
  description: string;
  image: string;
  tokenName: string;
  tokenSymbol: string;
  chainId: number[];
}
type Props = {};

const CreatePage = (props: Props) => {
  const [loadData, setLoadData] = useState<LoadDataType>({
    step: 0,
    title: "",
    description: "",
    image: "",
    tokenName: "",
    tokenSymbol: "",
    chainId: [],
  });

  return (
    <main className=" bg-gradient-to-tr to-[#f5ecec30] from-[#19191a3e] min-h-[80vh] w-full relative ">
      {loadData.step === 0 ? (
        <Step setLoadData={setLoadData} loadData={loadData} />
      ) : loadData.step === 1 ? (
        <Step1 setLoadData={setLoadData} loadData={loadData} />
      ) : (
        <Step2 setLoadData={setLoadData} loadData={loadData} />
      )}
    </main>
  );
};

export default CreatePage;
