"use server";

import { client } from "@/lib/config/prismaconfig";
import { Address } from "viem";

export const createUser = async (walletAddress: Address) => {
    const checkUser = await client.user.findUnique({
        where:{
            walletAddress: walletAddress
        }
    })
    if (checkUser) {
        return checkUser;
        
    }
    const response = await client.user.create({
        data:{
            walletAddress: walletAddress,
        }
    })
    return response;
} 

