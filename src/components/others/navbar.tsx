"use client"
import React, { useEffect } from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Search,Menu, Package2, CircleUser } from 'lucide-react'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { walletAddressShortn } from '@/lib/actions'
import { createUser } from '@/actions/user'
type Props = {}

const Navbar = (props: Props) => {
  const { open, close } = useWeb3Modal()
  const {address , chain} = useAccount()
  useEffect(() => {
  if (address) {
   const create = async ()=>{
    const user = await createUser(address)
    console.log(user);
   }
    create()
  }
  }, [address])
  
  
  return (
    <nav className=" flex justify-end items-center w-full space-x-5 h-[70px] px-6">  
       {
        chain?.name && (
          <Button 
          onClick={() => open({ view: "Networks" })}
          >
        {chain?.name}
       </Button>
        )
       }
       <Button
          onClick={() => open()}
       >
        {address ? walletAddressShortn(address) :"Connect wallet" }
       </Button>
      </nav>
  )
}

export default Navbar

