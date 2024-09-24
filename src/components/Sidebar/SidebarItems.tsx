import { Command, Crown, Hash, MessagesSquare, Newspaper, Zap } from "lucide-react";

export const marketPlace = [
  {
    redirectUrl: "/dapp",
    title: "Dapps Market",
    shortTitle: "Dapps",
    icon: <Command />,
    comingSoon: false,
  },
  {
    redirectUrl: "/investors",
    title: "Explore Investors",
    shortTitle: "Investors",
    icon: <Crown />,
    comingSoon: false,
  },
];

export const trades = [
  {
    redirectUrl: "/deTalks",
    title: "deTalks",
    shortTitle: "deTalks",
    icon: <MessagesSquare />,
    comingSoon: true,
  },
  {
    redirectUrl: "/campaign",
    title: "Campaign",
    shortTitle: "Campaign",
    icon: <Zap />,
    comingSoon: false,
  },
];

export const onDemand = [
  {
    redirectUrl: "/dashboard",
    title: "Dashboard",
    shortTitle: "DashBoard",
    icon: <Hash />,
    comingSoon: false,
  },
  {
    redirectUrl: "/blogs",
    title: "Blogs",
    shortTitle: "Blogs",
    icon: <Newspaper />,
    comingSoon: false,
  },
];
