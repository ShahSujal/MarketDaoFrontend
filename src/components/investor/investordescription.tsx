"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TInvestmentMonthlyData, TInvestorIdProps } from "@/types/common";
import InvestorAnanlytics from "./investor-ananlytics";

type Props = {
  investment: TInvestorIdProps;
  analytics:TInvestmentMonthlyData;
};

const InvestorDescription = ({ investment, analytics }: Props) => {
  const [showAnalytics, setshowAnalytics] = useState(false);
  return (
    <section className=" p-4 w-full">
      <div className=" flex  flex-row space-x-6">
        <button onClick={() => setshowAnalytics(false)} className={!showAnalytics?"text-white border-b border-white":"text-gray-600"}>Description</button>
        <button onClick={() => setshowAnalytics(true)} className={showAnalytics?"text-white border-b border-white":"text-gray-600"}>Analytics</button>
      </div>

      {showAnalytics ? (
        <InvestorAnanlytics investment={investment} analytics={analytics} />
      ) : (
        <div className=" w-full">
          <h1 className=" text-3xl my-10 text-[#c0bebe]  ">
            {investment.title}
          </h1>
          <p className=" text-[#ccc]">{investment.description}</p>
          <div className=" w-full h-44 rounded-xl border-2 my-10 flex flex-row ">
            <div className=" w-1/2 h-full bg-[#2e2e2e28]  flex  flex-col justify-center p-3 items-start">
              <h1 className=" text-3xl text-[#c0bebe] ">Investors</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Button className=" w-44 mt-3"> pitch now</Button>
            </div>
            <div className=" w-1/2 h-full bg-[#2e2e2e28] rounded-r-xl flex justify-center items-center">
              <Image
                src={"/content/gradientCoin.svg"}
                alt=""
                width={350}
                height={450}
                className=" h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InvestorDescription;
