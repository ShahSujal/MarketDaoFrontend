import LandingPage from "@/components/landing-page";
import { BlocksIcon, Coins, Crown, Handshake } from "lucide-react";
import Image from "next/image";
import StartTrading from "@/components/landing-page/startTrading";
import CardSlide from "@/components/landing-page/cardSlide";
import Navbar from "@/components/others/navbar";
import TopNavigation from "@/components/others/top-navigation";
import Treades from "@/components/landing-page/treades";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative ">
      <div className=" fixed top-0 left-0 w-full h-16 px-60 max-lg:px-8 max-md:px-0 flex flex-row justify-between items-center z-40 ">
        {/* <Navbar/> */}
        <TopNavigation />
      </div>
      <LandingPage />
      <div className="w-full min-h-[140vh] bg-gradient-to-t from-[#040015] to-black">
        <div className="w-full min-h-[140vh] flex flex-col md:flex-row relative justify-evenly items-center">
          <div className="w-full md:w-1/4 h-[110vh] z-10 flex flex-col justify-evenly items-center p-4">
            <h1 className="text-[32px] z-10 md:text-[44px] text-[#ccc] font-fragment font-medium">
              Empowering Investments, Redefining Rewards
            </h1>
            <h5 className="text-[#555454] my-4 font-paps font-bold">
              Strengthen portfolios with innovative investment strategies
            </h5>

            <div className="w-full h-[400px] flex justify-evenly items-start flex-col bg-gradient-to-br from-[#ffffff28] to-[#fffdfd18] rounded-2xl p-4">
              <BlocksIcon className="text-[#ccc] " width={24} height={24} />
              <h1 className="text-xl text-[#ccc] font-paps font-extralight">
                Diversified Investment Options
              </h1>

              <Image
                src="/content/handeth.png"
                width={200}
                height={200}
                alt="Investment Assets"
                className="w-full h-[250px] rounded-2xl object-cover"
              />
              <h4 className="text-[#938f8f] my-3">Over 200 stackable assets</h4>
            </div>
          </div>

          <div className="w-full md:w-1/4 h-auto md:h-screen z-10 flex flex-col justify-evenly items-center p-4">
            <div className="w-full h-[300px] flex justify-evenly items-start flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <Handshake className="text-[#ccc] " width={24} height={24} />
              <h1 className="text-xl text-[#ccc] font-paps font-extralight">
                Collaborative Investment Pools
              </h1>

              <Image
                src="/content/eth.jpg"
                width={200}
                height={160}
                alt="Collaborate"
                className="w-full h-[160px] rounded-2xl object-cover"
              />
              <h4 className="text-[#938f8f] my-3">
                Join forces for smarter investments
              </h4>
            </div>
            <div className="w-full h-[300px] flex justify-evenly items-start flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <Crown className="text-[#ccc] " width={24} height={24} />
              <h1 className=" text-xl text-[#ccc] font-paps font-extralight">
                Profit from Campaigns
              </h1>

              <Image
                src="/content/secure.png"
                width={200}
                height={160}
                alt="Campaign"
                className="w-full h-[160px] rounded-2xl object-cover"
              />
              <h4 className="text-[#938f8f] my-3">
                Earn crypto through marketing tasks
              </h4>
            </div>
          </div>

          <div className="w-full md:w-1/3 h-auto md:h-screen py-10 z-10 flex flex-col justify-evenly items-center p-4">
            <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#64636328] to-[#fffdfd18] rounded-2xl p-4">
              <Coins className="text-[#ccc] " width={12} height={12} />
              <h1 className="text-[24px] md:text-[30px] text-[#ccc] font-extralight font-paps">
                Governance Token Power
              </h1>
              <h4 className="text-[#938f8f] my-4">
                Influence decisions with higher stake power
              </h4>
              <Image
                className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
                src="/content/governance.png"
                alt="Governance Token"
                width={700}
                height={400}
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
        <Treades />

        <div className=" w-full min-h-screen bg-[#00000056] flex justify-center z-10 items-center flex-col ">
          <h1 className=" text-[140px] max-md:text-[70px] max-sm:text-[40px] text-[#ccc] font-medium font-fragment">
            Let&apos;s Connect
          </h1>
          <h3 className="text-[20px] text-[#717070] text-center">
            For any further queries, feel free to reach out to us
          </h3>
          <Link href="https://shahhsujal.vercel.app">
            <Button className=" w-44 mt-4 " variant={"secondary"}>
              Visit
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
