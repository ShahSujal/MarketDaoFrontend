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
  { title: "Effortless Earnings", description: "Unlock passive income streams with innovative investment dApps.", direction: -300 },
  { title: "Collaborate with Investors", description: "Team up with fellow investors to maximize your profits.", direction: 300 },
  { title: "Pitch Your Ideas", description: "Present upcoming investments to investors and earn rewards.", direction: -300 },
  { title: "Earn Through Campaigns", description: "Complete YouTube and Twitter tasks to earn cryptocurrency rewards.", direction: 300 },
];


const Popupcards: React.FC<Props> = (props) => {
  const control = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const inViews = useInView(ref, {once: true});


  return (
    <div className='w-full h-[160vh] flex justify-evenly items-center flex-col z-10'>
      {cardData.map((card, index) => (
        <motion.div
        key={index}
        className={`w-[300px] h-[110px] max-md:mr-0 max-md:ml-0 flex justify-center items-center flex-col  rounded-lg text-center p-3 backdrop-blur-md border-2 border-[#2c2c2c] ${card.direction > 0 ? 'mr-96' : 'ml-96'}`}
        ref={ref}
      >
        <h1 className='text-[#a6dbf3] font-paps font-medium'>{card.title}</h1>
        <h3 className='text-gray-500 font-paps font-extralight'> {card.description}</h3>
      </motion.div>
      ))}
    </div>
  );
};

export default Popupcards;