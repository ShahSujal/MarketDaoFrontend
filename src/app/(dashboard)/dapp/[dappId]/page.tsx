"use client";
import { Graph } from "@/components/common/graph";
import { PitchTable } from "@/components/common/pitchesmap";
import InvestorAnanlytics from "@/components/others/investor-ananlytics";
import InvestorDescription from "@/components/others/investordescription";
import { InvestorCarousel } from "@/components/others/investors-carousel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
    const [desc, setdesc] = useState(false)
  return (
    <main className=" w-full min-h-screen">
      <Image
        src={"/content/tempimage.png"}
        alt=""
        width={1780}
        height={450}
        className=" w-full h-[450px] rounded-2xl object-cover"
      />
      <div className=" flex flex-row w-full min-h-screen relative">
        <div className=" w-[calc(100%-450px)]">
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
        {
            desc ?   <InvestorDescription/> : <InvestorAnanlytics/>
        }
        
        
        </div>        
      


        <div className=" flex justify-center   bg-zinc-900 items-start flex-col w-[450px] min-h-screen">
          <div className=" flex justify-center flex-col items-center w-[450px] h-full  rounded-2xl">
            <Image
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              width={400}
              height={450}
              className=" w-[300px] h-[300px] object-cover rounded-full"
            />

            <div className=" w-full flex flex-col justify-center items-center">
              <h3 className=" text-xl font-paps my-4 font-bold text-gray-300">
                Founder
              </h3>
              <div className=" flex w-full flex-row justify-between items-center px-3">
                <h1 className=" text-xl font-paps font-bold text-gray-300">
                  Alexander
                </h1>
                <h1 className=" text-lg font-paps font-extralight text-gray-500">
                  65% equity
                </h1>
              </div>
              <h3 className=" text-gray-500 font-paps font-light px-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur asv adipisicing elit.
                Cum blanditiis...{" "}
              </h3>
            </div>
          
          
          </div>
          <h1 className=" text-3xl pl-3  text-[#c0bebe] mt-10 my-2 ">
              Pitches{" "}
            </h1>
            <p className="text-[#ddd] pl-3">
              Recent months Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>

          <div className=" w-[450px] h-[450px] my-4 ">
              <Graph />
            </div>
        </div>
         
      </div>

    </main>
  );
};

export default page;
