"use client"
import Spline from '@splinetool/react-spline'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Treades = (props: Props) => {
  return (
    <div className='relative w-full min-h-[100vh] flex flex-col'>
   
      <div className='h-screen w-full flex justify-start flex-col items-center'>
      <div className=' w-44 h-8 rounded-2xl z-10 text-sm border text-[#d3cccc] flex justify-center items-center border-[#ffffff88] '>
             Join the community
            </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 4 }}
          className='z-10 relative'
        >
          
          <h1 className='text-[55px] max-sm:w-full max-sm:text-[40px] text-center font-semibold text-white' style={{ textShadow: "5px 5px 15px #fff" }}>
            Trades from more than 150 Countries<br/>
            countries around the world 
            have registered!
          </h1>
        </motion.div>
      </div>
    
    </div>
  )
}

export default Treades