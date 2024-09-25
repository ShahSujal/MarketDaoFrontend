import { registerLiquidity, updateLiquidity } from "@/actions/investor";
import { toast } from "@/components/ui/use-toast";
import { config } from "@/lib/config/wagmiConfig";
import { EStatus } from "@/types/common";
import { getAccount, getBalance } from "@wagmi/core";
import { Address, formatUnits, isAddress } from "viem";
import { useBalance } from "wagmi";

type Props = {
  tokenAddress?: string;
  isNative: boolean;
};
type TVerifyLiquidity = {
    tokenAddress?: string;
    isNative: boolean;
    id: string;
    amount: number;
    userId: string;
    chainId: number;
}
export const addLiquidity = async ({ tokenAddress, isNative }: Props) => {
  console.log("addLiquidity");
  const { address: walletAddress, chainId } = getAccount(config)
  if (!walletAddress || !chainId) {
    toast({title:"Please connect wallet"});
    return;
  }

  console.log({ walletAddress, chainId, tokenAddress, isNative });
  
  if (isNative) {

    const {
      value: balance,
      decimals: tokenToSellDecimals,
      symbol,
    } = await getBalance(config, {
      address: walletAddress as Address,
    });
    
    const formatedBalance = formatUnits(balance, tokenToSellDecimals);
    
    const register = await registerLiquidity({
        userId: walletAddress as string,
        amount: Number(formatedBalance),
        isNative: isNative,
        chainId: chainId,  
        tokenAddress: undefined,
        tokenSymbol: symbol
    })
    if (register.status === EStatus.SUCCESS) {
      toast({title:"Liquidity added successfully"});   
    } else {
        toast({title:"Failed to add liquidity"});
    }
  } else {
  if (!tokenAddress || !isAddress(tokenAddress)) {
    toast({title:"Please provide a valid token address"});
    return;
  }
    const {
        value: balance,
        decimals: tokenToSellDecimals,
        symbol,
      } = await getBalance(config, {
        address: walletAddress as Address,
        token: tokenAddress as Address,
      });
      
      const formatedBalance = formatUnits(balance, tokenToSellDecimals);
      
      const register = await registerLiquidity({
          userId: walletAddress as string,
          amount: Number(formatedBalance),
          isNative: isNative,
          chainId: chainId,  
          tokenAddress: tokenAddress,
          tokenSymbol: symbol
      })
      if (register.status === EStatus.SUCCESS) {
        toast({title:"Liquidity added successfully"});   
      } else {
          toast({title:"Failed to add liquidity"});
      }
  }
};

export const verifyLiquidity = async ({ tokenAddress, isNative, amount, id, userId, chainId }: TVerifyLiquidity) => {
  console.log("verify liquidity");
  const { address: walletAddress } = getAccount(config)
  if (!walletAddress || !chainId) {
    toast({title:"Please connect wallet"});
    return;
  }

  if (isNative) {
    const {
      value: balance,
      decimals: tokenToSellDecimals,
      symbol,
    } = await getBalance(config, {
      address: userId as Address,
      chainId: chainId
    });
    
    const formatedBalance = formatUnits(balance, tokenToSellDecimals);

    if (Number(formatedBalance).toFixed(6) === amount.toFixed(6)) {
      toast({ title: "Current Liquidity balance is the same as the amount" });
      return;
    }
    
    const verify = await updateLiquidity({
        id: id,
        amount: Number(formatedBalance)
    })
    if (verify.status === EStatus.SUCCESS) {
      toast({title:"Liquidity updated successfully"});   
    } else {
        toast({title:"Failed to add liquidity"});
    }
  } else {
  if (!tokenAddress || !isAddress(tokenAddress)) {
    toast({title:"Please provide a valid token address"});
    return;
  }
    const {
        value: balance,
        decimals: tokenToSellDecimals,
        symbol,
      } = await getBalance(config, {
        address: userId as Address,
        token: tokenAddress as Address,
        chainId: chainId
      });
      
      const formatedBalance = formatUnits(balance, tokenToSellDecimals);
      if (Number(formatedBalance) == amount) {
        toast({title:"Current Liquidty balance is same as the amount"});
        return
      }
      const verify = await updateLiquidity({
        id: id,
        amount: Number(formatedBalance)
    })
      if (verify.status === EStatus.SUCCESS) {
        toast({title:"Liquidity updated successfully"});     
      } else {
          toast({title:"Failed to add liquidity"});
      }
  }
};
