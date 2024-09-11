import React from 'react'
import {
  Client,
  useStreamMessages,
  useClient,
  useMessages,
  useConversations,
  useCanMessage,
  useStartConversation,
} from "@xmtp/react-sdk";

const page = () => {
const { client, initialize } = useClient();
const { conversations } = useConversations();
const { startConversation } = useStartConversation();
const { canMessage } = useCanMessage();
  return (
    <div>
      
    </div>
  )
}

export default page
