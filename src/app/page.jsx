
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Tools from '../components/Tools'
import TwoWay from '../components/TwoWay'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine } from "react-icons/ri"
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar active={0} />
      <Hero />

      <div className="bg-primary2 mt-[120px] md:mt-[30px] py-[120px] md:py-[60px] px-xPadding md:text-center">
      <TwoWay>
        <Image src="/./DAP1.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>

        <div className='flex flex-col gap-5'>
          <h2 className='bigText text-[48px] md:text-[32px] font-regular md:text-center bts leading-[62.4px] md:leading-[37px]'>
            I help service-based entrepreneurs show up in their business with ease
          </h2>

          <p>
          I`m  your strategic ally in revolutionizing your business.  I streamline and optimize your business operations, providing the support you need to execute and achieve your business goals. I specialize in simplifying lives, exceeding expectations, and driving businesses to unprecedented heights. My commitment to excellence is evident in my meticulous attention to detail, unmatched work ethic, and seamless execution of tasks. 
          </p>

          <p>
          Now, envision having a dedicated partner who not only understands your vision but thinks beyond, turning your aspirations into accomplishments. My proven track record speaks volumes, creative problem-solving, impeccable time management, and effective decision-making are at the core of what I bring to the table. I am here to make your life easier, to be the backbone of your thriving business.
          </p>

          <p>
          Let`s  rewrite your business narrative!
          </p>

          <Link href={"/contact-us"}>
            <button className='flex border-2 border-black gap-2 items-center p-3 w-fit md:m-auto uppercase bz hover-black'>
            work with me <RiArrowRightLine />
          </button>
          </Link>
          
        </div>
      </TwoWay>
      </div>
      <Tools />

      <Services />

      <div className="grid grid-cols-2 justify-center md:flex md:flex-col-reverse">
        <div className='flex flex-col justify-center gap-3 pl-[20%] pr-[10%] md:px-[5%] md:text-center btm'>
          <h2 className='bigText text-[48px] leading-[63px] md:text-[30px] md:leading-[43px]'>
            Mide came into my life [and business] at the perfect time.
          </h2>

          <p>
            I was in the midst of relaunching my coaching business and had several new offers that needed administrative support. And while I booked a "virtual assistant", I received so much more.
          </p>

          <p className='text-[24px] uppercase md:text-[18px]'>
            Britney Jeanine
          </p>
        </div>

        <Image src="/./bj.png" alt="" width={500} height={500} className='w-full' unoptimized/>
      </div>


      <div className="my-yPadding px-xPadding md:px-[5%]">
      <TwoWay>
        <Image src="/./mide-long.png" alt="" className='w-full h-[800px] object-cover' width={1000} height={1000} unoptimized/>

        <div className='flex flex-col gap-[40px] justify-between md:text-center w-[500px] md:w-full'>
          

          <div className="flex flex-col gap-[16px]">
          <h2 className='bigText text-[59px] md:text-[38px] tracking-[-0.5%]'>
            Hey! I`m Mide   
          </h2>

          <p className='text-[24px] md:text-[18px] leading-[36px] md:leading-[26px]'>
            OPERATIONS STRATEGY SLAYER || EXECUTION MAVEN || SYSTEMS STRATEGIST 
          </p>

          <p className=''>
          I am an operation strategist  who <span className="lowercase">DOUBLES AS YOUR BIGGEST SUPPORTER, YOUR CONFIDANT, AND YOUR BUSINESS</span> bestie. Since 2020, I've had the joy of simplifying lives and exceeding expectations. I`m your business transformation partner!  No matter what industry you’re in or your business goals, I’m an expert at crafting a seamless blend of strategy and style. I`m proud to say  that my are clients not just satisfied and amazed but have seen their business skyrocket.
          </p>

          <p>
            My passion for detail and dedication to adding value shine through effortlessly. With a natural flair for understanding your vision, I go above and beyond, turning ideas into reality. No micromanaging needed, I thrive on diligence, thoroughness, and a touch of creativity. Working with you is more than playing a role, it`s my passion and ambition to see you thrive. 
          </p>
          </div>


          <Link href="/about">
          <button className='flex border-2 md:m-auto border-black gap-2 bz items-center p-3 w-fit uppercase hover-black'>
            Get to know me <RiArrowRightLine />
          </button>
          </Link>
        </div>
      </TwoWay>
      </div>

      <div className='relative md:fs md:static fs'>
        <Image src="/./mide-footer.png" alt="" className='md:hidden w-full h-[500px] object-cover object-top' width={1000} height={1000} unoptimized/>

        <div className="content absolute md:static bottom-28 left-[10%] text-white w-2/5 flex gap-[40px] flex-col md:gap-[32px]">
          <div className='flex flex-col gap-3'>
          <h2 className="text-[60px] md:text-[40px] bigText leading-[68px] md:leading-[55px]">
            Ready to get the support you need?
          </h2>

          <p>
            Let me make your professional life easier, just as I've done for many. Join the ranks of those who've experienced the Mide's touch. Your success story begins here
          </p>
          </div>

          <Link href={"/contact-us"}>
          <div className='flex items-center border-2 bz md:m-auto border-white py-3 px-6 gap-3 w-fit hover'>
            I'M READY <RiArrowRightLine />
          </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
