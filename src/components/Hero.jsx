import Image from 'next/image'
import React from 'react'
import homepage from '../../public/homepage.jpg'

const Hero = () => {
  return (
    // <div className='justify-between items-start flex md:flex-col grid-cols-2 relative md:grid-cols-none '>
    //     <img src="./hero1.png" alt="" className='md:hidden object-contain w-1/2 h-full'/>

    //     <img src="./hero2.png" alt="" className='mt-24 md:mt-0 md:w-full w-[45%] md:h-full object-cover '/>

    //     <div className='absolute md:static md:-mt-[150px] p-[32px] top-[206px] md:py-[48px] md:m-auto md:px-[5%] md:w-full bg-fadePrimary md:bg-[rgb(255,255,255,1)] capitalize absolute-center text-[48px] md:text-[32px] bigText w-[40%] md:top-[384px] md:left-[5%] md:right-[5%] md:transform-none text-center leading-[58px] md:leading-[40px]'>
    //         Creating a seamless entrepreneurial experience through support, structure and strategy
    //     </div>
    // </div>
    <div className='w-full h-auto'>
      <Image src="/./home-hero.png" alt="" className='!w-[100vw] h-auto' priority width={100} height={100} sizes="100vw"/>
    </div>
  )
}

export default Hero
