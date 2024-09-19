"use client";
import Detalks from "@/components/deTalks";
import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { useAccount } from "wagmi";

const Page = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
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
    </div>
  );
};

export default Page;
