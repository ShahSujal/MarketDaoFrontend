"use client";
import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type Props = {};

type CardData = {
  title: string;
  description: string;
  direction: number;
};

type PopupCardProps = {
  title: string;
  description: string;
  direction: number;
  control: any;
  refElement: React.RefObject<HTMLDivElement>;
  delay: number;
};

const cardData: CardData[] = [
  { title: "Hello stacking", description: "hi stacking partners we are here to emborse you", direction: -300 },
  { title: "Hello stacking", description: "hi stacking partners we are here to emborse you", direction: 300 },
  { title: "Hello stacking", description: "hi stacking partners we are here to emborse you", direction: -300 },
  { title: "Hello stacking", description: "hi stacking partners we are here to emborse you", direction: 300 },
];


const Popupcards: React.FC<Props> = (props) => {
  const control = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const inViews = useInView(ref, {once: true});


  return (
    <div className='w-full h-[160vh] flex justify-evenly items-center flex-col z-10'>
      {cardData.map((card, index) => (
        <motion.div
        variants={{
          hidden: { opacity: 0.30, x: 0.5 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={control}
        key={index}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ zIndex: 10 }}
        className={`w-[350px] h-[150px] flex justify-center items-center flex-col  rounded-lg text-center p-3 backdrop-blur-md border-2 border-[#2c2c2c]`}
        ref={ref}
      >
        <h1 className='text-[#d3d1d1] font-paps font-medium'>hello</h1>
        <h3 className='text-gray-500 font-paps font-extralight'> hello staking </h3>
      </motion.div>
      ))}
    </div>
  );
};

export default Popupcards;