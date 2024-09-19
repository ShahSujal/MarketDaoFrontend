import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TInvestorIdProps } from "@/types/common";
import Image from "next/image";
import { walletAddressShortn } from "@/lib/actions";
import { Address } from "viem";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  investment: TInvestorIdProps;
};

export function InvestorCarousel({ investment }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {investment.accounts.map((investor, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="flex justify-center items-center flex-col">
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image
                    src={`https://avatar.iran.liara.run/public/boy?username=${investor}`}
                    alt=""
                    width={1080}
                    height={1080}
                    className="w-full h-48 object-cover rounded-full"
                  />
                </CardContent>
                <h1 className="text-lg font-paps">
                  {walletAddressShortn(investor as Address)}
                </h1>
                <Link href={`/investors/${investor}`} className=" w-full my-2 flex justify-center items-center">
                <Button className=" w-10/12" variant={"secondary"}>
                  View
                </Button>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}