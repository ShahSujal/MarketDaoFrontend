import React from 'react';
import { useClient } from '@xmtp/react-sdk';

const DynamicClientComponent = () => {
  const { client, initialize, error, isLoading } = useClient();

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {client && <div>Client is initialized</div>}
    </div>
  );
};

export default DynamicClientComponent;