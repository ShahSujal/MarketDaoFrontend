import { getUserAllDetails } from '@/actions/user';
import Dashboard from '@/components/dashboard';
import InvestorSkeleton from '@/components/investor/investor-skeleton';
import Profile from '@/components/profile';
import React from 'react'

type Props = {
    params:{
    investorId: string;
    }
 }

const Page = async(props: Props) => {
   const userInfo = await getUserAllDetails(props.params.investorId);
  return (
    <div>
        {userInfo?.walletAddress ? (
            <Profile userInfo={userInfo}/>
        ):(
            <InvestorSkeleton/>
        )
        }
    </div>
  )
}

export default Page