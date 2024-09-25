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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { chainsWithLogo } from "@/constants";
import { CurrentLiquidity } from "@prisma/client";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { addLiquidity, verifyLiquidity } from "@/contract/helpers/addLiquidity";
import { walletAddressShortn } from "@/lib/actions";
import { Address } from "viem";

type Props = {
  liquidity: CurrentLiquidity[];
  self: boolean;
};

const UserLiquidity = ({ liquidity, self }: Props) => {
  const [native, setNative] = useState<boolean>(true);

  const [tokenAddress, setTokenAddress] = useState<string>("");
  const submitLiquidity = async () => {
    if (!native && !tokenAddress) {
      toast({ title: "Please provide a valid token address" });
      return;
    }
    await addLiquidity({
     tokenAddress: tokenAddress,
     isNative: native,
    })
  }
   const checkLiquidity = async ({
    id,
    tokenAddress,
    isNative,
    lastUpdated,
    amount,
    userId,
    chainId
  }: {
    id: string;
    tokenAddress?: string;
    isNative: boolean;
    lastUpdated: Date;
    amount: number;
    userId: string;
    chainId: number;
  }) => {
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - lastUpdated.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);
  
    if (hoursDifference < 8) {
       toast({ title: "You can only verify liquidity after 8 hours" });
      return; // or throw an error if you prefer
    }
  
    await verifyLiquidity({
      tokenAddress,
      isNative,
      id,
      amount,
      userId,
      chainId
    });
  };
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
                      <CardContent className="flex  items-center justify-evenly flex-row w-full h-full ">
                        <Image
                          src={chain?.localImage || "/content/gradientCoin.svg"}
                          width={1000}
                          height={1000}
                          alt=""
                          className=" w-16 h-16  object-cover rounded-lg"
                        />
                        <div className=" flex flex-col justify-center items-start w-2/3">
                          <div className=" w-full flex flex-row justify-between ">
                            <h1 className=" text-lg font-paps cursor-pointer font-bold text-gray-300" title={
                              item.tokenAddress?item.tokenAddress :
                                chain?.chainName ? chain.chainName :
                                "unknown"
                            }>
                              {item.tokenAddress?walletAddressShortn(item.tokenAddress as Address) :
                                chain?.chainName ? chain.chainName :
                                "unknown"}
                            </h1>
                            <h1 className=" text-xs font-paps font-extralight text-gray-300">
                             {item.updatedAt?.toDateString()}
                            </h1>
                          </div>
                          <div className=" w-full flex flex-row justify-between ">
                            <h3 className=" text-gray-400 font-paps font-light">
                              {item.amount.toString()} {item.tokenSymbol}
                            </h3>
                            <button className="w-28 h-8 relative mt-7 rounded-3xl text-gray-200 bg-gradient-to-tr from-[#9959ff] to-[#ff7aa6]font-fragment font-medium " onClick={()=>{
                              checkLiquidity({
                                id: item.id,
                                tokenAddress: item.tokenAddress ?? undefined,
                                isNative:item.isNative,
                                lastUpdated:item.updatedAt,
                                amount:item.amount,
                                userId:item.userId,
                                chainId:item.chainId
                              })
                            }}>
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
                      <div className=" flex flex-col justify-center items-center w-2/3">
                        <div className=" w-full flex flex-row justify-between ">
                          <h1 className=" text-lg font-paps font-bold text-gray-300">
                            Not Added
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
            )} */}
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
                      <div className=" flex flex-col justify-center items-center w-2/3">
                        <div className=" w-full flex flex-row justify-between ">
                          <h1 className=" text-lg font-paps font-bold text-gray-300">
                            Add your first liquidity
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
            )} */}
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
            {self && (
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
                          {liquidity.length < 1 ? "Add your first liquidity" : "Add more liquidity"}
                        </h1>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-28 h-8 relative mt-7 rounded-3xl text-gray-200 bg-gradient-to-tr from-[#3bb7f0] to-[#2670f9] font-fragment font-medium ">
                              Add
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Add Liquidity</DialogTitle>
                              <DialogDescription>
                                Anyone can verify your liquidity
                              </DialogDescription>
                            </DialogHeader>

                            <div className="items-top flex space-x-2">
                              <Checkbox
                                id="terms1"
                                defaultChecked={native}
                                onCheckedChange={(e:boolean)=>{
                                  setNative(e)
                                }}
                              />
                              <div className="grid gap-1.5 leading-none">
                                <Label
                                  htmlFor="terms1"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Is Native Currency?
                                </Label>
                              </div>
                            </div>

                            {!native ?(
                              <div className="flex items-center space-x-2">
                                <div className="grid flex-1 gap-2">
                                  <Label htmlFor="address" className="sr-only">
                                    TokenAddress
                                  </Label>
                                  <Input
                                    id="address"
                                    onChange={(e) => {
                                      setTokenAddress(e.target.value);
                                    }}
                                    placeholder="Token Address"
                                  />
                                </div>
                              </div>
                            ):(<></>)}
                            <DialogFooter className="sm:justify-start">
                              <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                  Close
                                </Button>
                              </DialogClose>
                              <Button
                                onClick={submitLiquidity}
                                type="button"
                                variant="secondary">
                                  submit
                                </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default UserLiquidity;
