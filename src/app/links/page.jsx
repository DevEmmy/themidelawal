import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const page = () => {

    const links = [
        {
            title: "MY WEBSITE",
            link: "/"
        },
       {
            title: "MY NOTION TEMPLATES",
            link: "https://bit.ly/midesnotiontemplates"
       },
        {
            title: "MY PINTEREST BOARD",
            link: 'https://www.pinterest.com/themidelawal/the-aatelier/?invite_code=4fc2cc98b74844fda7fc313b97e6f756&sender=749708806627426803'
        },
        {
            title: "MY DEVOTIONALS",
            link: "https://themidelawal.substack.com/subscribe"
        },
        {
            title: "BOOK A FIT CALL",
            link: "https://calendar.app.google/9eJEpYdDz9APFzFh7"
        },
    ]
  return (
    <div className=''>
        <div className="">
            <Image src="/./homepage.png" alt="" className="relative w-full object-cover" width={2000} height={2000} unoptimized/>

            <div className="absolute top-[458px] md:top-[200px] sm:top-[153px] md:left-xPadding md:right-xPadding  md:px-xPadding left-32 right-32 bg-white flex gap-5 items-center justify-center flex-col py-[40px] md:py-[32px] px-xPadding">
                <h2 className="text-center bigText300 text-[80px] md:text-[40px] font-[300] leading-[60px] md:leading-[30px]">
                    The Mide Lawal
                </h2>
                <p className="uppercase text-[16px] leading-[21px] text-center">
                    SUPPORT || STRATEGY || structure
                </p>

                <div className="w-full max-w-2xl">
                    <h3 className="bigText text-center text-[48px] md:text-[32px] ">
                        My Quick Links
                    </h3>
                    <p className='text-center text-[16px] leading-[21px] mb-8'>Welcome to the one stop hub for all my digital footprint</p>

                    <div className='flex flex-col gap-[20px] md:gap-[16px]'>
                        {
                            links.map((l, i)=>{
                                return(
                                    <Link href={l.link} key={i} className='w-full flex gap-4 items-center justify-center border-2 border-black p-3 text-[24px] md:text-[16px] text-center font-[500] hover:bg-black hover:text-white transition-colors duration-300'>
                                        {l.title}
                                        <RiArrowRightLine />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page