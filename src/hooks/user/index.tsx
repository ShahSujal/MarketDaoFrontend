import { getUserDetails, updateUser } from "@/actions/user";
import { fileToBase64 } from "@/lib/actions";
import { EStatus, TApiResponse, TUpdateUserDetails } from "@/types/common";
import { Address } from "viem";

export const updateUserDetails = async (
  data: TUpdateUserDetails
): Promise<TApiResponse> => {
  if (!data.walletAddress) {
    return {
      status: EStatus.ERROR,
      title: "Wallet not found",
      desciption: "Please connect your wallet to continue",
    };
  }
  if (!data?.imageFile) {
    return {
      status: EStatus.ERROR,
      title: "Image not found",
      desciption: "Please upload an image to continue",
    };
  }

  const base64Image = await fileToBase64(data.imageFile);

  const response = await updateUser({
    walletAddress: data.walletAddress,
    username: data.username,
    image: base64Image,
    bio: data.bio,
  });

  if (!response) {
    return {
      status: EStatus.ERROR,
      title: "Investment creation failed",
      desciption: "Investment creation failed",
    };
  } else {
    return {
      status: EStatus.SUCCESS,
      title: "Investment created",
      desciption: "Investment created successfully",
    };
  }
};

export const userDetailsById = async (walletAddress: Address) => {
  const response = await getUserDetails(walletAddress);  
  return response;
}
