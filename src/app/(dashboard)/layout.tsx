"use client";
import ContractedSidebar from "@/components/Sidebar/contracted-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/others/navbar";
import Spline from "@splinetool/react-spline";
// import dynamic from "next/dynamic";
// const XMTPProvider = dynamic(() => import("@xmtp/react-sdk").then(mod => mod.XMTPProvider), { ssr: false });



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <XMTPProvider>
    <div className="flex h-screen relative bg-[#040015]">
      <div className="">
        <ContractedSidebar />
      </div>
      <div className="flex h-screen flex-1 flex-col">
        <Navbar/>
        <ScrollArea className="absolute inset-0 h-screen">
          <div className="flex-1">{children}</div>
        </ScrollArea>
      </div>
    </div>
    // </XMTPProvider>
  );
};

export default RootLayout;
