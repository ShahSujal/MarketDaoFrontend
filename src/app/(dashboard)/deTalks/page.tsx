"use client";
import InformationCard from "@/components/common/informationCard";
import Detalks from "@/components/deTalks";
import { Button } from "@/components/ui/button";
import { blogs } from "@/constants";
import { BlogType } from "@/types/enum";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { useAccount } from "wagmi";

const Page = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const blog = blogs.find((item) => item.type === BlogType.Detalks)
  return (
    <div>
      {address ? (
        <Detalks />
      ) : (
        <div className=" w-full min-h-screen flex justify-center items-center flex-col bg-black">
          <h1 className=" text-xl font-paps font-bold">
            To access detalks functionality you need to
          </h1>
          <Button
            className=" mt-4"
            onClick={() => {
              open();
            }}
          >
            Connect Wallet
          </Button>
        </div>
      )}
      {
        blog?.type && <InformationCard uuid={blog.uuid}/>
      }
    </div>
  );
};

export default Page;
