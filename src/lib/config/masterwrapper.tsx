import { headers } from "next/headers";
import { Toaster } from "@/components/ui/toaster";
import { cookieToInitialState } from "wagmi";

import { config } from "@/lib/config/wagmiConfig";
import AppKitProvider from "@/lib/config/wagmiContext";
import Navbar from "@/components/others/navbar";
import { ThemeProvider } from "./nextProvider";
import { XMTPProvider } from "@xmtp/react-sdk";

export default function MasterWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <AppKitProvider initialState={initialState}>
      {/* <Navbar /> */}
      <XMTPProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </XMTPProvider>
      <Toaster />
    </AppKitProvider>
  );
}
