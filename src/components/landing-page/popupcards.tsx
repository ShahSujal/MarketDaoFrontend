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

const PopupCard: React.FC<PopupCardProps> = ({ title, description, direction, control, refElement, delay }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0.30, x: direction },
      visible: { opacity: 1, x: 0 },
    }}
    initial="hidden"
    animate={control}
    transition={{ duration: 0.5 }}
    style={{ zIndex: 10 }}
    className={`w-[350px] h-[150px] flex justify-center items-center flex-col bg-[#48484821] rounded-lg text-center p-3 backdrop-blur-md border-2 border-[#2c2c2c] ${direction > 0 ? 'ml-96' : 'mr-96'}`}
    ref={refElement}
  >
    <h1 className='text-[#d3d1d1] font-paps font-medium'>{title}</h1>
    <h3 className='text-gray-500 font-paps font-extralight'>{description}</h3>
  </motion.div>
);

const Popupcards: React.FC<Props> = (props) => {
  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const inViews = refs.map(ref => useInView(ref, {once: true}));

  useEffect(() => {
    inViews.forEach((isInView, index) => {
      if (isInView) {
        controls[index].start('visible');
      }
    });
  }, [inViews]);

  return (
    <div className='w-full h-[160vh] flex justify-evenly items-center flex-col z-10'>
      {cardData.map((card, index) => (
        <PopupCard
          key={index}
          title={card.title}
          description={card.description}
          direction={card.direction}
          control={controls[index]}
          refElement={refs[index]}
          delay={index + 1}
        />
      ))}
    </div>
  );
};

export default Popupcards;