import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

import { toast } from "@/components/ui/use-toast";
import { LoadDataType } from "@/types/common";
import { creationType } from "@/types/enum";
import { TaskType } from "@prisma/client";

interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<LoadDataType>>;
  loadData: LoadDataType;
}

export function Step1({ setLoadData, loadData }: Step1Props) {
  const campaigns = [
    {
      src: "/content/youtube.png",
      title: TaskType.YOUTUBESHORT,
      desc: "Youtube Shorts.",
    },
    {
      src: "/content/youtube.png",
      title: TaskType.YOUTUBEVIDEO,
      desc: "Youtube Video.",
    },
    {
      src: "/content/twitter.png",
      title: TaskType.TWITTERPOST,
      desc: "Twitter Post.",
    },
    {
      src: "/content/twitter.png",
      title: TaskType.TWITTERTWEET,
      desc: "Twitter Post.",
    },

  ]
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoadData({ ...loadData, imageFile: file });
      // setImageUrl(URL.createObjectURL(file));
    }
  };


  return (
    <div className="w-full lg:grid lg:grid-cols-2  min-h-[95vh]">
      <div className="flex items-center justify-center ">
       {
        loadData.creationType === creationType.DAPP ?(
          <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-bold font-fragment text-gray-100">
              Investment Details
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter basic details of your investment.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="title of your investment"
                required
                onChange={(e) => {
                  setLoadData({ ...loadData, title: e.target.value });
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea
                onChange={(e) => {
                  setLoadData({ ...loadData, description: e.target.value });
                }}
                placeholder="Describe your investments"
              />
            </div>
            <p>Image to upload</p>
            <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-zinc-900  hover:bg-zinc-800  "
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
            <div className="grid grid-cols-2 gap-4"></div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setLoadData({ ...loadData, step: 2 });
              }}
            >
              Continue
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                setLoadData({ ...loadData, step: 0 });
              }}
            >
              Back
            </Button>
          </div>
        </div>
        ):(
          <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-fragment font-bold text-gray-100">
              We are exicted to see your campaign
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your title of your campaign and describe it.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="title  of your campaign"
                required
                onChange={(e) => {
                  setLoadData({ ...loadData, title: e.target.value });
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea
                onChange={(e) => {
                  setLoadData({ ...loadData, description: e.target.value });
                }}
                placeholder="Describe your campaign"
              />
            </div>

            <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-zinc-900  hover:bg-zinc-800  "
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

            <div className="grid gap-2">
              <Label>Campaign Type</Label>
              <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Campaign Type" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Campaign</SelectLabel>
                      {
                        campaigns.map((item, index) => (
                          <SelectItem
                            key={index}
                            value={String(item.title)}
                            onClick={() => {
                              setLoadData({ ...loadData, campaignType: item.title });
                            }}
                          >
                            {item.desc}
                          </SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
              <Label>Minimum eligibility</Label>
              <Input
                id="minimum"
                type="number"
                placeholder="Minimum followers or subscribers required"
                required
                onChange={(e) => {
                  setLoadData({ ...loadData, minimumEligiablity: Number(e.target.value) });
                }}
              />   
            </div>

           
           
            <div className="grid grid-cols-2 gap-4"></div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setLoadData({ ...loadData, step: 2 });
              }}
            >
              Continue
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                setLoadData({ ...loadData, step: 0 });
              }}
            >
              Back
            </Button>
          </div>
        </div>
        )
       }
      </div>
      <div className="hidden bg-muted lg:flex relative h-full  justify-center items-center">
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
