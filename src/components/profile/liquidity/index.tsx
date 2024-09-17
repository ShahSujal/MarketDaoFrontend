"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chainsWithLogo } from "@/constants";
import { CurrentLiquidity } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  liquidity: CurrentLiquidity[];
  self: boolean;
};

const UserLiquidity = ({ liquidity, self }: Props) => {
  return (
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
            {liquidity.map((item) => {
              const chain = chainsWithLogo.find(
                (chain) => chain.chainId === item.chainId
              );
              return (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 h-40"
                >
                  <div className="p-1">
                    <Card className=" h-36 w-full ">
                      <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                        <Image
                          src={chain?.localImage || "/content/gradientCoin.svg"}
                          width={1000}
                          height={1000}
                          alt=""
                          className=" w-28 h-28  object-cover rounded-lg"
                        />
                        <div className=" flex flex-col justify-center items-center w-2/3">
                          <div className=" w-full flex flex-row justify-between ">
                            <h1 className=" text-lg font-paps font-bold text-gray-300">
                              {item.tokenAddress ||
                                chain?.chainName ||
                                "unknown"}
                            </h1>
                            <h1 className=" text-sm font-paps font-extralight text-gray-300">
                              last verified {item.updatedAt?.toDateString()}
                            </h1>
                          </div>
                          <div className=" w-full flex flex-row justify-between ">
                            <h3 className=" text-gray-400 font-paps font-light">
                              {item.amount}
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
              );
            })}
            {liquidity.length < 1 && (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-40">
                <div className="p-1">
                  <Card className=" h-36 w-full ">
                    <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                      <Image
                        src={"/content/gradientCoin.svg"}
                        width={1000}
                        height={1000}
                        alt=""
                        className=" w-28 h-28  object-cover rounded-lg"
                      />
                       <div className=" flex flex-col justify-center items-center w-2/3">
                       <div className=" w-full flex flex-row justify-between ">
                            <h1 className=" text-lg font-paps font-bold text-gray-300">
                              Native TBsc
                            </h1>
                            <h1 className=" text-xs font-paps font-extralight text-gray-300">
                              last verified {new Date().toDateString()}
                            </h1>
                          </div>
                          <div className=" w-full flex flex-row justify-between ">
                            <h3 className=" text-gray-400 font-sm font-paps font-light">
                             0.24 TBsc
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
            )}
            {liquidity.length < 1 && (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-40">
                <div className="p-1">
                  <Card className=" h-36 w-full ">
                    <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                      <Image
                        src={"/content/gradientCoin.svg"}
                        width={1000}
                        height={1000}
                        alt=""
                        className=" w-28 h-28  object-cover rounded-lg"
                      />
                       <div className=" flex flex-col justify-center items-center w-2/3">
                       <div className=" w-full flex flex-row justify-between ">
                            <h1 className=" text-lg font-paps font-bold text-gray-300">
                            0xf4..787 Gtk 
                            </h1>
                            <h1 className=" text-xs font-paps font-extralight text-gray-300">
                              last verified {new Date().toDateString()}
                            </h1>
                          </div>
                          <div className=" w-full flex flex-row justify-between ">
                            <h3 className=" text-gray-400 font-sm font-paps font-light">
                           24 token
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
            )}
            {/* {liquidity.length < 1 && (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-40">
                <div className="p-1">
                  <Card className=" h-36 w-full ">
                    <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                      <Image
                        src={"/content/gradientCoin.svg"}
                        width={1000}
                        height={1000}
                        alt=""
                        className=" w-28 h-28  object-cover rounded-lg"
                      />
                      <div className="flex flex-col justify-evenly items-center">
                        <h1 className=" text-lg font-fragment font-bold">
                          0x245...f56 token
                        </h1>
                        <Button
                          className="w-28 h-8 relative mt-7 rounded-3xl text-gray-200 bg-gradient-to-tr from-[#3bb7f0] to-[#2670f9] font-fragment font-medium "
                          disabled
                        >
                          Verify
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )} */}
            {/* {self && (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-40">
                <div className="p-1">
                  <Card className=" h-36 w-full ">
                    <CardContent className="flex  items-center justify-center flex-row w-full h-full ">
                      <Image
                        src={"/content/gradientCoin.svg"}
                        width={1000}
                        height={1000}
                        alt=""
                        className=" w-28 h-28  object-cover rounded-lg"
                      />
                      <div className="flex flex-col justify-evenly items-center">
                        <h1 className=" text-xl font-fragment font-bold">
                          Add your first liquidity
                        </h1>
                        <Button className="w-28 h-8 relative mt-7 rounded-3xl text-gray-200 bg-gradient-to-tr from-[#3bb7f0] to-[#2670f9] font-fragment font-medium ">
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )} */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default UserLiquidity;
