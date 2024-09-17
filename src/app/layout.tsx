import type { Metadata } from "next";
import "./globals.css";
import MasterWrapper from "@/lib/config/masterwrapper";
import localFont from 'next/font/local'
// import "../public/"
const paps = localFont({
  src: [
    {
      path: "../../public/fonts/papsmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/papslight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/papsbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-paps",
});
const fragment = localFont({
  src: [
    {
      path: "../../public/fonts/fragmentmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/fragmentlight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/fragmentbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-fragment",
});

export const metadata: Metadata = {
  title: "Stakeyards",
  description: "Stakeyards offers a robust ecosystem for investors and users to collaborate on decentralized finance (DeFi) projects. Investors can build dApps where users pitch profitable investment opportunities, with fees for each proposal. Multiple investors can join a single dApp, forming a collaborative investment group.Companies can create marketing campaigns that questers complete through YouTube and Twitter promotions, provided they meet minimum subscriber requirements. Successful questers earn cryptocurrency rewards for completing campaigns. Stakeyards operates with a governance token system, giving stakeholders with more tokens greater influence in decision-making. Additionally, Stakeyards integrates Detalks, a decentralized chat solution that enables seamless and secure communication between users.",
  icons: {
    icon: "/stakyardslogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={`${paps.variable} ${fragment.variable}`}>
        <MasterWrapper>
          {children}
        </MasterWrapper>
       </body>
    </html>
  );
}
