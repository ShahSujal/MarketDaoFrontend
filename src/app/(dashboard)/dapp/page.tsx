import InvestorCard from '@/components/common/investorcard'
import React from 'react'
const page = () => {
  return (
    <main className=' w-full min-h-screen relative  flex flex-row flex-wrap  '>
    <div className=' absolute top-1/3 right-8  w-64 h-44 bg-gradient-to-tr blur-[120px] from-[#e0e6ec] to-[#eef6fc]'></div>
    <div className=' absolute top-1/2 left-8  w-64 h-44 bg-gradient-to-tr blur-[120px] from-[#e0e6ec] to-[#eef6fc]'></div>
    {
        [0,1,2,3,4,5].map((item, index) => {
            return <InvestorCard key={item}/>
        })
    }
    </main>
  )
}

export default page