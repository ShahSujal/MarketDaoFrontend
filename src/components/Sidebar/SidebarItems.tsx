// import {
//   DashboardIcon,
//   DirectOTCMarket as DirectOTCMarketIcon,
//   ProfileIcon,
//   RuneDexIcon,
//   Sdk,
// } from "@/components/icons";
// import { CrossChainOTCMarket as CrossChainOTCMarketIcon } from "@/components/icons";
// import { PointsMarket as PointsMarketIcon } from "@/components/icons";
// import { PreMarket as PreMarketIcon } from "@/components/icons";
// import { NFTMarket as NFTMarketIcon } from "@/components/icons";
// import { Staking as StakingIcon } from "@/components/icons";
// import { DexSwap as DexSwapIcon } from "@/components/icons";
// import { DirectOTCTrades as DirectOTCTradesIcon } from "@/components/icons";
// import { CrossChainOTCTrades as CrossChainOTCTradesIcon } from "@/components/icons";
// import { NFTTrades as NFTTradesIcon } from "@/components/icons";

import { Rabbit } from "lucide-react";

export const marketPlace = [
  {
    redirectUrl: "/market/direct",
    title: "Dapps Market",
    shortTitle: "Direct",
    icon: <Rabbit />,
    comingSoon: false,
  },
  {
    redirectUrl: "/market/cross",
    title: "Explore Investors",
    shortTitle: "Investors",
    icon: <Rabbit />,
    comingSoon: false,
  },


];

export const trades = [
  {
    redirectUrl: "/market/points",
    title: "deTalks",
    shortTitle: "deTalks",
    icon: <Rabbit />,
    comingSoon: false,
  },
  {
    redirectUrl: "/trades/cross",
    title: "Pitch Idea",
    shortTitle: "Cross",
    icon: <Rabbit />,
    comingSoon: false,
  },
];

export const onDemand = [
  {
    redirectUrl: "#",
    title: "Dashboard",
    shortTitle: "Dash Board",
    icon: <Rabbit />,
    comingSoon: false,
  },
];
