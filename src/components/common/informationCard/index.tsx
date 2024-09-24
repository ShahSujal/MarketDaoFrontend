import Image from "next/image";
import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
type Props = {};

const InformationCard = async() => {
    const client = createClient();
  const page = await client.getByUID("blogs", "exploring-dapp");
  if (!page.data) {
    return (
        <div>

        </div>
    )
  } 
  return (
    <div className=" w-[350px] fixed bottom-0 right-0 overflow-hidden group flex items-center border-[#00000070] h-[150px] border-2 rounded-3xl cursor-pointer p-4 bg-transparent backdrop-blur-lg">
      <Image
        className=" absolute left-0 transition group-hover:grayscale-0 top-0 z-10 object-contain w-full  h-full grayscale opacity-75 "
        alt=""
        width={1000}
        height={1000}
        src={"/content/circuits-mobile.webp"}
      />
      <Image
        className=" absolute left-0 blur-2xl  opacity-70 group-hover:opacity-100 top-0 object-cover w-full  h-full transition duration-1000"
        alt=""
        width={1000}
        height={1000}
        src={"/content/cardbg.jpeg"}
      />

      {/* <div className=" absolute right-4 top-1/4 z-20">
        <h1 className="text-[87px] text-[#ffffff76]  font-paps font-bold">
          {page.data.title}
        </h1>
      </div> */}
      <div className=" text-[#ccc] z-20">
        <p className="text-sm text-gray-400 font-paps font-extralight">Important article</p>
        <h1 className="text-xl font-paps font-bold">{page.data.title}?</h1>
        <Link href={`/blogs/${page.uid}`}>
        <h3 className="font-paps text-center font-extralight text-blue-500">
         article link
        </h3>
        </Link>
      </div>
    </div>
  );
};

export default InformationCard;
