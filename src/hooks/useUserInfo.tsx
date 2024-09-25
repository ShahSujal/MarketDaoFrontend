import { useState, useEffect } from 'react';
import { getUserAllDetails } from '@/actions/user';
import { useAccount } from 'wagmi';
import { TInvestorDetails } from '@/types/common';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<TInvestorDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { address } = useAccount();
  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUserAllDetails(address as string);
        setUserInfo(data);
      } catch (err) {
        setError('Failed to fetch user information');
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchUserInfo();
    }
  }, [address]);

  return { userInfo, loading, error };
};

export default useUserInfo;