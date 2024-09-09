"use client";
import React, { useEffect } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { walletAddressShortn } from "@/lib/actions";
import { createUser } from "@/actions/user";
import { chainsWithLogo } from "@/constants";
import Image from "next/image";
import CustomButton from "../common/customButton";
type Props = {};

const Navbar = (props: Props) => {
  const { open, close } = useWeb3Modal();
  const { address, chainId, chain } = useAccount();
  useEffect(() => {
    if (address) {
      const create = async () => {
        const user = await createUser(address);
        console.log(user);
      };
      create();
    }
  }, [address]);

  return (
    <nav className=" flex justify-end items-center w-full h-[44px] px-6">
      {chain?.name && (
        <div className={` w-[180px] h-8 relative flex justify-center items-center rounded-2xl`}>
          <Image
            src={"/content/cardbg.jpeg"}
            width={100}
            height={100}
            alt=""
            className=" w-full h-full rounded-2xl absolute top-0 object-cover transition"
          />
          <button
            className="flex items-center justify-center flex-row w-40 h-8 relative rounded-2xl text-gray-400 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 font-fragment font-medium "
            onClick={() => open()}
          >
            {chainsWithLogo.find((chain) => chain.chainId === chainId)
              ?.chainName || chain?.name}
            <Image
              src={
                chainsWithLogo.find((chain) => chain.chainId === chainId)
                  ?.localImage || "/base.png"
              }
              alt=""
              width={250}
              height={250}
              className="w-4 h-4 mr-1"
            />
          </button>
        </div>
      )}
      <div className={`w-[180px] h-8 ml-4 relative flex justify-center items-center rounded-2xl`}>
        <Image
          src={"/content/cardbg.jpeg"}
          width={100}
          height={100}
          alt=""
          className=" w-full h-full rounded-2xl absolute top-0 object-cover transition"
        />
        <button
          className="flex items-center justify-center flex-row w-40 h-8 relative rounded-2xl text-gray-400 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 font-fragment font-medium "
          onClick={() => open()}
        >
          {address ? walletAddressShortn(address) : "Connect wallet"}
        </button>
      </div>

      {/* <CustomButton title={address ? walletAddressShortn(address) :"Connect wallet" } icon={<AlignEndVerticalIcon className=' w-4 h-4'/>} width='120px' height='15px'/> */}
    </nav>
  );
};

export default Navbar;
