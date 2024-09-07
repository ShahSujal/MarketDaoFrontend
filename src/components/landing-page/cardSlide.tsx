"use client";
import React, {useRef} from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";


const CardSlide = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const mainDivTrans2 = useTransform(mainDivYProgess, [1, 0], ["0%", "200%"]);

  return (
    <div ref={mainDivRef} className="relative h-[300vh] max-md:h-[700vh] bg-[#040015] ">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-64 h-44 bg-gradient-to-tr blur-[120px] from-[#fcfcff] to-[#eef6fc]"></div>
        <div className="relative flex h-screen w-full backdrop-blur-lg overflow-hidden ">
          <motion.div
            style={{
              x: mainDivTrans2,
            }}
            className="absolute left-0 top-0 flex h-full w-full items-center justify-end"
          >
            {[0,1,2,3].map((item) => {
                return (
                  <div
                    key={item}
                    className="w-full h-full max-md:mx-8 mx-24 flex relative justify-center  items-center "
                  >
                    <div className=" w-[550px] overflow-hidden group flex items-end border-[#00000070] h-[300px] border-2 relative rounded-3xl cursor-pointer p-4 bg-transparent backdrop-blur-lg">
                     <Image className=" absolute left-0 transition group-hover:grayscale-0 top-0 z-10 object-contain w-full  h-full grayscale opacity-75 " alt="" width={1000} height={1000} src={'/content/circuits-mobile.webp'}/>
                     <Image className=" absolute left-0 blur-2xl  opacity-70 group-hover:opacity-100 top-0 object-cover w-full  h-full transition duration-1000" alt="" width={1000} height={1000} src={'/content/cardbg.jpeg'}/>

                     <div className=" absolute right-4 top-1/4 z-20">
                       <h1 className="text-[87px] text-[#ffffff76]  font-paps font-bold">{item + 1}</h1>
                     </div>
                                
                   <div className=" text-[#ccc] z-20">
                   <h1 className="text-3xl font-paps font-bold">
                      Hello stacking
                    </h1>
                    <h3 className="font-paps font-extralight text-gray-500">
                      hi stacking partners we are here to emborse you
                    </h3>
                   </div>
                    </div>
                  </div>
                );
              })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardSlide