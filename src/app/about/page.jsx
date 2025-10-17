
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TwoWay from '../../components/TwoWay'

const page = () => {
  return (
    <>
        <NavBar active={1}/>
        
        <div className="grid grid-cols-3">
            <Image src="/./about.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
            <Image src="/./about.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
            <Image src="/./about.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
        </div>

        <section className='text-center flex flex-col gap-3 justify-center items-center my-yPadding md:my-[40px] px-[10%] md:px-[4%]'>
            <p className='text-[16px] uppercase'>I`m So excited you are here !</p>

            <h2 className="bigText text-[59px] md:text-[36px] capitalize">
                This is me in a nutshell
            </h2>

            <p className='w-[85%] md:w-full'>
                There are so many side of me, all of which are tied to the core of my being a child of God. In summary, I`m an operations strategist who loves to help entrepreneurs show up in their business with ease. I’m also an interior design enthusiast. I collect beautiful  interior design inspirations and ideas. I really  love organizing and styling spaces, I find it therapeutic and fun. It's one of the ways I relax, rest and remove myself from my head. I have a tight-knit email community where I share weekly insights derived from the lessons I’m currently learning as I live my life daily in the plans my Abba has laid before me. 
            </p>

            <Link href={"https://themidelawal.substack.com/subscribe"} target='_blank'>
              <button className='flex border-2 border-black gap-2 items-center p-3 w-fit uppercase bz hover-black'>
                SUBCRIBE TO MY NEWSLETTER <RiArrowRightLine />
              </button>
            </Link>
            
        </section>

    <div className="bg-primary2 py-yPadding md:py-[40px] md:px-[5%] px-xPadding">
        <TwoWay>
            <img src="./mide-about1.png" alt="" />

            <div className='flex flex-col gap-5 md:text-center'>
            <h2 className='bigText text-[48px] md:text-[38px]'>
                How it all began
            </h2>

            <p>
                Growing up, I loved and enjoyed the art of organizing, creating seamless environments, ensuring everything flowed effortlessly, and curating spaces that not only looked good but felt good. It wasn't just about a tidy physical space; I craved a clean mental sanctuary too.
            </p>

            <p>
                As I embarked on my career journey, I envisioned playing a pivotal role behind the scenes, helping entrepreneurs find joy in their business operations. My penchant for organization seamlessly transitioned into my professional path. Inspired by the complaints of entrepreneurs overwhelmed by backend challenges, I confidently said, "I can help you do it." And that`s was how , The Private Assistant started. 
            </p>

            <p>
            In the four years since founding my business, I have forged successful long-term partnerships with  numerous service-based entrepreneurs across diverse industries and in different parts of the world. have placed their trust in me for business support, backend end structure and strategy. Despite a structured approach, each client feels like my only focus and have gotten result for their investment.
            </p>
            </div>
        </TwoWay>
      </div>


      <div className="bg-[white] py-yPadding px-xPadding md:py-[40px] md:px-[5%]">
        <div className='grid grid-cols-2 gap-[104px] md:gap-[40px] md:grid-cols-none md:flex md:flex-col-reverse'>

            <div className='flex flex-col gap-5 md:text-center'>

            <p>
            Being a business owner myself, I understand the challenges of managing a business with seemingly endless to-do lists. Navigating and achieving the success you desire can be daunting, and that's where I come in. Entrust me with all your business tasks and support needs. When you choose me, it's more than a commitment, I take it seriously.
            </p>

            <p>
            I envision myself as a business midwife, dedicated to supporting service-based entrepreneurs in bringing their business goals to life without sacrificing personal time and needs. My strength lies in seamlessly aligning your business plans and goals with effective implementation. I excel in turning plans into actions! 
            </p>

            <p>
            Passionate about delivering excellent value, I am dedicated to constant self-improvement to serve you better.
            </p>
            </div>

            <Image src="/./DAP2.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
        </div>
      </div>



      <div className="grid grid-cols-2  justify-center md:flex md:flex-col-reverse">
        <div className='flex flex-col justify-center gap-3 pl-[20%] pr-[5%] btm md:px-[5%] md:text-center md:py-20 '>
          <h2 className='bigText text-[40px] md:text-[32px] leading-[63px] md:leading-[40px]'>
            Hiring Mide is one of the best decisions I have ever made in my business!
          </h2>

          <p>
          Working with Mide over the past year has been a dream! Not only has my business been optimized on all fronts, the standard and quality of my client delivery has skyrocketed since she joined the team. Mide is timely, organized, super Tech-savvy, and has added so much structure to our operations and marketing.
          </p>

          <p className='text-[1.2em] uppercase'>
          Simi Awokoya
          </p>
        </div>

        <img src="./sa.png" alt="" />
      </div>

      <div className="bg-white my-yPadding px-xPadding md:px-[5%]">
        <TwoWay>

        <img src="./fun.png" alt="" />

            <div className='flex flex-col gap-5 md:text-center'>
                <h2 className="bigText text-[48px] md:text-[38px]">
                A few fun facts
                </h2>

                <p className='uppercase font-semibold'>I love to wonder about GoD </p>
                <p>
                    I love to wonder about God…. I just sit and start to wonder about Him, who He is. How He is who He is….What makes Him who He is….and How He is able to love a person like me despite who He is
                </p>

                <p className='uppercase font-semibold'>I LOVE MY YOGA, PILATE AND BARRE MOMENTS! </p>
                <p>
                As much as my body hurts almost every day 😂 I lovvveeee my Yoga, Pilates, and Barre moments! They get me out of my head to focus on me at the time which is more about the me focused time I get on weekdays 
                </p>

                <p className='uppercase font-semibold'>MY SPACE IS MY COMFORT ZONE </p>
                <p>
                My space is my comfort zone, I prefer to snuggle up on my couch with my cute comfort blanket and bing on an amazing crime, medical or mystery series but if you can succeed in getting me out, the outside me is real fun (I promise)
                </p>

                <p className='uppercase font-semibold'>I just don’t like plantain </p>
                <p>
                I honestly get what the fuss is about plantain but I just don’t like plantain, I’m guessing maybe it’s because I ate it a lot at some point so now I’m just like nahhh…..I’ll pass
                </p>
            </div>
        </TwoWay>
      </div>

      <div className='relative my-32 md:my-16 md:fs md:static fs'>
        <img src="./mide-footer.png" alt="" className='md:hidden' />

        <div className="content absolute md:static bottom-28 left-[10%] text-white w-2/5 flex flex-col gap-[40px] md:gap-[20px]">
          <h2 className="text-[60px] bigText leading-[68px] md:leading-[40px] md:text-[40px]">
          Where are you at in the process?
          </h2>

          <div className="flex gap-6 md:justify-center md:flex-col">
             <Link href="/contact-us">
             <div className='px-6 py-3 gap-3 bg-white md:w-2/3 md:m-auto border-2 bz border-white text-black flex items-center justify-center hover-black'>
                I'M READY <RiArrowRightLine />
            </div>
             </Link>

            <Link href={"/services"}>
            <div className='flex gap-3 items-center md:w-2/3 md:m-auto border-2 bz border-white py-3 px-6 w-fit hover justify-center'>
                VIEW PACKAGES  <RiArrowRightLine />
            </div>
            </Link>
          </div>

         
        </div>
      </div>

        <Footer />
    </>
  )
}

export default page