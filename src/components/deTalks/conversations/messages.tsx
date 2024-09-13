import { ScrollArea } from "@/components/ui/scroll-area";
import { walletAddressShortn } from "@/lib/actions";
import {
  useClient,
  useConversations,
  useMessages,
  useSendMessage,
  useStreamConversations,
  useStreamMessages,
} from "@xmtp/react-sdk";
import type {
  CachedConversation,
  Client,
  ContentTypeMetadata,
  Conversation,
  DecodedMessage,
} from "@xmtp/react-sdk";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Address } from "viem";
import ChatCard from "./chatCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  peerAddress: Address;
  conversation: CachedConversation;
};

const UserMessages = ({ peerAddress }: Props) => {
  const { client } = useClient();
  const [message, setMessage] = useState<string>()
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const { sendMessage } = useSendMessage();
  // const conversation = await client.conversations.list()
  // const messagesInConversation = await conversation.messages()
  // const {messages} = useMessages(conversation)
  //   const { conversations } = useConversations();
  // const { startConversation } = useSendMessage();
  // console.log(conversations, "conversations");



  useEffect(() => {
    const getUserChats = async () => {
      if (!client) return;
      const cons = await client?.conversations.newConversation(peerAddress);
      const messagesInConversation = await cons?.messages();
      setMessages(messagesInConversation);
    };
    getUserChats();
  }, [peerAddress, setMessages]);

  const submitMessage = async () => {
   // await sendMessage(conversations[0], message); 
  }

  console.log(messages, "messages");

  return (
    <div className=" w-[calc(100%-400px)] h-[calc(100vh-30px)]  flex flex-col px-4 justify-center items-center">
      <div className=" w-full h-16 border-b-2  flex flex-row justify-between items-center ">
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
              {walletAddressShortn(peerAddress)}
            </h2>
            <p className="text-xs">@username</p>
          </div>
        </div>
      </div>

      <ScrollArea className="  w-full h-[calc(100%-90px)]  flex flex-col">
        {messages.map((message) => {
          return (
              <div key={message.id} className={` flex w-full my-3 ${message.senderAddress === peerAddress? "justify-start ":"justify-end"} `}>
                <ChatCard message={message}/>
              </div>
            
          );
        })}
      </ScrollArea>

      <div className=" h-24 w-full flex-row flex justify-center items-center my-3">
        <Input type="text" className=" w-10/12 mx-3" onChange={(e)=>setMessage(e.target.value)}  placeholder="Type a message" />
         <Button>Send</Button>
      </div>
    </div>
  );
};

export default UserMessages;
// import { useCallback, useState } from "react";
// import { useMessages } from "@xmtp/react-sdk";
// import type { CachedConversation, DecodedMessage } from "@xmtp/react-sdk";

// export const UserMessages: React.FC<{
//   conversation: CachedConversation;
// }> = ({ conversation }) => {
//   // error callback
// //   const onError = useCallback((err: Error) => {
// //     // handle error
// //     console.log(err, "err");

// //   }, []);

//   const [Messageabc, setMessageabc] = useState<DecodedMessage[]>([])
//   // messages callback
// //   const onMessages = useCallback((msgs: DecodedMessage[]) => {
// //     // do something with messages
// //     console.log(msgs, "msgs");

// //     setMessageabc(msgs)
// //   }, []);

//   if (Messageabc.length < 1) {
//     const { error, messages, isLoading } =  useMessages(conversation, {
//         onError: (error) => {
//             console.log("error", error);
//         },
//         onMessages: (message) => {
//             console.log("message", message);
//             setMessageabc(message);
//         },
//       });
//   }

//     return (
//         <div>

//         </div>
//     );

// }
