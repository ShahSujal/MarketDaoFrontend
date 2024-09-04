"use client";
import ExpandedSidebar from "@/components/Sidebar/expanded-sidebar";
import ContractedSidebar from "@/components/Sidebar/contracted-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/others/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-black">
      <div className="hidden bg-[#121212] p-4 md:block">
        <ExpandedSidebar />
      </div>
      <div className="md:hidden">
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
