import { AppleIcon, CoffeeIcon, MessagesSquare, Rabbit, Sparkles } from "lucide-react";

export const marketPlace = [
  {
    redirectUrl: "/dapp",
    title: "Dapps Market",
    shortTitle: "Dapps",
    icon: <AppleIcon />,
    comingSoon: false,
  },
  {
    redirectUrl: "/market/cross",
    title: "Explore Investors",
    shortTitle: "Investors",
    icon: <CoffeeIcon />,
    comingSoon: false,
  },
];

export const trades = [
  {
    redirectUrl: "/market/points",
    title: "deTalks",
    shortTitle: "deTalks",
    icon: <MessagesSquare />,
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
    icon: <Sparkles />,
    comingSoon: false,
  },
];
