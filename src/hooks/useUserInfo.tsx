import { useState, useEffect } from 'react';
import { getUserAllDetails } from '@/actions/user';
import { useAccount } from 'wagmi';
import { TInvestorDetails } from '@/types/common';

const useUserInfo = (userAddress: string) => {
  const [userInfo, setUserInfo] = useState<TInvestorDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUserAllDetails(userAddress);
        setUserInfo(data);
      } catch (err) {
        setError('Failed to fetch user information');
      } finally {
        setLoading(false);
      }
    };

    if (userAddress) {
      fetchUserInfo();
    }
  }, [userAddress]);

  return { userInfo, loading, error };
};

export default useUserInfo;