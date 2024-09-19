"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Trophy, Calendar, Clipboard, Crown } from "lucide-react"
import { Campaign } from "@prisma/client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
type PropsCampaign = {
    campaign: Campaign; 
}
export default function CampaignId({campaign}: PropsCampaign) {
  const [questDeadline, setQuestDeadline] = useState(7 * 24 * 60 * 60) // 7 days in seconds
  const [dialogOpen, setDialogOpen] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setQuestDeadline((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 3600))
    const hours = Math.floor((seconds % (24 * 3600)) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="container mx-auto w-full p-4">
      <Card className="w-full  mx-auto">
        <CardHeader className="relative">
          <Image
            src="/content/tempo.png"
            alt="Quest Banner"
            width={1200}
            height={400}
            className="w-full h-[450px] rounded-xl object-cover "
          />
          <div className="absolute top-2 right-2 bg-black  bg-opacity-50 rounded-lg p-2">
            <div className="flex items-center">
              <Calendar className="text-white mr-1 h-6 w-6" />
              <span className="text-white text-lg">Quest Deadline: {formatTime(questDeadline)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Crown className="mr-2 h-6 w-6 text-primary" />
              <CardTitle className="text-2xl font-bold">{campaign.title}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              {campaign.description}
            </CardDescription>
          </div>
          <div className="flex items-center  my-10">
            <Trophy className="mr-2 text-yellow-500" />
            <span className="font-semibold mr-2">Rewards:</span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">1000 Gold</Badge>
              <Badge variant="secondary">Dragonscale Armor</Badge>
              <Badge variant="secondary">50 XP</Badge>
            </div>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
            
             <div className=" flex justify-center items-center w-full">
             <Button className="w-1/2 mx-auto" onClick={()=> setDialogOpen(false)} >Accept Quest</Button>
             </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login to Accept Quest</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => {
                    // Implement Google login logic here
                    console.log("Google login clicked")
                    setDialogOpen(false)
                  }}
                  className="flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                  <span>Continue with Google</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
       
        </CardContent>
      </Card>
    </div>
  )
}
