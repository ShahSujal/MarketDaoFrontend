import { getInvestments } from '@/actions/investor'
import InvestorCard from '@/components/common/investorcard'
import { Investment } from '@prisma/client'
import React from 'react'
const page = async() => {
  const investments = await getInvestments()
  return (
    <main className=' w-full min-h-screen relative  flex flex-row flex-wrap  '>
    <div className=' absolute top-1/3 right-8  w-64 h-44 bg-gradient-to-tr blur-[120px] from-[#e0e6ec] to-[#eef6fc]'></div>
    <div className=' absolute top-1/2 left-8  w-64 h-44 bg-gradient-to-tr blur-[120px] from-[#e0e6ec] to-[#eef6fc]'></div>
    {
        investments.map((item:Investment) => {
            return <InvestorCard key={item.id} investment={item}/>
        })
    }
    </main>
  )
}

export default page