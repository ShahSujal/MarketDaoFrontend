import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const InvestorCard = (props: Props) => {
  return (
    <div className=" w-[350px] h-[360px] my-4 rounded-xl relative bg-gradient-to-br from-[#2e2e2e28] to-[#fffdfd18]  items-center flex flex-col border-2 border-[#171717] backdrop-blur-lg ">
      <Image
        src={"/content/discover.webp"}
        alt=""
        width={350}
        height={450}
        className=" w-11/12 h-[200px] object-cover rounded-lg"
      />
      <div className=" flex flex-row justify-end items-center absolute right-5 top-3">
        <Image
          src={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={350}
          height={450}
          className=" w-6 h-6 object-cover rounded-full"
          title="binance"
        />
      </div>
      <div className=" w-full flex flex-col justify-center items-center">
        <h3>30% Returns </h3>
        <div className=" flex w-full flex-row justify-between items-center px-3">
          <h1 className=" text-xl font-paps font-bold text-gray-300">
            Investor Name
          </h1>
          <h1 className=" text-lg font-paps font-extralight text-gray-500">
            since 1 year
          </h1>
        </div>
        <h3 className=" text-gray-500 font-paps font-light px-3">
          {" "}
          Lorem ipsum dolor sit amet, consectetur asv adipisicing elit. Cum
          blanditiis...{" "}
        </h3>
      </div>
      <Link href={'/dapp/hello'} className="w-full flex justify-center">
      <Button className=" w-10/12 mt-3" variant={"secondary"}>
        pitch now
      </Button>
      </Link>
    </div>
  );
};

export default InvestorCard;
