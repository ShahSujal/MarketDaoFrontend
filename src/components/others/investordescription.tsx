import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { InvestorCarousel } from './investors-carousel'
import { PitchTable } from '../common/pitchesmap'

type Props = {}

const InvestorDescription = (props: Props) => {
  return (
<section className=" p-4">
          <h1 className=" text-3xl my-10 text-[#c0bebe]  ">Dapp Name</h1>

          <p className=" text-[#ccc]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            unde nobis sed molestiae ex, quod voluptates repellendus cupiditate
            dolorem qui praesentium tempore assumenda nam. Et id animi incidunt
            dolorum beatae adipisci in reprehenderit iste eligendi magnam vero
            officiis architecto voluptatum molestias, perferendis accusamus,
            possimus aut cupiditate? Mollitia tenetur nostrum sunt velit cumque
            excepturi nesciunt impedit saepe delectus? Harum magnam esse
            necessitatibus dolore. Maiores animi labore ipsum in eum iusto quasi
            amet deleniti similique eveniet veritatis reiciendis aliquam
            deserunt odio est nesciunt alias facere, eos porro, laudantium, ipsa
            quod? Aperiam corporis atque enim cupiditate! Alias nulla obcaecati
            fugiat facilis doloremque blanditiis quas saepe quae, doloribus
            ipsum quidem officia nesciunt nam error mollitia laborum iure
            consequuntur velit laboriosam voluptatibus expedita ratione
            repudiandae. Repellendus, a blanditiis quidem magni deleniti
            ratione, distinctio doloremque similique perferendis nesciunt
            dolore, quam labore ipsam dolores. Saepe velit, doloremque inventore
            nesciunt aperiam commodi fuga maxime repudiandae at eaque, quam
            temporibus esse iusto dolorem cum! Quos optio iure autem iste. Ea,
            quidem id? Dicta sit consectetur quis illo nemo, alias in veniam
            neque nostrum quisquam nam voluptatem iste minima odit natus illum
            explicabo amet voluptate minus suscipit autem, corrupti, rerum
            molestiae? Iusto tenetur in repellat voluptate repellendus unde non
            voluptatibus voluptates mollitia optio enim qui temporibus dolore
            saepe quaerat itaque, veritatis quod, id numquam, maxime cum aut.
            Adipisci nam autem minus distinctio vitae! Molestias sint quisquam
            corrupti facere a. Nesciunt!
          </p>
          
          
          <div className=" w-full h-44 rounded-xl border-2 my-10 flex flex-row ">
            <div className=" w-1/2 h-full bg-[#2e2e2e28]  flex  flex-col justify-center p-3 items-start">
              <h1 className=" text-3xl text-[#c0bebe] ">Investors</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Button className=" w-44 mt-3" variant={"secondary"}> pitch now</Button>
            </div>
            <div className=" w-1/2 h-full bg-[#2e2e2e28] rounded-r-xl flex justify-center items-center">
             <Image src={"/content/gradientCoin.svg"} alt="" width={350} height={450} className=" h-full object-contain rounded-lg"/>
           
            </div>
          </div>




        </section>
  )
}

export default InvestorDescription