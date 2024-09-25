import { TInvestorDetails } from "@/types/common";
import React from "react";
import ProfileBanner from "./bannner";
import UserLiquidity from "./liquidity";
import UserInvestments from "./investment";
import UserRewards from "./winnedrewards";
import Image from "next/image";

type Props = {
  userInfo: TInvestorDetails;
};

const Profile = ({ userInfo }: Props) => {
  const self = false;
  return (
    <main className=" w-full min-h-screen  flex flex-row flex-wrap  justify-evenly ">
      <ProfileBanner
        walletAddress={userInfo.walletAddress}
        bannerImage={"/content/tempo.png"}
        name={userInfo?.name}
        profileImage={userInfo?.image}
        discord={userInfo?.discord}
        twitter={userInfo?.twitter}
        bio={userInfo.bio}
        opensea={userInfo.opensea}
        self={self}
      />
     <UserLiquidity liquidity={userInfo.liquiditys} self={false} />
      {/* <Partners investments={userInfo.}  /> */}
      {userInfo.investments[0] && (
        <UserInvestments investment={userInfo.investments[0]} />
      )}
      {
        userInfo.campaigns.length > 1 && (
          <UserRewards winned={userInfo.campaigns} />
        )
      }
    </main>
  );
};

export default Profile;
