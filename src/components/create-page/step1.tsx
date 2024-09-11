import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { creationType, LoadDataType } from "./page";
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

interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<LoadDataType>>;
  loadData: LoadDataType;
}
export function Step1({ setLoadData, loadData }: Step1Props) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2  min-h-[95vh]">
      <div className="flex items-center justify-center ">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-gray-100">
              Investment Details
            </h1>
            <p className="text-balance text-muted-foreground">
              Enter your title of your investment
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
           
            </div>
          
        </div>
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