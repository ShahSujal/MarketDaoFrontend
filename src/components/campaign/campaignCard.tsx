import { chainsWithLogo } from "@/constants";
import { Campaign } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  campaign: Campaign;
};

const CampaignCard = ({ campaign }: Props) => {
  return (
    <div className=" w-[320px] h-[380px] my-4 rounded-xl mx-3 relative bg-gradient-to-br from-[#4342425b] to-[#050505bd]  items-center flex flex-col border-2 border-[#171717] backdrop-blur-lg z-10 ">
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_URL! + campaign.image}
        alt=""
        width={350}
        height={450}
        className=" w-11/12 h-[200px] object-cover rounded-lg"
      />
      <div className=" flex flex-row justify-between items-center absolute right-5 top-3">
        <h1>{campaign.status}</h1>
        <Image
          src={
            chainsWithLogo.find(
              (chainData) => chainData.chainId === campaign.chainId
            )?.localImage || "/chain/ethereum.png"
          }
          width={30}
          height={30}
          alt=""
          className=" w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" flex w-full flex-row justify-between items-center px-3 mt-2">
          <h1 className=" text-lg font-paps font-bold text-gray-300">
            {campaign.title}
          </h1>
          <h1 className=" text-sm font-paps font-extralight text-gray-300">
            {campaign.totalPrize}
          </h1>
        </div>
        <h3 className=" text-gray-400 font-paps font-light px-3">
          {" "}
          {campaign.description.slice(0, 50)}...
        </h3>
      </div>
      <div className=" w-full flex justify-center group items-center h-24 relative rounded-lg">
        <Image
          src="/content/circuits-mobile.webp"
          width={1000}
          height={1000}
          alt=""
          className=" w-full h-20  absolute top-0 grayscale  transition group-hover:grayscale-0 object-cover"
        />
        <Link href={`/campaign/${campaign.id}`} className=" w-10/12 mt-6">
          <button className="flex items-center justify-center flex-row w-full h-10 relative rounded-lg text-gray-200 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 font-fragment font-medium ">
            Pitch Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
