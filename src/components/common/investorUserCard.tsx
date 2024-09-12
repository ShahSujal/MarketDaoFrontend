import { User } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import { TInvestorStake } from "@/types/common";
import { chainsWithLogo } from "@/constants";

type Props = {
  investor: TInvestorStake;
};

const InvestorUserCard = ({ investor }: Props) => {
  return (
    <div className="w-[350px] bg-black flex justify-center items-center flex-col h-[350px] m-3">
      <div className=" w-10/12 h-48 ">
        <Image
          src={investor.image ? process.env.NEXT_PUBLIC_IMAGE_URL! + investor.image: "/content/illustration.png"}
          alt=""
          width={1080}
          height={1080}
          className=" w-full h-48 rounded-xl"
        />
      </div>
      <h1 className=" text-xl font-paps my-2">{investor.name}</h1>

      <div>{investor.bio?.slice(0, 12)}...</div>

      <div className=" flex flex-row justify-end items-center absolute right-5 top-3">
        {
          investor.stakes.slice(0,4).map((item) => {
            return (
              <div key={item.id}>
                <Image src={chainsWithLogo.find((chainData)=>chainData.chainId === item.chainId)?.localImage || "/chain/ethereum.png"} width={30} height={30} alt="" className=" w-8 h-8 rounded-full object-cover" />
                <span className=" text-white text-xs">{item.stake}</span>
                
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default InvestorUserCard;
