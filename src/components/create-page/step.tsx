import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { creationType } from "@/types/enum";
import { LoadDataType } from "@/types/common";

interface StepProps {
  setLoadData: React.Dispatch<React.SetStateAction<LoadDataType>>;
  loadData: LoadDataType;
}
export function Step({ setLoadData, loadData }: StepProps) {
  const types = [
    {
      src: "/content/platform-nft.jpg",
      title: creationType.CAMPAIGN,
      desc: "Create campaign for brand promotion and reward users who follow your campaign.",
    },
    {
      src: "/content/bidding.jpg",
      title: creationType.DAPP,
      desc: "Engage users with investing on your dapp and pitched them for participating in your dapp.",
    },
  ];

  return (
    <div className="w-full lg:grid lg:min-h-[96vh] lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-bold font-fragment text-gray-100"> Create what&apos;s make you profit </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Choose the type of creation you want to create.
            </p>
          </div>
          <div className="grid gap-4">
            {types.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "w-full h-36 flex justify-center items-center relative flex-col border-2 border-[#ffffff53] rounded-2xl cursor-pointer mix-blend-luminosity transition hover:mix-blend-normal",
                //   loadData.type === nft.title && "mix-blend-normal"
                )}
                onClick={() => setLoadData({ ...loadData, creationType: item.title })}
              >
                <Image
                  src={item.src || ""}
                  alt={item.title}
                  width={500}
                  height={500}
                  className={cn(
                    "w-full h-full object-cover transition rounded-2xl absolute left-0 top-0 opacity-30",
                    loadData.creationType === item.title && "opacity-90"
                  )}
                />
                <h1 className="text-[34px] font-medium font-fragment z-10 text-gray-100">
                  {item.title}
                </h1>
                <h3 className="text-[10px] font-paps font-extralight z-10 text-gray-300 text-center">
                  {item.desc}
                </h3>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setLoadData({ ...loadData, step: 1 })}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/content/illustration.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale mix-blend-luminosity"
        />
      </div>
    </div>
  );
}
