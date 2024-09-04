"use client"
import React from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Search,Menu, Package2, CircleUser } from 'lucide-react'
import Link from 'next/link'
type Props = {}

const Navbar = (props: Props) => {
  const { open, close } = useWeb3Modal()
  return (
    <nav className=" flex justify-end items-center w-full space-x-5 h-[70px] px-6">  
       <Button variant={"secondary"}>
        Ethereum
       </Button>
       <Button variant={"secondary"}>
        Connect wallet
       </Button>
      </nav>
  )
}

export default Navbar

