"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TInvestmentMonthlyData, TInvestorIdProps } from "@/types/common";
import InvestorAnanlytics from "./investor-ananlytics";
import InvestmentPitch from "./investment-pitch";

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
          <InvestmentPitch/>
        </div>
      )}
    </section>
  );
};

export default InvestorDescription;
