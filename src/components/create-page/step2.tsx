import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { createInvestment } from "@/actions/investor";
import { EStatus, LoadDataType, TApiResponse } from "@/types/common";
import { useAccount } from "wagmi";
import { createInvestmentFunction } from "@/contract/helpers/investorContract";
import { creationType } from "@/types/enum";
import { Switch } from "../ui/switch";

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
  const { address } = useAccount();
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
      imageFile: imageFile,
    });

    const response: TApiResponse = await createInvestmentFunction({
      tokenName: loadData.tokenName,
      tokenSymbol: loadData.tokenSymbol,
      tokenAddress: "0x",
      title: loadData.title,
      description: loadData.description,
      imageFile: imageFile,
    });
    if (response.status === EStatus.SUCCESS) {
      console.log("success");
      return toast({
        title: "Investment created",
        description: "Investment created successfully",
      });
    } else {
      console.log("error");
      console.log(response);
      return toast({
        title: "Investment creation failed",
        description: "Investment creation failed",
      });
    }
  };
  return (
    <div className="w-full lg:grid min-h-[95vh] lg:grid-cols-2">
      <div className="flex items-center justify-center py-5">
        {loadData.creationType === creationType.DAPP ? (
          <div className="mx-auto grid w-[400px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-2xl font-bold text-gray-100 font-fragment ">
                Governance Token Details
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter token details for governance token creation , we will
                create a token for you.
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
                  setLoadData({ ...loadData, step: 1 });
                }}
              >
                Back
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto grid w-[400px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-2xl font-fragment font-bold text-gray-100 ">
                Winners Details
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter details for winners and prize distribution. we will
                disctrubute the prize to winners.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Number Of Winners</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Winners"
                  required
                  onChange={(e) => {
                    setLoadData({ ...loadData, tokenName: e.target.value });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Price Value </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Value should be in Eth"
                  required
                  onChange={(e) => {
                    setLoadData({ ...loadData, tokenSymbol: e.target.value });
                  }}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                <p>Select network of investment</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a chain Network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Chain</SelectLabel>
                      <SelectItem value="sepolia">Sepolia</SelectItem>
                      <SelectItem value="banana">Binance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className=" flex flex-row space-x-4 my-3 w-full ">
                <Label htmlFor="isNative">isNative investment</Label>
                <Switch id="isNative" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                <Label htmlFor="tokenAddress">Token Address</Label>
                <Input id="tokenAddress" placeholder="0x.." type="text" />
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
                  setLoadData({ ...loadData, step: 1 });
                }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
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
/*

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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
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
*/
