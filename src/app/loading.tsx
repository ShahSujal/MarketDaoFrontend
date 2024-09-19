import React from 'react'
import { CircleLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className=' w-full h-screen justify-center items-center flex flex-col'>
      <CircleLoader />
        loading...
    </div>
  )
}

export default loading