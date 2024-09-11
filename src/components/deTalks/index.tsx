"use client";
import React, { useCallback, useEffect, useState } from "react";
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
} from "@xmtp/react-sdk";
import { Button } from "../ui/button";
import { loadKeys, storeKeys } from "@/lib/xmtpKeys";
const Detalks = () => {
  const { client, initialize } = useClient();
  const { data: walletClient } = useWalletClient();
  const [peerAddress, setPeerAddress] = useState("");
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { conversations } = useConversations();
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

  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
      <Button onClick={() => handleConnect()}>Connect</Button>
      <Button onClick={() => checkUserCanMessage()}>Message</Button>
    </div>
  );
};
export default Detalks;
