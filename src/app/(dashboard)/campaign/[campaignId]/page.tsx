import { getCampaignById } from '@/actions/campaign'
import CampaignId from '@/components/campaign/campaignId'
import React from 'react'
type Props = {
    params:{
    campaignId: string;
    }
 }

const Page = async(props: Props) => {
    const campaign = await getCampaignById(props.params.campaignId) 
  return (
    campaign?<CampaignId campaign={campaign}/>:<div>loading</div>
  )
}

export default Page
