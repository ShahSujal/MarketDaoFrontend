"use client";
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useWalletClient } from "wagmi";
import {
  Client,
  useStreamMessages,
  useClient,
  useMessages,
  useConversations,
  useCanMessage,
  useStartConversation,
  Signer,
  isValidAddress,
  useSendMessage,
  Conversation,
  useStreamConversations
} from "@xmtp/react-sdk";
import { Button } from "../ui/button";
import { loadKeys, storeKeys } from "@/lib/xmtpKeys";
import { Address, isAddress } from "viem";
const Detalks = () => {
  const { client, initialize } = useClient();
  const { data: walletClient } = useWalletClient();
  const [peerAddress, setPeerAddress] = useState("");
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { conversations } = useConversations();
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();
  console.log(conversations, "conversations");

  const { startConversation } = useStartConversation();
  const { canMessage } = useCanMessage();
  
  // const { data: walletClient, isLoading, error:walletClientError } = useWalletClient();
  const { chainId, address } = useAccount();

  console.log(walletClient, "walletClient");
  console.log(client, "client");

  const handleConnect = async () => {
    console.log("walletClient", walletClient);
    console.log("intialization started");
    if (!address) {
      return;
    }
    if (!walletClient) {
      console.log("walletClient not found", walletClient);

      return;
    }
    const signer = walletClient as unknown as Signer;
    let keys = loadKeys(address);
    console.log("load keys", keys);
    
    if (!keys) {
      console.log("keys not found", keys);
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
    console.log("intialization done");
  };

  const checkUserCanMessage = async () => {
    // Start a conversation with XMTP
    if (!address) {
      return;
    }
    const add = address;
    console.log("checkmessage");
    // console.log(canMessage(add)); // false
    console.log("checkmessage");
    const msg = await canMessage(add);
    console.log("msg", msg);
    // if (await canMessage(add)) {
    //   const conversation = await startConversation(add, "hi");
    //   console.log("conversation", conversation);
    // }
  };
  // const { messages } = useMessages(conversation);



  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log("address", e.target.value);
      
      setPeerAddress(e.target.value);
    },
    [],
  ); 
   const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    [],
  );
 
  const handleStartConversation = useCallback(
    async () => {
      if (peerAddress && message) {
        setIsLoading(true);
        const conversation = await startConversation(peerAddress, message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, startConversation],
  );

  const handleSendMessage = async () => {
    if (peerAddress && message) {
      setIsLoading(true);
      const add = await peerAddress as Address
      await sendMessage(conversations[0], message);
      setIsLoading(false);
  }

  }
  const handleCheckAddress = useCallback(async () => {
    // e.preventDefault();
    console.log("checkAddress", peerAddress);
    
    if (isValidAddress(peerAddress)) {
      console.log("valid address", peerAddress);
      
      setIsLoading(true);
      setIsOnNetwork(await canMessage(peerAddress));
      console.log("isOnNetwork", isOnNetwork);
      
      setIsLoading(false);
    } else {
      console.log("invalid address" , peerAddress);
      
      setIsOnNetwork(false);
    }
  }, [peerAddress, canMessage, isOnNetwork]);
//   void checkAddress();
  // track streamed conversations
  const [streamedConversations, setStreamedConversations] = useState<
    Conversation[]
  >([]);
 
  // callback to handle incoming conversations
  const onConversation = useCallback(
    (conversation: Conversation) => {
      setStreamedConversations((prev) => [...prev, conversation]);
    },
    [],
  );
  // const { error } = useStreamConversations(onConversation);


  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center">
      <Button onClick={() => handleConnect()}>Connect</Button>
      <Button onClick={() => checkUserCanMessage()}>Message</Button>
      <Button onClick={() => handleCheckAddress()}>check address</Button>
      <Button onClick={() => handleSendMessage()}>sendMessage</Button>
      

      <form onSubmit={handleStartConversation} className=" flex flex-col h-[450px] w-full justify-evenly items-center">
      <input
        name="addressInput"
        type="text"
        onChange={handleAddressChange}
        disabled={isLoading}
        placeholder="Enter address"
      />
      <input
        name="messageInput"
        type="text"
        className="mx-5"
        placeholder="Enter message"
        onChange={handleMessageChange}
        disabled={isLoading || !isValidAddress(peerAddress)}
      />
    </form>
    </div>
  );
};
export default Detalks;
