"use client";
import ContractedSidebar from "@/components/Sidebar/contracted-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/others/navbar";
import Spline from "@splinetool/react-spline";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen relative bg-black">
      <div className="">
        <ContractedSidebar />
      </div>
      <div className="flex h-screen flex-1 flex-col">
        <Navbar/>
        <ScrollArea className="absolute inset-0 h-screen">
          <div className="flex-1 py-10 pb-0 pl-[20px]">{children}</div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default RootLayout;
