import { getCampaigns } from '@/actions/campaign'
import CampaignCard from '@/components/campaign/campaignCard'
import React from 'react'

const page = async() => {
  const campaigns = await getCampaigns()
    return (
    <div className=' w-full min-h-screen flex relative flex-col'>
      {
        campaigns? 
        campaigns.map((item)=>{
          return <CampaignCard campaign={item} key={item.id} />
        })
        :<div>Loading...</div>
      }



    </div>
  )
}

export default page
