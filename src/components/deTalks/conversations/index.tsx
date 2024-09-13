import { ScrollArea } from "@/components/ui/scroll-area";
import { walletAddressShortn } from "@/lib/actions";
import { TPeerType } from "@/types/common";
import { useConversations } from "@xmtp/react-sdk";
import Image from "next/image";
import React from "react";
import { Address } from "viem";

type Props = {
  checkPeerDetails: React.Dispatch<React.SetStateAction<TPeerType>>;
};

const UserConversations = (props: Props) => {
  const { conversations } = useConversations();
  return (
    <ScrollArea className=" flex flex-col w-[400px] py-6 bg-gradient-to-tr from-[#3434342d] to-[#bcb9b926] h-[94vh] ">
      {conversations.map((conversation) => {
        return (
          <div
            className="flex flex-row w-full my-3 h-16 rounded-lg px-2 bg-[#4241415e] hover:bg-[#ffffff5e] justify-between items-center cursor-pointer"
            key={conversation.peerAddress}
            onClick={() => {
              props.checkPeerDetails({
                peerAddress: conversation.peerAddress as Address,
                conversation: conversation,
              });
            }}
          >
            <div className="flex flex-row items-center">
              <Image
                src="/content/illustration.png"
                width={50}
                height={50}
                alt=""
                className=" w-[40px] h-[40px] mx-4 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-xl font-paps">
                  {walletAddressShortn(conversation.peerAddress as Address)}
                </h2>
                <p className="text-xs">@username</p>
              </div>
            </div>
            <h4 className=" h-full text-sm text-gray-500">
              {conversation.createdAt?.toDateString()}
            </h4>
          </div>
        );
      })}
    </ScrollArea>
  );
};

export default UserConversations;
