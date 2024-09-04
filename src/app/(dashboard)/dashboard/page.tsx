import InvestorCard from '@/components/common/investorcard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className=' w-full min-h-screen  flex flex-row flex-wrap  justify-evenly '>
    {
        [0,1,2,3,4,5].map((item, index) => {
            return <InvestorCard key={item}/>
        })
    }
    </main>
  )
}

export default page