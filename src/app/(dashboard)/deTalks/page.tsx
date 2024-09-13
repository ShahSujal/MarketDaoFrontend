"use client";
import Detalks from '@/components/deTalks';
import React from 'react'
import { useAccount } from 'wagmi';


const Page = () => {
  const {address} = useAccount();
  return (
    <div>
  {
        address ? <Detalks/> : <div>Connect your wallet to continue</div>
  } 
    </div>
  )
}

export default Page
