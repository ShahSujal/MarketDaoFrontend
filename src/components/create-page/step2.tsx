import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { creationType, LoadDataType } from "./page";
import { toast } from "@/components/ui/use-toast";
import { createInvestment } from "@/actions/investor";
import { EStatus, TApiResponse } from "@/types/common";
import { useAccount } from "wagmi";
import { createInvestmentFunction } from "@/contract/helpers/investorContract";

interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<LoadDataType>>;
  loadData: LoadDataType;
}
interface ImageResponse {
  success: boolean;
  prompt: string;
  image: string[];
}
export function Step2({ setLoadData, loadData }: Step1Props) {
 const [loading, setLoading] = useState(false);
 const {address} = useAccount()
 const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };
 const handleSubmit = async () => {
  setLoading(true);
  if (!address) {
    return toast({
      title: "Wallet not found",
      description: "Please connect your wallet to continue",
    });
  }
  if (!imageFile) {
    return toast({
      title: "Image not found",
      description: "Please upload an image to continue",
    });
  }
console.log({
  tokenName: loadData.tokenName,
  tokenSymbol: loadData.tokenSymbol,
  tokenAddress: "0x",
  title: loadData.title,
  description: loadData.description,
  imageFile: imageFile
});

  const response:TApiResponse  = await createInvestmentFunction({
    tokenName: loadData.tokenName,
    tokenSymbol: loadData.tokenSymbol,
    tokenAddress: "0x",
    title: loadData.title,
    description: loadData.description,
    imageFile: imageFile
  });
  if(response.status === EStatus.SUCCESS){
  console.log("success");
  return toast({
    title: "Investment created",
    description: "Investment created successfully"
  })
  }else{
    console.log("error");
    console.log(response);
    return toast({
      title: "Investment creation failed",
      description: "Investment creation failed"
    })
    
  }

 }
  return (
    <div className="w-full lg:grid lg:min-h-[80vh] lg:grid-cols-2 xl:min-h-[80vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-gray-100">
             governance details
            </h1>
            <p className="text-balance text-muted-foreground">
              Enter token details
            </p>
          </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Token Name</Label>
                <Input
                  id="title"
                  type="text"
      
                  placeholder="Token Name"
                  required
                  onChange={(e) => {
                    setLoadData({ ...loadData, tokenName: e.target.value });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Token Symbol</Label>
                <Input
                  id="title"
                  type="text"
              
                  placeholder="Token Symbol"
                  required
                  onChange={(e) => {
                    setLoadData({ ...loadData, tokenSymbol: e.target.value });
                  }}
                />
              </div>
              <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-zinc-900  hover:bg-zinc-800  "
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                            </label>
                          </div>
              <div className="grid grid-cols-2 gap-4"></div>
              <Button
                variant="outline"
                className="w-full"
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </Button>
              <Button
                type="submit"
                className="w-full"
                onClick={() => {
                  setLoadData({ ...loadData, step: 0 });
                }}
              >
                Back
              </Button>
            </div>
          
        </div>
      </div>
      <div className="hidden bg-muted lg:flex relative  justify-center items-center">
        <Image
          src="/content/illustration.png"
          alt="Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover grayscale"
        />
      </div>
    </div>
  );
}
{
  /* <div className="grid gap-2">
              <Label >Order Type</Label>
              <Select>
                  <SelectTrigger className="w-[180px] bg-[#ffffff56]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price in Eth</Label>
              <Input id="price"   className="bg-[#ffffff62]" type="number" placeholder="Price" required />
            </div> */
}
/*
GreenField Company is a strategic crypto investor with a passion for advancing decentralized finance (DeFi) as the cornerstone of a more open and efficient financial system. Their vision is rooted in the belief that blockchain technology holds the key to reshaping global finance by removing intermediaries, lowering transaction costs, and providing broader access to financial services.

A firm believer in the potential of DeFi to disrupt traditional financial institutions, GreenField Company carefully evaluates projects that offer innovative solutions to real-world challenges. They prioritize investments in platforms that enhance user empowerment, such as decentralized exchanges (DEXs), yield farming protocols, and decentralized lending platforms. By fostering projects that prioritize transparency, security, and scalability, GreenField Company seeks to contribute to the broader adoption of decentralized technologies.

In an ever-evolving market, GreenField Company combines technical analysis with a deep understanding of blockchain trends to identify long-term opportunities. They are committed to supporting ecosystems that provide sustainable growth, favoring projects with strong governance models, active communities, and a clear roadmap for the future.

As a visionary investor, GreenField Company strives to build a portfolio that not only delivers returns but also accelerates the global transition to decentralized, more inclusive financial systems.
*/