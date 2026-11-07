"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri';
import { HiX } from 'react-icons/hi';

const NavBar = ({active = 0}) => {

    // const [active, setActive] = useState(0)
    const [show, setShow] = useState(false)

    const nav = [
        {
            title: "Home",
            link: "/"
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
  return (
    <>
    <div className='w-full relative bg-primary1 px-[5%] md:flex md:justify-between flex items-center gap-10 py-5 justify-between'>
        <Link href={"/"}>
            <p className='bigText text-logoText laptop:text-[30px] laptop-sm:text-[26px] md:text-[24px] font-bold whitespace-nowrap'>THE MIDE LAWAL & CO.</p>
        </Link>

        <div className='flex justify-between uppercase gap-[32px] xl:gap-[20px] items-center text-pg md:hidden whitespace-nowrap'>
            <div className='flex gap-[14px] xl:gap-[10px] items-center'>
                {
                nav.map((data, i)=>{
                    return(
                        <React.Fragment key={i}>
                            {i > 0 && (
                                <span aria-hidden="true" className='pb-2 border-b-2 border-b-transparent text-black/40 select-none'>•</span>
                            )}
                            <a href={data.link} className={`pb-2 border-b-2 ${active === i ? "border-b-black" : "border-b-transparent"}`}>
                                {data.title}
                            </a>
                        </React.Fragment>
                    )
                })
            }
            </div>
            

            <Link href={"https://calendar.app.google/9eJEpYdDz9APFzFh7"} target='_blank'>
                <div className='border-black border-2 p-3 cursor-pointer hover-black'>
                    Book a fit call
                </div>
            </Link>
            
        </div>


        <div className='hidden md:flex items-end justify-end'>
            <RiMenu2Line onClick={()=> setShow(true)} size={30}/>
        </div>
    </div>

    {
            show && 

            <div className='flex gap-10 flex-col absolute top-0 py-10 w-full lg:hidden px-xPadding h-fit z-50 bg-black text-white justify-between'>
                <div className='flex justify-between items-center gap-10'>
                    <Link href={"/"}>
                        <p className='bigText text-logoText md:text-[25px]'>THE MIDE LAWAL & CO.</p>
                    </Link>

                    <div>
                        <HiX size={30} onClick={()=> setShow(false)}/>
                    </div>
                </div>

                <div className='flex flex-col gap-10 uppercase items-center text-pg w-full'>
                    {
                        nav.map((data, i)=>{
                            return(
                                <a key={i} href={data.link} className={`${active === i && " border-b-2 border-b-black"}`}> 
                                    {data.title}
                                </a>
                            )
                        })
                    }

                    <Link href={"https://calendar.app.google/9eJEpYdDz9APFzFh7"} target='_blank'>
                        <div className='border-black border-2 p-3 cursor-pointer hover-black'>
                            Book a fit call
                        </div>
                    </Link>
            
                </div>

            </div>
        }
    </>
    
  )
}

export default NavBar