import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

const Footer = () => {
    const nav = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Work With Us",
            link: "/work-with-us"
        },
        {
            title: "Results",
            link: "/results"
        },
        {
            title: "Contact",
            link: "/contact-us"
        }
    ]

    const social = [
        {
            icon: <SiInstagram />,
            label: "Instagram",
            link: "https://www.instagram.com/heymidelawal?rpxt=OGN6cHBucTk4MTJ0&utm_source=qr"
        },
        {
            icon: <SiLinkedin />,
            label: "LinkedIn",
            link: "https://ng.linkedin.com/in/mide-lawal-182734149"
        }
    ]

    const contact = (
        <>
            <h2>GET IN TOUCH</h2>
            <p className='text-[12px]'>hey@themidelawal.com</p>
            <div className="flex gap-3">
                {
                    social.map((s, i)=>{
                        return(
                            <Link key={i} href={s.link} target='_blank' aria-label={s.label}>
                                {s.icon}
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )

  return (
    <div className='mt-10 md:mt-[24px]'>
        <div className='text-white bg-black pt-20 pb-10'>
<div className=' px-xPadding'>
        <div className=' flex justify-between md:text-center md:items-center md:justify-center md:flex-col md:gap-7'>
        <div className='flex flex-col gap-3 w-[30%] md:w-full'>
            <h2 className='bigText text-[30px] md:text-[30px] md:text-center uppercase'>
                The Mide Lawal & Co.
            </h2>
            <p className='text-[12px]'>
                Strategy, operations and systems for expert-led brands.
            </p>
        </div>

        <div className='grid grid-cols-3 w-[70%] text-[14px] gap-[20px] md:gap-[48px] md:flex-col md:w-full md:items-start md:justify-center sm:grid-cols-none'>
            <div className='flex flex-col uppercase text-[14px] gap-[8px]'>
                {
                    nav.map((data, i)=>{
                        return(
                            <a key={i} href={data.link} className={""}>
                                {data.title}
                            </a>
                        )
                    })
                }

            </div>

            <div className=' md:hidden flex flex-col gap-[8px] md:items-center md:justify-center'>
                {contact}
            </div>

            <div className='flex flex-col gap-[8px]'>
                <h2 className='text-[14px] font-[400] uppercase'>
                    Notes on Structure, Every Week.
                </h2>

                <p className='text-[12px]'>
                    Practical ideas on systems, operations and building a business that runs without you in everything.
                </p>

            <Link href={"https://the-private-assistant.kit.com/e1fdf52a38"} target='_blank'>
                <div className='border-2 border-white w-fit flex gap-3 bz hover md:m-auto items-center px-3 py-2 uppercase'>
                    Subscribe <RiArrowRightLine />
                </div>
            </Link>

            </div>

            <div className=' md:flex hidden flex-col gap-[8px] md:items-center md:justify-center'>
                {contact}
            </div>
        </div>
    </div>

    </div>

    <div className='border-t-[1px] border-t-fw p-5 pt-10 text-center text-[12px] mt-10'>
        &copy; 2026 The Mide Lawal & Co. All rights reserved.
    </div>

        </div>


    </div>
  )
}

export default Footer
