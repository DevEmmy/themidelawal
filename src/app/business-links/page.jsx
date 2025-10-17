import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const page = () => {

    const links = [
        {
            title: "WEBSITE",
            link: "https://www.themidelawal.com"
        },
        {
            title: "BOOK A FIT CALL",
            link: "https://calendar.app.google/TQJMD4Lkz9u31PMW9"
        },
        {
            title: "GRAB OUR FREE SOP TEMPLATE",
            link: "https://forms.gle/R4qkxLmCDecmvKYh8"
        },
        {
            title: "BUY THE DELEGATION TOOLKIT",
            link: "https://selar.com/17g118"
        },
        {
            title: "APPLY FOR THE BUILDPRENEUR SUITE™",
            link: "https://forms.gle/ZcxDQeHE6u33CS2c8"
        },
        {
            title: "ENROLL FOR THE VAPRENEUR BLUEPRINT™",
            link: "/vapreneur-blueprint"
        },
        {
            title: "INVITE MIDE TO SPEAK AT YOUR BUSINESS WORKSHOP & EVENTS",
            link: "https://forms.gle/1skNf11gBmCrRSEJ7"
        },
    ]
  return (
    <div className=''>
        <div className="">
            <Image src="/./homepage.png" alt="" className="relative w-full object-cover" width={2000} height={2000} unoptimized/>

            <div className="absolute top-[458px] md:top-[200px] sm:top-[153px] md:left-xPadding md:right-xPadding  md:px-xPadding left-32 right-32 md:px-xPadding left-32 right-32 bg-white flex gap-5 items-center justify-center flex-col py-[40px] md:py-[32px] px-xPadding">
                <h2 className="text-center bigText300 text-[80px] md:text-[40px] font-[300] leading-[60px] md:leading-[30px]">
                    The Mide Lawal & Co.
                </h2>
                <p className="uppercase text-[16px] leading-[21px] text-center">
                    SUPPORT || STRATEGY || structure
                </p>

                <div className="w-full max-w-2xl">
                    <h3 className="bigText text-center text-[48px] md:text-[32px] ">
                        Quick Links
                    </h3>
                    <p className='text-center text-[16px] leading-[21px] mb-8 capitalize'>Welcome To The One Stop Hub For The Mide Lawal & Co.</p>

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
