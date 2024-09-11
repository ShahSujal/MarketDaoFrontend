"use client";
import Detalks from '@/components/deTalks';
import React, { useCallback } from 'react'
import { useAccount } from 'wagmi';


const page = () => {
  const {address} = useAccount();
  return (
    <div>
      {
        address ? Detalks() : <div>Connect your wallet to continue</div>
      }
    </div>
  )
}

export default page
