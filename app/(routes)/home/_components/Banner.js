import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-orange-100
     border gap-5'>
      <Image src='/Sharecipe.png' width={200} height={200} alt='panda' />
      <div>
        <h2 className='font-bold text-[29px] '>WELCOME TO Sharecipe</h2>
        <h2 className=''>Join Community, Create and Share your thought</h2>

        <Link href='/sign-up'>
          <Button className="mt-3 bg-orange-500">
            Get Started
          </Button>
        </Link>

      </div>

    </div>
  )
}

export default Banner