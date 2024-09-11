"use client";
import React, { useCallback } from 'react'
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

const Detalks = () => {
const { client, initialize } = useClient();
const { conversations } = useConversations();
const { startConversation } = useStartConversation();
const { canMessage } = useCanMessage();
const {chainId, address} = useAccount();

const handleConnect = useCallback(async () => {
  const { data: walletClient } = useWalletClient();
  if (!walletClient) {
    return; 
  }
  await initialize({
    signer: walletClient as unknown as Signer, // Type casting to ensure compatibility
    options: {
      env: "dev",
      persistConversations: true,
    },
  });
}, [initialize]);

  return (
    <div>
      
    </div>
  )
}

export default Detalks
