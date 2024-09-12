import { base64ToBlob } from "@/lib/actions";
import { client } from "@/lib/config/prismaconfig";
import { EStatus, TCreateCampaignProps } from "@/types/common";
// import { Campaign } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
// Create a single supabase client for interacting with your database
const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);
  

export const createCampaign = async (data: TCreateCampaignProps) => {

    const imageId = uuidv4();
    console.log({ imageId });
  
    const imageBlob = base64ToBlob(data.imageFile!);
  
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(process.env.BUCKET_NAME!)
      .upload(imageId, imageBlob, {
        cacheControl: "3600",
        upsert: false,
      });
  
    if (uploadError) {
      return {
        status: EStatus.ERROR,
        title: "Image upload failed",
        desciption: "Image upload failed",
      };
    }
  const response = await client.campaign.create({
    data: {
      title: data.title,
      description: data.description,
      image: uploadData?.fullPath,
      totalWinners: data.totalWinners,
      totalPrize: data.totalPrize,
      campaignStartDate: data.campaignStartDate,
      campaginEndDate: data.campaginEndDate,
      rewardType: data.rewardType,
      isNative: data.isNative,
      chainId: data.chainId,
      tokenAddress: data.tokenAddress,
      tokenSymbol: data.tokenSymbol,
      tokenName: data.tokenName,
      particpationType: data.particpationType,
      taskType: data.taskType,
      ownerId: data.walletAddress, 
    },
  });

  if (!response) {
    return {
      status: EStatus.ERROR,
      title: "Campaign creation failed",
      description: "Campaign creation failed",
    };
  } else {
    return {
      status: EStatus.SUCCESS,
      title: "Campaign created",
      description: "Campaign created successfully",
    };
  }
};

// export const getCampaigns = async ():Promise<Campaign[]> => {
//   try {
//     const response = await client.campaign.findMany();
//     if (response) {
//         return response;
//     } else {
//         return [];
//     }
//   } catch (error) {
//     console.log(error);
//     return [];
    
//   }
// }