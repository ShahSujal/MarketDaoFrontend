import { BlogType } from "@/types/enum";

export const chainsWithLogo = [
    {
      chainId: 97,
      chainName: "BSC Testnet",
      localImage: "/chain/bnb-chain.png",
    },
    {
      chainId: 1,
      chainName: "Ethereum",
      localImage: "/chain/ethereum.png",
    },
    {
      chainId: 11155111,
      chainName: "Sepolia ETH",
      localImage: "/chain/ethereum.png",
    },
    {
      chainId: 5,
      chainName: "Goerli",
      localImage: "/chain/ethereum.png",
    },
    {
      chainId: 80001,
      chainName: "Mumbai Matic",
      localImage: "/chain/polygon.png",
    },
    {
      chainId: 80002,
      chainName: "Amoy Matic",
      localImage: "/chain/polygon.png",
    },
    {
      chainId: 137,
      chainName: "Polygon",
      localImage: "/chain/polygon.png",
    },
    {
      chainId: 7001,
      chainName: "Zeta Testnet",
      localImage: "/chain/zeta.png",
    },
    {
      chainId: 18332,
      chainName: "Bitcoin",
      localImage: "/chain/bitcoin.png",
    },
  ];

  export const blogs = [
    {
      type: BlogType.Pitcher,
      uuid: "who-is-pitcher",
    },
    {
      type: BlogType.Detalks,
      uuid: "key-features-of-detalks",
    },
    {
      type: BlogType.Campaigns,
      uuid: "how-campaign-works",
    },
    {
      type: BlogType.Dapp,
      uuid: "exploring-dapp",
    },
    {
      type: BlogType.Dashboard,
      uuid: "example-flow",
    },
  ]