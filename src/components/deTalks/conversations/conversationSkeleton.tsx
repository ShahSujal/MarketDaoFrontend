import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

type Props = {}

const ConversationSkeleton = (props: Props) => {
  return (
    <ScrollArea className=" flex flex-col w-[400px] py-6 bg-gradient-to-tr from-[#3434342d] to-[#bcb9b926] h-[94vh] ">
    {[0,1,2,3,4,5,6].map((conversation) => {
      return (
        <Skeleton
          className="flex flex-row w-full my-3 h-16 rounded-lg px-2  hover:bg-[#ffffff5e] justify-between items-center cursor-pointer"
          key={conversation}
        >
        </Skeleton>
      );
    })}
  </ScrollArea>
  )
}

export default ConversationSkeleton