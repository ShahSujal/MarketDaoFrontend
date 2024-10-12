import { ScrollArea } from "@/components/ui/scroll-area";
import { walletAddressShortn } from "@/lib/actions";
import { TPeerType } from "@/types/common";
import { CachedConversation, ContentTypeMetadata, useCanMessage, useConversations, useStartConversation } from "@xmtp/react-sdk";
import Image from "next/image";
import React from "react";
import { Address } from "viem";
import {motion} from 'framer-motion'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { MessageCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input";
import useAllUsers from "@/hooks/user/getAllUsers";
import { useAccount } from "wagmi";

type Props = {
  checkPeerDetails: React.Dispatch<React.SetStateAction<TPeerType>>;
};
interface User {
  id: string
  name: string
  walletAddress: string
}


export default function UserConversations({checkPeerDetails}: Props) {
const {users,error} =  useAllUsers()
const {address}= useAccount()
  const { conversations } = useConversations();
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const filteredUsers = conversations.filter(user =>
    user.peerAddress.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const { startConversation } = useStartConversation();
  const { canMessage } = useCanMessage();
      const handleStartConversation = async ({peerAddress}:{peerAddress:Address}) => {
        if (peerAddress) {
          await canMessage(peerAddress)
          const conversation = await startConversation(peerAddress, "Hey there!");
        }
      }
  return (
    <div className="w-[400px]  bg-black  h-[94vh] flex flex-col text-gray-100">
      <Card className="w-full flex flex-col border-none bg-black">
        <CardHeader className="">
          <CardTitle className="text-2xl font-bold font-paps text-gray-100">{conversations.length < 1 ?"Select a User to Chat":"Detalks"}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col ">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search users..."
                className="pl-8 bg-gray-700 text-gray-100  focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {conversations.length < 1 ? (
            <ScrollArea className="flex-grow w-full">
              <div className="space-y-2 w-full">
                {users.map((user) => (
                  <motion.div
                    key={user.walletAddress}
                    style={user.walletAddress === address ? {display: 'none'} : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="flex items-center justify-between py-3 w-full rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                      onClick={() => handleStartConversation({peerAddress: user.walletAddress as Address})}
                  >
                    
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{user.walletAddress.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-100">{walletAddressShortn(user.walletAddress as Address)}</p>
                         
                        </div>
                      </div>
                  
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <ScrollArea className="flex-grow w-full">
            <div className="space-y-2 w-full">
              {conversations.map((user) => (
                <motion.div
                  key={user.walletAddress}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-between py-3 w-full rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                    onClick={() => checkPeerDetails({
                      conversation: user,
                      peerAddress: user.peerAddress as Address,
                    })}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{user.peerAddress.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-100">{walletAddressShortn(user.peerAddress as Address)}</p>
                       
                      </div>
                    </div>
                
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  )
}