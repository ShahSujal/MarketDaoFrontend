import { getInvestmentById } from "@/actions/investor";
import Investor from "@/components/investor";
import InvestorSkeleton from "@/components/investor/investor-skeleton";
import React from "react";

type Props = {
  params:{
    dappId:string;
  }
};
const page = async(Prop:Props) => {
    const investor = await getInvestmentById(Prop.params.dappId);
    
  return (
    <main className=" w-full min-h-screen">
      {investor?.id ? (
        <Investor investment={investor} />
      ):(
       <InvestorSkeleton/>
      )

      }
    </main>
  );
};

export default page;
