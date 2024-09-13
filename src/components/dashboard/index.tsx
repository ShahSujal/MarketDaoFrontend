"use client";
import InvestorCard from "@/components/common/investorcard";
import ProfileEdit from "@/components/dashboard/ProfileEdit";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { walletAddressShortn } from "@/lib/actions";
import { userAtom } from "@/services/jotai/atom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";

type Props = {};

const Dashboard = (props: Props) => {
const [user] = useAtom(userAtom)
  const { address } = useAccount();
  return (
    <main className=" w-full min-h-screen  flex flex-row flex-wrap  justify-evenly ">
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
           user?.image ?? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1000}
          height={1000}
          alt=""
          className=" w-[250px] h-[250px]  grayscale  transition group-hover:grayscale-0 object-cover rounded-full my-4 mx-4"
        />
        <div className=" w-2/5 h-[250px] flex justify-center z-10 mx-4 items-start flex-col">
          <h1 className=" text-3xl font-paps font-bold text-white">{user?.name}</h1>
          <h1 className=" text-lg font-paps font-medium text-gray-200 ">
            {
              user?.bio ? user.bio : `Hey there! My name is ${user?.name ?? "hello"} and I am a creator on Tempo.`
            }
          </h1>
        </div>

        <div className=" absolute right-9 bottom-6 flex flex-row z-10">
          <button className="w-9 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-medium  flex justify-center items-center">
            <GitHubLogoIcon width={30} height={30} />
          </button>
         <ProfileEdit/>
        </div>
      </div>

      <div className=" w-full h-[260px]   flex flex-col">
        <h1 className=" text-xl font-medium mt-5 font-fragment text-gray-200 mx-8  ">
          Active Holdings
        </h1>
        <div className=" w-full h-[250px]  flex justify-center items-center ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12 relative   "
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 h-40"
                >
                  <div className="p-1">
                    <Card className=" h-36 w-full ">
                      <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                        <Image
                          src="/content/gradientCoin.svg"
                          width={1000}
                          height={1000}
                          alt=""
                          className=" w-28 h-28  object-cover rounded-lg"
                        />
                        <div className=" flex flex-col justify-center items-center w-2/3">
                          <div className=" w-full flex flex-row justify-between ">
                            <h1 className=" text-lg font-paps font-bold text-gray-300">
                              Ethereum
                            </h1>
                            <h1 className=" text-sm font-paps font-extralight text-gray-300">
                              last verified 24 hr ago
                            </h1>
                          </div>
                          <div className=" w-full flex flex-row justify-between ">
                            <h3 className=" text-gray-400 font-paps font-light">
                              23 eth
                            </h3>
                            <button className="w-28 h-8 relative mt-7 rounded-3xl text-gray-200 bg-gradient-to-tr from-[#9959ff] to-[#ff7aa6]font-fragment font-medium ">
                              verify
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className=" flex justify-center items-center flex-row w-full h-[50vh]">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-xl font-medium mt-5 font-fragment text-gray-200 mx-8  ">
            Investement Partners
          </h1>
          <div className=" w-full h-[250px]  flex justify-center items-center ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-11/12 relative   "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 h-40"
                  >
                    <div className="p-1">{/* <InvestorCard /> */}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div className=" w-full min-h-[50vh]  flex justify-center flex-row items-center ">
        <div className=" w-1/4 h-full text-gray-200 flex justify-center flex-col items-center">
          <h1 className=" text-[50px] text-gray-300 font-fragment font-medium   ">
            Owned Dapp
          </h1>
          <h4 className=" text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            cumque iusto ea.
          </h4>
        </div>
        <div className=" w-2/3 h-full border border-[#717070] rounded-3xl flex justify-evenly items-center ">
          <Image
            src={"/content/illustration.png"}
            width={1000}
            height={1000}
            alt=""
            className=" w-1/2 h-[300px]  object-cover rounded-2xl"
          />
          <div className=" w-2/5 h-full flex justify-evenly items-center relative ">
            <div className=" w-full h-full flex justify-center items-center flex-col">
              <h1 className=" text-3xl font-paps my-4 font-bold text-gray-300 mt-4">
                username
              </h1>
              <h1 className=" text-sm font-paps font-medium text-gray-400 p-2 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus maxime temporibus libero! Illo, magnam dicta aliquam
                reiciendis odit nesciunt eveniet hic voluptatum ea totam!
              </h1>
              <div className=" flex flex-row group h-44  justify-center items-center w-full relative ">
                <button className="w-44 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e348] to-[#35353531] backdrop-blur-lg font-fragment font-medium  flex justify-center items-center z-20">
                  pitch now
                </button>
                <div className=" w-full h-36 absolute grayscale hover:grayscale-0 transition  overflow-hidden">
                  <Image
                    src={"/content/circuits-mobile.webp"}
                    width={1000}
                    height={1000}
                    alt=""
                    className=" w-full h-[120px] object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center flex-row w-full h-[50vh]">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-xl font-medium mt-5 font-fragment text-gray-200 mx-8  ">
            Earned Rewards
          </h1>
          <div className=" w-full h-[250px]  flex justify-center items-center ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-11/12 relative   "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 h-40"
                  >
                    <div className="p-1">{/* <InvestorCard /> */}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
