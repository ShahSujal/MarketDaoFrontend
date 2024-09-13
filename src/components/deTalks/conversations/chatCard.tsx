import React from 'react'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import type {DecodedMessage} from "@xmtp/react-sdk";
import { walletAddressShortn } from '@/lib/actions';
import { Address } from 'viem';
type Props = {
    message: DecodedMessage,
}

const ChatCard = ({message}: Props) => {
  return (
    <Card
    //   onClick={onChat}
      className="border-r-0 hover:bg-muted cursor-pointer transition duration-150 ease-in-out  w-[350px] h-[80px] rounded-2xl bg-gradient-to-tr from-[#3130305b] to-[#48474839]"
    >
      <CardContent className="py-4 flex gap-3">
        <div>
          <Avatar>
            <AvatarFallback className="bg-muted">
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-between w-full">
          <div>
          <CardDescription className="text-xs">
              {walletAddressShortn(message.senderAddress as Address)}
            </CardDescription>
            <div className="flex gap-5 items-center">
              <CardDescription className="font-bold leading-none text-gray-600">
                {message.content}
              </CardDescription>
            </div>
       
          </div>
          <div className="w-[100px] flex justify-end">
            <CardDescription className="text-xs">
            {message.conversation.createdAt?.toDateString()}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ChatCard
