import LandingPage from "@/components/landing-page";
import { BlocksIcon } from "lucide-react";
import Image from "next/image";
import StartTrading from "@/components/landing-page/startTrading";
import CardSlide from "@/components/landing-page/cardSlide";
import Navbar from "@/components/others/navbar";
import TopNavigation from "@/components/others/top-navigation";
import Treades from "@/components/landing-page/treades";
import Spline from "@splinetool/react-spline";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative ">
      <div className=" fixed top-0 left-0 w-full h-16 px-60 flex flex-row justify-between items-center z-40 ">
       {/* <Navbar/> */}
       <TopNavigation/>
      </div>
      <LandingPage />
      <div className=" w-full min-h-[140vh] bg-gradient-to-t from-[#040015] to-black">
        <div className=" w-full min-h-[140vh]  flex flex-row relative justify-evenly items-center">
          {/* <video className="w-full h-full absolute top-0 left-0 object-cover" src="/content/soundenergy.mp4" autoPlay loop muted/> */}
          <div className=" w-1/4 h-[110vh] z-10 flex flex-col justify-evenly items-center">
            <h1 className=" text-[44px] text-[#ccc] font-fragment font-medium">
              Empowering Investing, {">"} Redifeined Rewards
            </h1>
            <h5 className="text-[#555454] my-4 font-paps font-bold">
              Enhance the portfolios via reliable investing infrastructure
            </h5>

            <div className=" w-full h-[400px] flex flex-col bg-gradient-to-br from-[#ffffff28] to-[#fffdfd18] rounded-2xl p-4">
              <BlocksIcon className="text-[#ccc] w-8 h-8" size={64} />
              <h1 className=" text-[30px] text-[#ccc] font-paps font-extralight">Stacking data api</h1>
              <h4 className="text-[#938f8f] ">177 stackable assets</h4>
              <Image
                src="/content/tempimage.png"
                width={200}
                height={200}
                alt=""
                className=" w-full h-[250px] rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className=" w-1/4 h-screen z-10 flex flex-col justify-evenly items-center">
            <div className=" w-full h-[300px] flex flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <BlocksIcon className="text-[#ccc] w-8 h-8" size={64} />
              <h1 className=" text-[30px] text-[#ccc] font-paps font-extralight">Stacking data api</h1>
              <h4 className="text-[#938f8f] ">177 stackable assets</h4>
              <Image
                src="/content/tempimage.png"
                width={200}
                height={200}
                alt=""
                className=" w-full h-[160px] rounded-2xl object-cover"
              />
            </div>
            <div className=" w-full h-[300px] flex flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <BlocksIcon className="text-[#ccc] w-8 h-8" size={44} />
              <h1 className=" text-[30px] text-[#ccc] font-paps font-extralight">Stacking data api</h1>
              <h4 className="text-[#938f8f] ">177 stackable assets</h4>
              <Image
                src="/content/tempimage.png"
                width={200}
                height={200}
                alt=""
                className=" w-full h-[160px] rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className=" w-1/3 h-screen py-10 z-10 flex flex-col justify-evenly items-center">
            <div className=" w-full h-full flex flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <BlocksIcon className="text-[#ccc] w-8 h-8" size={64} />
              <h1 className=" text-[30px] text-[#ccc] font-extralight font-paps">Stacking data api</h1>
              <h4 className="text-[#938f8f] my-4">177 stackable assets</h4>
              <video
                className="w-full h-[450px] object-cover rounded-2xl"
                src="/content/mobilemockup.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>

      <StartTrading />

      <div className="w-full min-h-[150vh] bg-black">
        <CardSlide />
      </div>

    <div className=" flex flex-col w-full min-h-[200vh]">
    <div className="sticky top-0 left-0 w-full h-screen">
        <Spline
          scene={process.env.NEXT_PUBLIC_SPLINE_PLANET!}
          className="w-full h-full"
        />
      </div>
    <Treades/>

<div className=" w-full min-h-screen bg-[#00000056] flex justify-center z-10 items-center flex-col ">
 <h1 className=" text-[140px] text-[#ccc] font-medium font-fragment">Let's Connect</h1>
 <h3 className="text-[20px] text-[#717070]">
  For any further queries, feel free to reach out to us 
 </h3>

</div>

    </div>
    </main>
  );
}
