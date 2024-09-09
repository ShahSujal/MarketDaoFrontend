import Image from 'next/image'
import React from 'react'

type Props = {
    title: string;
    icon: React.JSX.Element;
    image?: string;
    width: string;
    height: string;
}

const CustomButton = (props: Props) => {
  return (
    <div className={` w-[${props.width}] h-[${props.height}] relative rounded-2xl`}>
     <Image src={props.image ? props.image :"/content/cardbg.jpeg"} width={100} height={100} alt="" className=" w-full h-full rounded-2xl absolute top-0 object-cover transition"/>
    <button className="flex items-center justify-center flex-row w-40 h-8 relative rounded-2xl text-gray-400 bg-transparent backdrop-blur-xl z-10 hover:text-white hover:backdrop-blur-sm transition duration-1000 font-fragment font-medium ">
     {props.icon ? props.icon : <></>} &nbsp;  {props.title}
     </button>
    </div>
  )
}

export default CustomButton