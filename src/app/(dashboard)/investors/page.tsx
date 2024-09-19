import { getInvestors } from '@/actions/investor'
import InvestorscardSkeleton from '@/components/common/investorscard-skeleton'
import InvestorUserCard from '@/components/common/investorUserCard'
import React from 'react'

const page = async() => {
  const investors = await getInvestors()
  return (
    <div className=' w-full min-h-screen flex flex-row justify-center flex-wrap'>
      {
        investors? 
        investors.map((item)=>{
          return <InvestorUserCard investor={item} key={item.walletAddress} />
        })
        :<InvestorscardSkeleton/>
      }
    </div>
  )
}

export default page
