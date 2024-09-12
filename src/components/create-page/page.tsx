"use client";
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step } from "./step";
import { creationType } from "@/types/enum";
import { z } from "zod"
import { LoadDataType } from "@/types/common";

type Props = {};









const CreatePage = (props: Props) => {
  const [loadData, setLoadData] = useState<LoadDataType>({
    creationType: creationType.CAMPAIGN,
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
