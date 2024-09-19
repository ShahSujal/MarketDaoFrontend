import ProfileEdit from "@/components/dashboard/ProfileEdit";
import { walletAddressShortn } from "@/lib/actions";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { BlocksIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Address } from "viem";

type Props = {
  bannerImage: string;
  walletAddress: string;
  profileImage: string | null;
  name: string | null;
  bio: string | null;
  discord: string | null;
  twitter: string | null;
  opensea: string | null;
  self: boolean;
};


const ProfileBanner = ({
  bannerImage,
  walletAddress,
  profileImage,
  name,
  bio,
  discord,
  twitter,
  opensea,
  self,
}: Props) => {
  return (
    <div className=" flex w-full relative h-[450px] justify-start  items-end ">
      <Image
        src={"/content/tempo.png"}
        width={1000}
        height={1000}
        alt=""
        className=" w-full h-[450px]  grayscale absolute top-0 transition group-hover:grayscale-0 object-cover opacity-50 rounded-3xl"
      />
      <Image
        src={
          profileImage
            ? process.env.NEXT_PUBLIC_IMAGE_URL! + profileImage
            : "https://avatar.iran.liara.run/public"
        }
        width={1000}
        height={1000}
        alt=""
        className=" w-[250px] h-[250px]  grayscale  transition group-hover:grayscale-0 object-cover rounded-full my-4 mx-4"
      />
      <div className=" w-2/5 h-[250px] flex justify-center z-10 mx-4 items-start flex-col">
        <h1 className=" text-3xl font-paps font-bold text-white">{name || walletAddressShortn(walletAddress as Address)}</h1>
        <h1 className=" text-lg font-paps font-medium text-gray-200 ">
          {bio
            ? bio
            : `Hey there! My name is ${name ?? "hello"} and I am a creator on Tempo.`}
        </h1>
      </div>

      <div className=" absolute right-9 bottom-6 flex flex-row z-10">
        {discord && (
          <Link href={discord}>
            <button className="w-9 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-medium  flex justify-center items-center">
              <DiscordLogoIcon width={30} height={30} />
            </button>
          </Link>
        )}
        {twitter && (
          <Link href={twitter}>
            <button className="w-9 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-medium  flex justify-center items-center">
              <TwitterLogoIcon width={30} height={30} />
            </button>
          </Link>
        )}
        {opensea && (
          <Link href={opensea}>
            <button className="w-9 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-medium  flex justify-center items-center">
              <BlocksIcon width={30} height={30} />
            </button>
          </Link>
        )}
        {self ? (
          <ProfileEdit />
        ) : (
         <Link href={`/deTalks/${walletAddress}`}>
           <button className="w-44 h-9 relative rounded-full text-gray-50 font-bold bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-fragment flex justify-center items-center backdrop-blur-xl mx-2">
            message investor
          </button>
         </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileBanner;
