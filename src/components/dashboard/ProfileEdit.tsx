"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useAccount } from "wagmi";
import { toast } from "../ui/use-toast";
import { EStatus, TApiResponse } from "@/types/common";
import { updateUserDetails } from "@/hooks/user/index";
import { Plus } from "lucide-react";

type Props = {};
type Details = {
  username: string;
  bio: string;
};
const ProfileEdit = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const { address } = useAccount();

  const [details, setDetails] = useState<Details>({
    username: "",
    bio: "",
  });

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
    const response: TApiResponse = await updateUserDetails({
      walletAddress: address,
      username: details.username,
      bio: details.bio,
      imageFile: imageFile,
      image: "",
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
    <div className=" flex flex-row z-10">
      <button className="w-44 h-9 relative rounded-full text-gray-50 font-bold bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-fragment flex justify-center items-center backdrop-blur-xl mx-2">
        message investor
      </button>
      <button className="w-44 h-9 relative rounded-full text-gray-50 font-bold bg-gradient-to-tr from-[#d3c9e3] to-[#ff7aa6]font-fragment font-fragment flex justify-center items-center backdrop-blur-xl mx-2" onClick={()=>{
        setDisplay((prev)=>{
         return !prev
        })
      }}>
        Edit profile
      </button>

      <div className={` w-full h-screen top-0 left-0 justify-center items-center flex flex-col bg-[#ffffff35] ${display?"fixed":"hidden"}`}>
      
        <div className=" w-[500px] min-h-[550px] rounded-2xl flex p-4 justify-evenly flex-col bg-[#1a1a1a]">
        <button onClick={()=>{
          setDisplay((prev)=>{
            return !prev
          })
        }} className=" absolute right-6 top-4 rounded-full w-8 h-8 bg-zinc-600">
<Plus className="w-6 h-6 text-gray-50 rotate-45" />
        </button>
          <h1 className=" text-3xl font-fragment font-bold">User details</h1>
          <div className="grid gap-2 ">
            <Label htmlFor="title">Username</Label>
            <Input
              id="title"
              type="text"
              placeholder="enter username"
              required
              onChange={(e) => {
                setDetails({ ...details, username: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label>bio </Label>
            <Textarea
              onChange={(e) => {
                setDetails({ ...details, bio: e.target.value });
              }}
              placeholder="Describe yourself "
            />
          </div>

          <p>User Image</p>
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
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
        
                <div className=" flex justify-center items-center w-full">
                <button
                onClick={handleSubmit}
                className="w-44 h-9 relative rounded-full text-gray-50 font-bold bg-gradient-to-tr from-[#a56dff] to-[#ff7aa6] font-fragment flex justify-center items-center backdrop-blur-xl mx-2">
                Submit
                </button>
                </div>
        </div>

      </div>
      <div className={` w-full h-screen top-0 left-0 justify-center items-center flex flex-col bg-[#ffffff35] ${display?"fixed":"hidden"}`}>
      
        <div className=" w-[500px] min-h-[550px] rounded-2xl flex p-4 justify-evenly flex-col bg-[#1a1a1a]">
        <button onClick={()=>{
          setDisplay((prev)=>{
            return !prev
          })
        }} className=" absolute right-6 top-4 rounded-full w-8 h-8 bg-zinc-600">
<Plus className="w-6 h-6 text-gray-50 rotate-45" />
        </button>
          <h1 className=" text-3xl font-fragment font-bold">User details</h1>
          <div className="grid gap-2 ">
            <Label htmlFor="title">Username</Label>
            <Input
              id="title"
              type="text"
              placeholder="enter username"
              required
              onChange={(e) => {
                setDetails({ ...details, username: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label>bio </Label>
            <Textarea
              onChange={(e) => {
                setDetails({ ...details, bio: e.target.value });
              }}
              placeholder="Describe yourself "
            />
          </div>

          <p>User Image</p>
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
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
        
                <div className=" flex justify-center items-center w-full">
                <button
                onClick={handleSubmit}
                className="w-44 h-9 relative rounded-full text-gray-50 font-bold bg-gradient-to-tr from-[#a56dff] to-[#ff7aa6] font-fragment flex justify-center items-center backdrop-blur-xl mx-2">
                Submit
                </button>
                </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileEdit;
