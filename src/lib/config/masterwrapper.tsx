import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Toaster } from "@/components/ui/toaster"
import { cookieToInitialState } from 'wagmi'

import { config } from '@/lib/config/wagmiConfig'
import AppKitProvider from '@/lib/config/wagmiContext'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
 <AppKitProvider initialState={initialState}>
    {children}
    <Toaster />
  </AppKitProvider>     
  )
}