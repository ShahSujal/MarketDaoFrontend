"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  marketPlace,
  onDemand,
  trades,
} from "@/components/Sidebar/SidebarItems";
import {AlignHorizontalDistributeCenterIcon, Rabbit} from "lucide-react"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SidebarSection from "./SidebarSection";
import Link from "next/link";

export default function ContractedSidebar() {
  return (
    <div
      className="flex h-full w-20 flex-col items-center bg-black font-bold"
      style={{ zIndex: 100 }}
    >
      <div className="my-4 flex items-center justify-center">
        <AlignHorizontalDistributeCenterIcon />
        
      </div>
      <ScrollArea className="h-[calc(100vh-15rem)] px-2">
        <div className="flex w-full flex-col items-center text-white">
          <div className="w-full text-center text-[0.813rem]">MARKET PLACE</div>
          <SidebarSection section={marketPlace} />
          <Separator className="w-11/12 border-white" />
          <div className="flex w-full flex-col items-center">
            <div className="mt-6 w-full text-center text-[0.813rem]">
              CREATE TRADES
            </div>
            <SidebarSection section={trades} />
          </div>
          <Separator className="w-11/12 border-white" />
          <div className="flex w-full flex-col items-center">
            <SidebarSection section={onDemand} />
          </div>
          <Separator className="w-11/12 border-white" />
        </div>
      </ScrollArea>
      <Link href={"/rewards"} className="mx-auto flex justify-center py-8">
        <Button className="relative h-20 w-11/12 rounded-[0.8rem] bg-[#CAC1FF] text-base font-medium text-black hover:bg-[#CAC1FF]/80">
          <Rabbit className="-ml-1" />
          {/* <GotoArrowCircle className="absolute -top-[35%]" /> */}
        </Button>
      </Link>
    </div>
  );
}
