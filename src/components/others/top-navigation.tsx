import { AudioLines, Coins, Github, GithubIcon, HeartHandshake, Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {};

const TopNavigation = (props: Props) => {
  return (
    <div className=" w-full h-14 flex mt-[30px] bg-gradient-to-br from-[#64636328] to-[#fffdfd18] justify-between items-center px-4 rounded-3xl backdrop-blur-sm">
      <div
        className="flex items-center gap-2 font-paps flex-row font-medium text-xl text-[#aba8a8]  md:text-base"
      >
       
        <HeartHandshake/> Stakeyards
      </div>

      <div className=" flex justify-center space-x-4 items-center">
        <Link href={"/dapp"}>
         <div className=" w-40 h-8 max-md:w-32 relative rounded-2xl">
          <Image src="/content/cardbg.jpeg" width={100} height={100} alt="" className=" w-full h-full rounded-2xl absolute top-0 object-cover transition"/>
         <button className="flex items-center max-md:w-32 justify-center flex-row w-40 h-8 relative rounded-2xl text-gray-400 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 font-fragment font-medium ">
          <AudioLines width={14} height={14}/> &nbsp;  Dashboard
          </button>
         </div>
        </Link>
        <Link href={"https://github.com/ShahSujal/Stakeyards"}>
         <div className=" w-8 h-8 relative rounded-full ">
          <Image src="/content/cardbg.jpeg" width={100} height={100} alt="" className=" w-full h-full rounded-2xl absolute top-0 object-cover transition"/>
         <button className="flex items-center justify-center w-8 h-8 relative rounded-full text-gray-400 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 ">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </button>
         </div>
        </Link>
      </div>
    </div>
  );
};

export default TopNavigation;
