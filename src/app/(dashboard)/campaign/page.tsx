import { getCampaigns } from '@/actions/campaign'
import React from 'react'

const page = async() => {
  const campaigns = await getCampaigns()
    return (
    <div className=' w-full min-h-screen flex flex-col'>
      {
        campaigns? 
        campaigns.map((item)=>{
          return <div></div>
        })
        :<div>Loading...</div>
      }
    </div>
  )
}

export default page
