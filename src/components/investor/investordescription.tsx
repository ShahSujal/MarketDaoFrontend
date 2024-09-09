import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { InvestorCarousel } from "@/components/investor/investors-carousel"
import { PitchTable } from '../common/pitchesmap'
import { TInvestorIdProps } from '@/types/common'

type Props = {
  investment: TInvestorIdProps;
}

const InvestorDescription = ({investment}: Props) => {
  return (
<section className=" p-4">
          <h1 className=" text-3xl my-10 text-[#c0bebe]  ">{investment.title}</h1>
          <p className=" text-[#ccc]">{investment.description}</p>
          <div className=" w-full h-44 rounded-xl border-2 my-10 flex flex-row ">
            <div className=" w-1/2 h-full bg-[#2e2e2e28]  flex  flex-col justify-center p-3 items-start">
              <h1 className=" text-3xl text-[#c0bebe] ">Investors</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Button className=" w-44 mt-3"> pitch now</Button>
            </div>
            <div className=" w-1/2 h-full bg-[#2e2e2e28] rounded-r-xl flex justify-center items-center">
             <Image src={"/content/gradientCoin.svg"} alt="" width={350} height={450} className=" h-full object-contain rounded-lg"/>
           
            </div>
          </div>

        </section>
  )
}

export default InvestorDescription