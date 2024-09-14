"use client";
import { Investment } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {
  investment: Investment;
}

const UserInvestments = ({investment}: Props) => {
  return (
    <div className=" w-full min-h-[50vh]  flex justify-center flex-row items-center ">
        <div className=" w-1/4 h-full text-gray-200 flex justify-center flex-col items-center">
          <h1 className=" text-[50px] text-gray-300 font-fragment font-medium   ">
            Owned Dapp
          </h1>
          <h4 className=" text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            cumque iusto ea.
          </h4>
        </div>
        <div className=" w-2/3 h-full border border-[#717070] rounded-3xl flex justify-evenly items-center ">
          <Image
            src={investment.image ? process.env.NEXT_PUBLIC_IMAGE_URL! + investment.image :"/content/illustration.png"}
            width={1000}
            height={1000}
            alt=""
            className=" w-1/2 h-[300px]  object-cover rounded-2xl"
          />
          <div className=" w-2/5 h-full flex justify-evenly items-center relative ">
            <div className=" w-full h-full flex justify-center items-center flex-col">
              <h1 className=" text-3xl font-paps my-4 font-bold text-gray-300 mt-4">
                {investment.title}
              </h1>
              <h1 className=" text-sm font-paps font-medium text-gray-400 p-2 ">
              {investment.description.slice(0, 100)}
              </h1>
              <div className=" flex flex-row group h-44  justify-center items-center w-full relative ">
                <Link href={`/dapp/${investment.id}`}>
                <button className="w-44 h-9 relative rounded-full text-gray-200 bg-gradient-to-tr from-[#d3c9e348] to-[#35353531] backdrop-blur-lg font-fragment font-medium  flex justify-center items-center z-20">
                  pitch now
                </button>
                </Link>
                <div className=" w-full h-36 absolute grayscale hover:grayscale-0 transition  overflow-hidden">
                  <Image
                    src={"/content/circuits-mobile.webp"}
                    width={1000}
                    height={1000}
                    alt=""
                    className=" w-full h-[120px] object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default UserInvestments