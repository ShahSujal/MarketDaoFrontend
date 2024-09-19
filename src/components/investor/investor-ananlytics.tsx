import React from "react";
import { InvestorCarousel } from "@/components/investor/investors-carousel";
import { PitchTable } from "../common/pitchesmap";
import Image from "next/image";
import { Button } from "../ui/button";
import { TInvestmentMonthlyData, TInvestorIdProps } from "@/types/common";

type Props = {
  investment: TInvestorIdProps;
  analytics: TInvestmentMonthlyData;
};

const InvestorAnanlytics = ({ investment, analytics }: Props) => {
  return (
    <div className=" p-3 w-full ">
      <h1 className=" text-3xl text-[#c0bebe] my-5 ">Other investors</h1>

    { investment.accounts.length > 0 &&  <div className=" w-full px-10 ">
        <InvestorCarousel investment={investment}/>
      </div>
}
     
{
   analytics.last10Investments.length > 0  && <PitchTable analytics={analytics} />
}
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
  );
};

export default InvestorAnanlytics;
