"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

type Props = {}

const Partners = (props: Props) => {
  return (
<div className=" flex justify-center items-center flex-row w-full h-[50vh]">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-xl font-medium mt-5 font-fragment text-gray-200 mx-8  ">
            Investement Partners
          </h1>
          <div className=" w-full h-[250px]  flex justify-center items-center ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-11/12 relative   "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 h-40"
                  >
                    <div className="p-1">{/* <InvestorCard /> */}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
  )
}

export default Partners