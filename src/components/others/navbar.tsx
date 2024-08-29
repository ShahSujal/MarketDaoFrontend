import React from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
type Props = {}

const Navbar = (props: Props) => {
  const { open, close } = useWeb3Modal()
  return (
    <div>
    <button onClick={()=>open()}>Open</button>
    </div>
  )
}

export default Navbar