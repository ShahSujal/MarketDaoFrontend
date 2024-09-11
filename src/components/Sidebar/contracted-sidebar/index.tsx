"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  marketPlace,
  onDemand,
  trades,
} from "@/components/Sidebar/SidebarItems";
import { HeartHandshake, Plus} from "lucide-react"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SidebarSection from "./SidebarSection";
import Link from "next/link";

export default function ContractedSidebar() {
  return (
    <div
      className="flex h-full w-20 flex-col items-center bg-gradient-to-br from-[#afaeae36] to-[#05050536] font-bold"
      style={{ zIndex: 100 }}
    >
      <div className="my-4 flex items-center justify-center">
      <HeartHandshake/>
        
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] px-2">
        <div className="flex w-full flex-col items-center text-white">
          <SidebarSection section={marketPlace} />
          <Separator className="w-11/12 border-white" />
          <div className="flex w-full flex-col items-center">
            <SidebarSection section={trades} />
          </div>
          <Separator className="w-11/12 border-white" />
          <div className="flex w-full flex-col items-center">
            <SidebarSection section={onDemand} />
          </div>
          <Separator className="w-11/12 border-white" />
        </div>
      </ScrollArea>
      <Link href={"/create"} className="mx-auto flex justify-center ">
        <Button className="relative h-20 w-11/12 flex flex-col rounded-[0.8rem] bg-[#CAC1FF] text-base font-medium text-black hover:bg-[#CAC1FF]/80">
          <Plus className="-ml-1" />
           Create
        </Button>
      </Link>
    </div>
  );
}
