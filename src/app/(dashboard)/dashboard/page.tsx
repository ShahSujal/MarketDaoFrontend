import { getUserAllDetails } from "@/actions/user";
import Dashboard from "@/components/dashboard";
import React from "react";
const Page = async() => {
 const userInfo = await getUserAllDetails("0x1059Ed65AD58ffc83642C9Be3f24C250905a28FB");
  return (
    <main className=" w-full min-h-screen ">
    <Dashboard userInfo={userInfo}/>
    </main>
  );
};

export default Page;
