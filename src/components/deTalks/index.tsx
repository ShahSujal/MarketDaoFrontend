"use client";
import React, {
  useEffect,
  useState,
} from "react";
import { useAccount, useWalletClient } from "wagmi";
import {
  Client,
  useClient,
  useConversations,
} from "@xmtp/react-sdk";
import type {
  CachedConversation,
  Signer
} from "@xmtp/react-sdk";
import { loadKeys, storeKeys } from "@/lib/xmtpKeys";
import { Address } from "viem";
import UserConversations from "./conversations";
import UserMessages from "./conversations/messages";
import { TPeerType } from "@/types/common";
import ConversationSkeleton from "./conversations/conversationSkeleton";



const Detalks = () => {
  const { client, initialize } = useClient();
  const { data: walletClient } = useWalletClient();
  const [activePeer, setActivePeer] = useState<TPeerType>({
    peerAddress: undefined,
    conversation: undefined,
  })
  const { chainId, address } = useAccount()
  const handleConnect = async () => {
    if (!address || !walletClient) {
      return;
    }
    const signer = walletClient as unknown as Signer;
    if (!signer) {
      return;
    }
    let keys = loadKeys(address);
    if (!keys) {
      keys = await Client.getKeys(signer, {
        env: "dev",
        persistConversations: false,
        skipContactPublishing: true,
      });
      storeKeys(address, keys);
    }

    await initialize({
      signer: walletClient as unknown as Signer,
      options: {
        env: "dev",
        persistConversations: false,
      },
      keys,
    });
  };
  useEffect(() => {
   if (!client && walletClient && address) {
    handleConnect();
   }
  }, [client, walletClient, address]);
  //   const checkUserCanMessage = async () => {
  //     // Start a conversation with XMTP
  //     if (!address) {
  //       return;
  //     }
  //     const add = address;
  //     console.log("checkmessage");
  //     // console.log(canMessage(add)); // false
  //     console.log("checkmessage");
  //     const msg = await canMessage(add);
  //     console.log("msg", msg);
  //     // if (await canMessage(add)) {
  //     //   const conversation = await startConversation(add, "hi");
  //     //   console.log("conversation", conversation);
  //     // }
  //   };
  //   // const { messages } = useMessages(conversation);

  //   const handleAddressChange = useCallback(
  //     (e: ChangeEvent<HTMLInputElement>) => {
  //       console.log("address", e.target.value);

  //       setPeerAddress(e.target.value);
  //     },
  //     [],
  //   );
  //    const handleMessageChange = useCallback(
  //     (e: ChangeEvent<HTMLInputElement>) => {
  //       setMessage(e.target.value);
  //     },
  //     [],
  //   );

  //   const handleStartConversation = useCallback(
  //     async () => {
  //       if (peerAddress && message) {
  //         setIsLoading(true);
  //         const conversation = await startConversation(peerAddress, message);
  //         setIsLoading(false);
  //       }
  //     },
  //     [message, peerAddress, startConversation],
  //   );

  //   const handleSendMessage = async () => {
  //     if (peerAddress && message) {
  //       setIsLoading(true);
  //       const add = await peerAddress as Address
  //       await sendMessage(conversations[0], message);
  //       setIsLoading(false);
  //   }

  //   }
  //   const handleCheckAddress = useCallback(async () => {
  //     // e.preventDefault();
  //     console.log("checkAddress", peerAddress);

  //     if (isValidAddress(peerAddress)) {
  //       console.log("valid address", peerAddress);

  //       setIsLoading(true);
  //       setIsOnNetwork(await canMessage(peerAddress));
  //       console.log("isOnNetwork", isOnNetwork);

  //       setIsLoading(false);
  //     } else {
  //       console.log("invalid address" , peerAddress);

  //       setIsOnNetwork(false);
  //     }
  //   }, [peerAddress, canMessage, isOnNetwork]);
  // //   void checkAddress();
  //   // track streamed conversations
  

  //   // callback to handle incoming conversations
  //   const onConversation = useCallback(
  //     (conversation: Conversation) => {
  //       setStreamedConversations((prev) => [...prev, conversation]);
  //     },
  //     [],
  //   );
  //   // const { error } = useStreamConversations(onConversation);

  // const conversation = await client.conversations.list()
  // console.log(conversation, "conversation");

  
  // for (const conversation of await client?.conversations.list()) {
  //   // All parameters are optional and can be omitted
  //   const messagesInConversation = await conversation.messages(
  //     {
  //     checkAddresses: true,  
  //     }
  //   );
  //   console.log(messagesInConversation, "messagesInConversation");
  // }


  // const { error, messages, isLoading } = useMessages(conversations[0],{
  //       onError: (error) => {
  //           console.log("error", error);
  //       },
  //       onMessages: (message) => {
  //           console.log("message", message);
  //           // setStreamedMessages((prev) => [...prev, message]);
  //       },
  //   });
  return (
    <div className=" w-full min-h-[80vh] flex flex-row ">
  {  
    client ? <UserConversations checkPeerDetails={setActivePeer}/> : <ConversationSkeleton/>
  }
  {  
    client && activePeer.conversation && activePeer.peerAddress ? <UserMessages conversation={activePeer.conversation} peerAddress={activePeer.peerAddress}/> : <div className=" w-[calc(100%-450px)] h-[93vh] flex justify-center items-center"> <h1 className="text-2xl text-gray-700">Tap to select user to start conversation</h1></div>
  }
    </div>
  )
}
export default Detalks;
