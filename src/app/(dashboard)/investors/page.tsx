import { getInvestors } from '@/actions/investor'
import InformationCard from '@/components/common/informationCard'
import InvestorscardSkeleton from '@/components/common/investorscard-skeleton'
import InvestorUserCard from '@/components/common/investorUserCard'
import { blogs } from '@/constants'
import { BlogType } from '@/types/enum'
import React from 'react'

const page = async() => {
  const investors = await getInvestors()
  const blog = blogs.find((item) => item.type === BlogType.Pitcher)
  return (
    <div className=' w-full min-h-screen flex flex-row justify-center flex-wrap'>
      {
        investors? 
        investors.map((item)=>{
          return <InvestorUserCard investor={item} key={item.walletAddress} />
        })
        :<InvestorscardSkeleton/>
      }
      {
        blog?.type && <InformationCard uuid={blog.uuid}/>
      }
    </div>
  )
}

export default page
