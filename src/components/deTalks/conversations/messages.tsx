import { ScrollArea } from "@/components/ui/scroll-area";
import { walletAddressShortn } from "@/lib/actions";
import {
  useClient,
  useSendMessage,
} from "@xmtp/react-sdk";
import type {
  CachedConversation,
  DecodedMessage,
} from "@xmtp/react-sdk";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Address } from "viem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Send, Smile } from "lucide-react";
import { useAccount } from "wagmi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

type Props = {
  peerAddress: Address;
  conversation: CachedConversation;
};

const UserMessages = ({ peerAddress, conversation }: Props) => {
  const { client } = useClient();
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const { sendMessage } = useSendMessage();
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { address } = useAccount();
  const getUserChats = useCallback(async () => {
    if (!client) return;
    const cons = await client?.conversations.newConversation(peerAddress);
    const messagesInConversation = await cons?.messages();
    setMessages(messagesInConversation);
  }, [client, peerAddress, setMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getUserChats();
  }, [peerAddress, setMessages, client, getUserChats]);
  const handleEmojiSelect = (emoji: any) => {
    setInputMessage(inputMessage + emoji.native);
  };
  const handleSendMessage = async () => {
    await sendMessage(conversation, inputMessage);
    getUserChats();
    setInputMessage("");
  };
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (

      <div className="container  w-[calc(100%-400px)] h-[94vh] mx-auto p-4  flex flex-col bg-black text-gray-100">
        <Card className="w-full   flex-grow flex flex-col bg-black ">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/content/tempo.png" alt="User" />
                <AvatarFallback>{walletAddressShortn(peerAddress)}</AvatarFallback>
              </Avatar>
              <span>{walletAddressShortn(peerAddress)}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col p-4">
            <ScrollArea className="flex-grow pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.recipientAddress === address ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.recipientAddress === address
                        ? "bg-blue-600"
                        : "bg-gray-700"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatTimestamp(message.conversation.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
            <div className="mt-4 flex items-end gap-2">
              <Popover
                open={isEmojiPickerOpen}
                onOpenChange={setIsEmojiPickerOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black text-gray-100 hover:bg-gray-600"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-black border-gray-700">
                  <Picker
                    data={data}
                    onEmojiSelect={handleEmojiSelect}
                    theme="dark"
                    set="apple"
                  />
                </PopoverContent>
              </Popover>
              <Input
                type="text"
                placeholder="Type a message..."
                className="flex-grow bg-black text-gray-100 border-gray-600 focus:border-blue-500"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-white hover:bg-gray-200"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default UserMessages;
