import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightFill } from 'react-icons/ri'
import notFound from '../../public/404.png'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[40px] justify-self-center md:gap-[32px] my-[100px] md:my-[25vh] md:px-xPadding'>
        <Image src={notFound} alt="" priority />
        <p className='bigText text-[40px] md:text-[24px] md:text-center'>oops! we couldn`t find the page you are looking for.</p>

        <Link href={"/"}>
            <button className='flex gap-2 items-center justify-center w-fit border-2 md:text-[14px] border-black p-5'>
                GO BACK TO HOME PAGE <RiArrowRightFill />
            </button>
        </Link>
        
    </div>
  )
}

export default page