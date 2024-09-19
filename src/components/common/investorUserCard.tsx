import { User } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import { TInvestorStake } from "@/types/common";
import { chainsWithLogo } from "@/constants";
import { Button } from "../ui/button";
import { walletAddressShortn } from "@/lib/actions";
import { Address } from "viem";
import Link from "next/link";

type Props = {
  investor: TInvestorStake;
};

const InvestorUserCard = ({ investor }: Props) => {
  return (
    <div className="w-[300px] bg-black flex justify-between items-center flex-col h-[320px] m-3">
      <div className=" w-10/12 h-48 justify-center items-center flex bg-[#141313] ">
        <Image
          src={
            investor.image
              ? process.env.NEXT_PUBLIC_IMAGE_URL! + investor.image
              : `https://avatar.iran.liara.run/public/boy?username=${investor.walletAddress}`
          }
          alt=""
          width={1080}
          height={1080}
          className=" w-full h-48 object-cover rounded-full"
        />
      </div>
      <h1 className=" text-lg font-paps">
        {investor.name ||
          walletAddressShortn(investor.walletAddress as Address)}
      </h1>
      <h3 className=" text-sm text-gray-500 text-center">
        {investor.bio?.slice(0, 60)}...
      </h3>

      <div className=" h-16 w-full relative flex justify-center items-center">
        <Image
          src={"/content/circuits-mobile.webp"}
          width={1080}
          height={1080}
          alt=""
          className=" w-full h-16 absolute rounded-xl object-cover"
        />
        <Link href={`/investors/${investor.walletAddress}`}>
          <Button className=" w-36 h-8 bg-[#0000001a] text-white backdrop-blur-sm">
            View
          </Button>
        </Link>
      </div>
      <div className=" flex flex-row justify-end items-center absolute z-10 right-5 top-3">
        {investor.stakes.slice(0, 4).map((item) => {
          return (
            <div key={item.id}>
              <Image
                src={
                  chainsWithLogo.find(
                    (chainData) => chainData.chainId === item.chainId
                  )?.localImage || "/chain/ethereum.png"
                }
                width={30}
                height={30}
                alt=""
                className=" w-8 h-8 rounded-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestorUserCard;
