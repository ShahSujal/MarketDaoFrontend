import Spline from '@splinetool/react-spline'
import React from 'react'

type Props = {}

const StartTrading = (props: Props) => {
  return (
    <section className='w-full h-[130vh] bg-[#040015]'>
            <Spline scene={process.env.NEXT_PUBLIC_SPLINE_START_EARNING!} className='h-full w-full' />
      </section>
  )
}

export default StartTrading

/*

import Spline from '@splinetool/react-spline';

export default function App() {
  return (

  );
}

*/