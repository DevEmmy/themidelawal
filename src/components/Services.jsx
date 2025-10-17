"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri'

const Services = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef(null);

    const services = [
        {
            image: "./p1.jpg",
            headText: "Business Support Retainer",
            text: "This high-touch retainer is designed for founders who need consistent, professional support with running their backend operations."
        },
        {
            image: "./p2.jpg",
            headText: "Business Systems Build-Out",
            text: "If you're overwhelmed by scattered systems, no clear workflows, or a backend that doesn't support your growth—this is for you."
        },
        {
            image: "./p3.jpg",
            headText: "Systems Wipe",
            text: 'If your business backend feels chaotic, bloated, or just "not working anymore," this is your clean slate.'
        },
        {
            image: "./p4.jpg",
            headText: "Systems Audit & Action Plan",
            text: 'This is the perfect offer for founders who feel something\'s off in their backend—but can\'t quite put their finger on it.'
        },
        {
            image: "./p6.JPG",
            headText: "Program | Offer Launch Support",
            text: 'This one-time, project-based service is perfect for entrepreneurs preparing for a major launch and need an expert to manage all the operational moving pieces.'
        }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
        }
    };

    return (
        <div className='px-xPadding py-yPadding md:py-[40px] bg-[#F8F6F4]'>
            <h2 className='text-center bigText text-[59px] md:text-[40px] leading-[77px]'>Work With Me</h2>
            <p className='w-1/2 text-center m-auto md:w-full'>
                Every service is tailored to elevate your business experience, offering you the support that
                you need to execute and achieve all your business goals.
            </p>

            <div className="relative my-10">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
                        aria-label="Scroll left"
                    >
                        <RiArrowLeftLine size={24} />
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
                        aria-label="Scroll right"
                    >
                        <RiArrowRightLine size={24} />
                    </button>
                )}

                {/* Scrollable Container */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScrollButtons}
                    className="flex gap-7 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {services.map((service, i) => (
                        <div key={i} className='p-3 bg-white flex flex-col gap-3 text-center max-w-[300px] md:max-w-[280px] flex-shrink-0'>
                            <Image 
                                width={100} 
                                height={100} 
                                unoptimized 
                                src={`/${service.image}`} 
                                alt="" 
                                className='object-cover w-full h-[300px]'
                            />
                            <p className='bigText text-[28px] md:text-[20px] leading-[38px] md:leading-[38px]'>{service.headText}</p>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Link href={"/services"}>
                <div className='flex items-center justify-center bz hover-black gap-2 w-fit p-3 border-2 border-black uppercase m-auto'>
                    Explore Services <RiArrowRightLine />
                </div>
            </Link>
        </div>
    );
};

export default Services;