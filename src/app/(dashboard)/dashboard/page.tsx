"use client";
import { getUserAllDetails } from "@/actions/user";
import InformationCard from "@/components/common/informationCard";
import Dashboard from "@/components/dashboard";
import { blogs } from "@/constants";
import useUserInfo from "@/hooks/useUserInfo";
import { config } from "@/lib/config/wagmiConfig";
import { BlogType } from "@/types/enum";
import { getAccount } from "@wagmi/core";
import React from "react";
import { useAccount } from "wagmi";

const Page = () => {
  const blog = blogs.find((item) => item.type === BlogType.Dashboard);
  const { userInfo } = useUserInfo();
  return (
    <main className="w-full min-h-screen">
      {userInfo && <Dashboard userInfo={userInfo} self={true} />}
      {blog?.type && <InformationCard uuid={blog.uuid} />}
    </main>
  );
};

export default Page;