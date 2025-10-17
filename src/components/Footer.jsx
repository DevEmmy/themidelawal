import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { SiInstagram, SiLinkedin, SiPinterest } from 'react-icons/si'

const Footer = ({showPinterest = true}) => {
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
            title: "Services",
            link: "/services"
        },
        {
            title: "Client Experience",
            link: "/client-experience"
        },
        {
            title: "Contact",
            link: "/contact-us"
        }
    ]

    const images = [
        "./f1.png", "./f2.png", "./f3.png", "f4.png", "f5.png", "./f6.png"
    ]

    const social = [
        {
            icon: <SiPinterest />,
            link: "https://www.pinterest.com/themidelawal/the-aatelier/?invite_code=4fc2cc98b74844fda7fc313b97e6f756&sender=749708806627426803"
        },
        {
            icon: <SiInstagram />,
            link: "https://instagram.com/themidelawal?igshid=NGVhN2U2NjQ0Yg=="
        },
        {
            icon: <SiLinkedin />,
            link: "https://ng.linkedin.com/in/mide-lawal-182734149"
        }
    ]


  return (
    <div className='mt-10 md:mt-[24px]'>

        {showPinterest && (
            <Link href={"https://www.pinterest.com/themidelawal/the-aatelier/?invite_code=4fc2cc98b74844fda7fc313b97e6f756&sender=749708806627426803"}>
                <div className='flex items-center gap-3 border-2 border-black w-fit p-3 m-auto hover-black bz'>
                    VIEW MY PINTEREST BOARD <RiArrowRightLine />
            </div>
            </Link>
        )}
        

        {
            showPinterest && (
                <div className="flex gap-10 md:gap-5 md:px-xPadding md:grid md:grid-cols-3 my-10 md:my-[24px]">
                {
                    images.map((im, i)=>{
                        return(
                            <img src={im} key={i} alt="" className='w-full md:h-full'/>
                        )
                    })
                }
            </div>   
            )
        }

        <div className='text-white bg-black pt-20 pb-10'>
<div className=' px-xPadding'>
        <div className=' flex justify-between md:text-center md:items-center md:justify-center md:flex-col md:gap-7'>
        <h2 className='bigText text-[30px] md:text-[30px] md:text-center uppercase'>
            The Mide Lawal
        </h2>

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
                <h2>GET IN TOUCH</h2>
                <p className='text-[12px]'>hey@themidelawal.com</p>
                <div className="flex gap-3">
                    {
                        social.map((s, i)=>{
                            return(
                                <Link key={i} href={s.link} target='_blank'>
                                    {s.icon}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
                <h2 className='text-[14px] font-[400] uppercase'>
                    Become a part of the community
                </h2>

                <p className='text-[12px]'>
                    Sign up to join my email  community where I share lessons about my intimacy
                    with God  weekly.
                </p>

            <Link href={"https://themidelawal.substack.com/subscribe"} target='_blank'>
                <div className='border-2 border-white w-fit flex gap-3 bz hover md:m-auto items-center px-3 py-2'>
                    SIGN UP <RiArrowRightLine />
                </div>
            </Link>
                
            </div>

            <div className=' md:flex hidden flex-col gap-[8px] md:items-center md:justify-center'>
                <h2>GET IN TOUCH</h2>
                <p className='text-[12px]'>hey@themidelawal.com</p>
                <div className="flex gap-3">
                    {
                        social.map((s, i)=>{
                            return(
                                <Link key={i} href={s.link} target='_blank'>
                                    {s.icon}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>

    </div>

    <div className='border-t-[1px] border-t-fw p-5 pt-10 text-center text-[12px] mt-10'>
        &copy; 2024 The Mide Lawal - All right reserved.                
    </div>

        </div>

    
    </div>
  )
}

export default Footer