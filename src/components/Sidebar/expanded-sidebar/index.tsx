"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  marketPlace,
  onDemand,
  trades,
} from "@/components/Sidebar/SidebarItems";
import { Separator } from "@/components/ui/separator";
import SidebarSection from "@/components/Sidebar/expanded-sidebar/SidebarSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlignVerticalSpaceBetweenIcon, Rabbit } from "lucide-react";

export default function ExpandedSidebar() {
  return (
    <div
      className="flex h-full w-64 flex-col items-center bg-black font-bold"
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-center gap-4">
        <Rabbit />
        <span className="mt-1 font-p2p text-xl font-normal uppercase leading-5 -tracking-[0.02em] text-white">
          Otc&nbsp;Layer
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)] w-full px-3">
        <div className="mt-6 flex w-full flex-col items-center text-white">
          <div className="w-full">
            <div className="text-start text-[0.813rem]">MARKET&nbsp;PLACE</div>
            <SidebarSection section={marketPlace} />
          </div>
          <Separator className="w-11/12 border-white" />
          <div className="w-full">
            <div className="mt-6 text-start text-[0.813rem]">
              CREATE&nbsp;TRADES
            </div>
            <SidebarSection section={trades} />
          </div>
          <Separator className="w-11/12 border-white" />
          <div className="w-full">
            <SidebarSection section={onDemand} />
          </div>
          <Separator className="w-11/12 border-white" />
        </div>
      </ScrollArea>
      <Link
        href={"/investment/create"}
        className="mx-auto flex w-11/12 justify-center px-2.5 "
      >
        <Button className="relative h-16 w-full gap-1 rounded-[0.8rem] bg-[#CAC1FF] text-lg font-medium text-black hover:bg-[#CAC1FF]/80">
          <AlignVerticalSpaceBetweenIcon />
          Launch Dapp
        </Button>
      </Link>
    </div>
  );
}