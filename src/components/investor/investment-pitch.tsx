import React, { useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Switch } from "../ui/switch";
import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

type Props = {};
enum EStage {
  Details,
  Estimation,
  Deadline
}

const InvestmentPitch = (props: Props) => {
const handleSubmit = async()=>{

}
    const [formStage, setformStage] = useState<EStage>(EStage.Details)
  return (
    <div className=" w-full h-44 rounded-xl border-2 my-10 flex flex-row ">
      <div className=" w-1/2 h-full bg-[#2e2e2e28]  flex  flex-col justify-center p-3 items-start">
        <h1 className=" text-3xl text-[#c0bebe] ">Investors</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className=" w-44 mt-3"> pitch now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Investment details</DialogTitle>
              <DialogDescription>
                For each investment you have to deposite some amount of colletral which is 100% refundable
              </DialogDescription>
            </DialogHeader>

            {/*
 id                     String   @default(uuid()) @id
  userId                 String
  user                   User     @relation(fields: [userId], references: [walletAddress])
  investmentId           String
  investment             Investment @relation(fields: [investmentId], references: [id])
  title                  String
  description            String
  deadline               DateTime
  initialInvestment      Int
  profitAmountEstimation Int
  isNative               Boolean
  investmentTokenAddress String
  profitPercentageAmount Int
  isExecuted             Boolean
  voteFor                Int
  voteAgainst            Int
  totalVoters            Int
  Status                 Status @default(ACTIVE)
  createdAt              DateTime @default(now())
  updatedAt              DateTime @updatedAt
*/}

           { formStage === EStage.Details ?
            <div className="flex items-center flex-col space-x-2">
              <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                <Label htmlFor="proposalTitle">Proposal Title</Label>
                <Input id="proposalTitle" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                <Label htmlFor="proposalTitle">Proposal Description</Label>
                {/* <Input id="proposalTitle" type="text" /> */}
                <Textarea/>
              </div>
          
             
     
            </div> 
            : formStage === EStage.Estimation ? 
            <div className="flex items-center flex-col space-x-2 ">
             <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                <p>Select network of investment</p>
                <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
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
                <Input id="tokenAddress" type="text" />
              </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
              <Label htmlFor="initialInvestment">Initial Investment</Label>
              <Input id="initialInvestment" type="number"  placeholder="Value must be in Eth"  />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
              <Label htmlFor="profitAmountEstimation">Profit Amount Estimation</Label>
              <Input id="profitAmountEstimation" placeholder="Value must be in Eth" type="number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
              <Label htmlFor="profitAmountEstimation">Profit Amount Percentage</Label>
              <Input id="profitAmountEstimation"  type="text" readOnly value={"0%"}  />
            </div>
          </div> :
              <div className="flex items-center flex-col">
              <p>Select the deadline</p>
              <Calendar/>
            </div> 
            }
            <DialogFooter className="sm:justify-around">
             

            <Button onClick={()=>{
                formStage === EStage.Estimation ? setformStage(EStage.Details): formStage === EStage.Deadline ? setformStage(EStage.Estimation): setformStage(EStage.Details) 
               }} disabled={formStage===EStage.Details}>Previous</Button>
              {
              
              formStage === EStage.Deadline ?<Button onClick={()=>handleSubmit()}>Submit</Button>
              :<Button onClick={()=>{
                formStage === EStage.Details ? setformStage(EStage.Estimation): setformStage(EStage.Deadline) 
               }}>Next</Button>
               }
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" w-1/2 h-full bg-[#2e2e2e28] rounded-r-xl flex justify-center items-center">
        <Image
          src={"/content/gradientCoin.svg"}
          alt=""
          width={350}
          height={450}
          className=" h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default InvestmentPitch;
