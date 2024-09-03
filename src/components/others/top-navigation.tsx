import { Package2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const TopNavigation = (props: Props) => {
  return (
    <div className=' w-full h-14 flex bg-gradient-to-br from-[#64636328] to-[#fffdfd18] justify-between items-center px-4 rounded-3xl backdrop-blur-sm'>
             <Link
            href="#"
            className="flex items-center gap-2 text-2xl text-white font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className=' font-paps font-medium'>Dao Investing</span>
          </Link>

         <div className=' flex justify-center space-x-4 items-center'>
         
            

             <Button variant={"secondary"} className='rounded-xl'>
             Dashboard
             </Button>  
         </div>

          
    </div>
  )
}

export default TopNavigation