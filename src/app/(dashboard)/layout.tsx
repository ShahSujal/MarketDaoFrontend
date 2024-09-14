"use client";
import ContractedSidebar from "@/components/Sidebar/contracted-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/others/navbar";
// import { XMTPProvider } from "@xmtp/react-sdk";
// import dynamic from "next/dynamic";
// 
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from "@xmtp/react-sdk";

const contentTypeConfigs = [
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
];
// <XMTPProvider>
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <XMTPProvider contentTypeConfigs={contentTypeConfigs}>
    <div className="flex h-screen relative bg-[#040015]">   
        <ContractedSidebar />
      <div className="flex h-screen flex-1 flex-col">
        <Navbar/>
        <ScrollArea className="absolute inset-0 h-screen">
          <div className="flex-1">{children}</div>
        </ScrollArea>
      </div>
    </div>
 </XMTPProvider>
  );
};
// </XMTPProvider>

export default RootLayout;
