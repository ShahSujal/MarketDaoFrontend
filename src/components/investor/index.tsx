import { Investment } from "@prisma/client";
import React from "react";
import { Graph } from "../common/graph";
import Image from "next/image";
import InvestorDescription from "./investordescription";
import { getPitchesByInvestorAndMonth } from "@/actions/investor";
import { TInvestorIdProps } from "@/types/common";
import { walletAddressShortn } from "@/lib/actions";
import { Address } from "viem";

type InvestmentProps = {
  investment: TInvestorIdProps;
};
const Investor = async({ investment }: InvestmentProps) => {
    const analytics = await getPitchesByInvestorAndMonth(investment.id)
    return (
    <div>
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_URL! + investment.image}
        alt=""
        width={1780}
        height={450}
        className=" w-full h-[450px] rounded-2xl object-cover"
      />
      <div className=" flex flex-row w-full min-h-screen relative">
        <div className=" w-[calc(100%-450px)]">
          <InvestorDescription investment={investment} analytics={analytics} />
        </div>

        <div className=" flex justify-center   bg-zinc-900 items-start flex-col w-[450px] min-h-screen">
          <div className=" flex justify-center flex-col items-center w-[450px] h-full  rounded-2xl">
            <Image
            src={`https://avatar.iran.liara.run/public/boy?username=${investment.user.walletAddress}`}
              alt=""
              width={400}
              height={450}
              className=" w-[300px] h-[300px] object-cover rounded-full"
            />

            <div className=" w-full flex flex-col justify-center items-center">
              <div className=" flex w-full flex-row justify-between items-center px-3">
                <h1 className=" text-xl font-paps font-bold text-gray-300">
                  {investment.user.name}
                </h1>
                <h1 className=" text-lg font-paps font-extralight text-gray-500">
                  {walletAddressShortn(investment.user.walletAddress! as Address)}
                </h1>
              </div>
              <h3 className=" text-gray-500 font-paps font-light px-3">
                {" "}
                {investment.user.bio? investment.user.bio.slice(0, 50) : `Hey i am ${investment.user.name}`}...
              </h3>
            </div>
          </div>

          <div className=" w-[450px] h-[450px] my-4 ">
            <Graph analytics={analytics} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
