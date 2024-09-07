import React from "react";
import Spline from "@splinetool/react-spline";
import Popupcards from "./popupcards";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <main className="w-full relative min-h-[300vh] bg-[#040015] flex flex-col ">



      <section className="w-full h-screen sticky top-0 ">
        <Spline
          scene={process.env.NEXT_PUBLIC_SPLINE_CUBES!}
          className="w-full h-full"
        />
      </section>
      <div className=" absolute w-full h-screen flex justify-center items-center flex-col text-[#0c0c0cd2] left-0">
        <h1 className="text-[90px]  3xl:text-[120px] bg-gradient-to-tl from-[#2e62ff79] to-[#a3a6fc51] via-[#b7c7ff9e] text-transparent bg-clip-text text-center mx-auto mt-4 z-10  font-fragment font-medium ">
          Navigating Crypto Staking <br /> for Maximum Gains
        </h1>
        {/* <h1 className="text-[90px]  3xl:text-[120px] bg-gradient-to-tl from-[#2e62ff] to-[#484bfd6d] via-[#ffffff22] text-transparent bg-clip-text text-center  font-bold mx-auto mt-4 z-10" style={{textShadow:"1px 1px 4px rgba(0,0,0,0.3)"}}>
          Navigating Crypto Staking <br /> for Maximum Gains
        </h1> */}
        <p className="text-[#e9e3e390] mt-4 text-[22px] z-10 font-fragment font-extralight">
          Earn rewards effortlessly on popular cryptocurrencies.
        </p>
        {/* <button className="mt-8 px-8 py-4 bg-purple-600 rounded-full font-semibold text-lg hover:bg-purple-500 transition duration-300 z-10">
          Start Earning Now
        </button> */}
      </div>

      <div className=" w-full h-screen"></div>
      <Popupcards />

      
    </main>
  );
};

export default LandingPage;
