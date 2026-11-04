
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TwoWay from '../../components/TwoWay'
import { Reveal, Stagger, StaggerItem, ImageReveal } from '../../components/Reveal'
import about from '../../../public/about.jpg'
import dap2 from '../../../public/DAP2.jpg'
import mideAbout1 from '../../../public/mide-about1.jpg'
import sa from '../../../public/sa.webp'
import fun from '../../../public/fun.webp'
import mideFooter from '../../../public/mide-footer.jpg'
import heroImage from "../../../public/about-hero.png"

export const metadata = {
  title: "About Mide Lawal · The Mide Lawal & Co.",
  description: "Meet Mide Lawal, the strategist behind the operations of 35+ founders across the US, UK, Canada and Nigeria.",
}

const beliefs = [
    { title: "Structure is what gives freedom.", text: "Systems are how you get your time and headspace back." },
    { title: "The experience must match the promise.", text: "What clients live through after they pay should match what they saw before." },
    { title: "Calm over chaos.", text: "A steady hand in the room changes everything." },
    { title: "Built to last.", text: "A system is only good if it keeps working after we’ve handed it over." },
]

const funFacts = [
    "I’m always curious about God, and that curiosity shapes how I live and work.",
    "You’ll find me at yoga, Pilates or barre.",
    "My favourite evening is my couch and a good mystery or crime show.",
    "Unpopular opinion: I don’t like plantain.",
    "Interior design and organising spaces are how I relax.",
]

const page = () => {
  return (
    <>
        <NavBar active={1}/>
        
        <section className='bg-primary2 text-center flex flex-col gap-5 items-center px-[10%] md:px-[5%] py-[100px] md:py-[50px]'>
            <Reveal as="h1" delay={0.2} y={36} duration={1.3} className='bigText uppercase tracking-[0.12em] text-[56px] md:text-[32px] leading-[68px] md:leading-[42px]'>
                About the Founder
            </Reveal>

            <Reveal as="p" delay={0.55} className='max-w-[620px] text-[20px] md:text-[17px] leading-[34px] md:leading-[28px]'>
                Hi, I’m Mide Lawal, founder of The Mide Lawal & Co. I’m so glad you’re here.
            </Reveal>
        </section>

        <ImageReveal>
        <div className="">
            {/* <Image src={about} alt="" className='w-full h-auto' priority placeholder="blur" sizes="33vw"/>
            <Image src={about} alt="" className='w-full h-auto' priority placeholder="blur" sizes="33vw"/>
            <Image src={about} alt="" className='w-full h-auto' priority placeholder="blur" sizes="33vw"/> */}
            <Image src={heroImage}  alt="" className='!w-[100vw] h-auto' priority width={100} height={100} sizes="100vw"/>
        </div>
        </ImageReveal>

        <section className='text-center flex flex-col gap-5 justify-center items-center my-yPadding md:my-[40px] px-[10%] md:px-[4%]'>
            <Reveal as="h2" className="bigText text-[59px] md:text-[36px]">
                This is me in a nutshell.
            </Reveal>

            <Stagger className='w-[75%] md:w-full flex flex-col gap-4' gap={0.25} delay={0.15}>
                <StaggerItem as="p">
                    I’m a business strategist and operations specialist. I partner with founders and executives to build the systems, processes and operating structure that turn big visions into sustainable businesses.
                </StaggerItem>

                <StaggerItem as="p">
                    I’m known for bringing calm to complexity, and for building systems that keep serving a business long after they’re handed over. My clients aren’t simply building businesses; they’re building legacies.
                </StaggerItem>
            </Stagger>
        </section>

    <div className="bg-primary2 py-yPadding md:py-[40px] md:px-[5%] px-xPadding">
        <div className='max-w-[1280px] mx-auto'>
        <TwoWay>
            <ImageReveal className='w-full max-w-[480px] ml-auto md:mx-auto'>
                <Image src={mideAbout1} alt="" placeholder="blur" sizes="(max-width: 800px) 100vw, 480px"/>
            </ImageReveal>

            <Reveal delay={0.2} className='flex flex-col gap-5 md:text-center'>
            <h2 className='bigText text-[48px] md:text-[38px]'>
                How it all began.
            </h2>

            <p>
                I’ve loved order for as long as I can remember. Long before I had a name for it, I was the one organising the room, the plan and the people.
            </p>

            <p>
                In 2020 I started supporting entrepreneurs behind the scenes, first as an assistant, then as a business and operations manager. Over seven years I’ve worked with 35+ businesses across the US, UK, Canada and Nigeria: coaches, consultants, speakers, agencies, fitness brands, coffee producers and retailers, a luxury hair brand, and faith-led and spiritually led education businesses.
            </p>

            <p>
                That range taught me something simple. Every growing business breaks in the same places: ideas outrun structure, the founder becomes the operating system, and the client experience starts to lag behind the brand.
            </p>

            <p>
                The Mide Lawal & Co. exists to fix that. Today we work as a strategy and operations advisory, helping founders move from vision to structure to execution.
            </p>
            </Reveal>
        </TwoWay>
        </div>
      </div>


      <div className="bg-[white] py-yPadding px-xPadding md:py-[40px] md:px-[5%]">
        <div className='grid grid-cols-2 gap-[104px] md:gap-[40px] md:grid-cols-none md:flex md:flex-col-reverse'>

            <div className='flex flex-col gap-8 md:text-center'>
            <Reveal as="h2" className='bigText text-[48px] md:text-[34px] leading-[62px] md:leading-[42px]'>
                Operations should feel like luxury.
            </Reveal>

            <Stagger as="ul" className='flex flex-col gap-6' gap={0.2} delay={0.1}>
                {beliefs.map((b, i) => (
                    <StaggerItem as="li" key={i} className='border-t border-black/20 pt-5 flex flex-col gap-1'>
                        <span className='bigText text-[24px] md:text-[22px]'>{b.title}</span>
                        <p>{b.text}</p>
                    </StaggerItem>
                ))}
            </Stagger>
            </div>

            <ImageReveal>
                <Image src={dap2} alt="" className='w-full h-auto' placeholder="blur" sizes="(max-width: 800px) 100vw, 45vw"/>
            </ImageReveal>
        </div>
      </div>



      <div className="grid grid-cols-2  justify-center md:flex md:flex-col-reverse">
        <Reveal className='flex flex-col justify-center gap-5 pl-[20%] pr-[5%] btm md:px-[5%] md:text-center md:py-20 '>
          <h2 className='bigText text-[44px] md:text-[32px] leading-[60px] md:leading-[40px]'>
            “Hiring Mide is one of the best decisions I have ever made.”
          </h2>

          <p className='text-[1.2em] uppercase'>
            Simi Awokoya, Career Coach for Black Women
          </p>
        </Reveal>

        <ImageReveal className='h-full'>
          <Image src={sa} alt="" className='w-full h-full object-cover object-top' sizes="(max-width: 800px) 100vw, 50vw"/>
        </ImageReveal>
      </div>

      <div className="bg-white my-yPadding px-xPadding md:px-[5%] max-w-[1280px] mx-auto">
        <TwoWay>

        <ImageReveal className='w-full max-w-[496px] ml-auto md:mx-auto'>
            <Image src={fun} alt="" className='w-full h-auto' sizes="(max-width: 800px) 100vw, 496px"/>
        </ImageReveal>

            <div className='flex flex-col gap-6 md:text-center'>
                <Reveal as="h2" className="bigText text-[48px] md:text-[38px]">
                    A few fun facts.
                </Reveal>

                <Stagger as="ul" className='flex flex-col gap-4' gap={0.15} delay={0.1}>
                    {funFacts.map((f, i) => (
                        <StaggerItem as="li" key={i} y={20} className='border-t border-black/20 pt-4'>
                            <p>{f}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </TwoWay>
      </div>

      <div className='relative my-32 md:my-16 md:fs md:static fs'>
        <ImageReveal className='md:hidden'>
          <Image src={mideFooter} alt="" placeholder="blur" className='w-full h-auto max-h-[800px] object-cover' sizes="100vw"/>
        </ImageReveal>

        <Reveal delay={0.3} className="content absolute md:static bottom-28 left-[10%] text-white w-2/5 flex flex-col gap-[40px] md:gap-[20px]">
          <div className='flex flex-col gap-3'>
          <h2 className="text-[60px] bigText leading-[68px] md:leading-[40px] md:text-[40px]">
          Where are you in the process?
          </h2>

          <p>
            Whether you’re still figuring out what’s wrong or ready for a full build, the fit call is the place to start.
          </p>
          </div>

          <div className="flex gap-6 md:justify-center md:flex-col">
             <Link href="https://calendar.app.google/9eJEpYdDz9APFzFh7" target='_blank'>
             <div className='px-6 py-3 gap-3 bg-white md:w-2/3 md:m-auto border-2 bz border-white text-black flex items-center justify-center hover-black'>
                Book a fit call <RiArrowRightLine />
            </div>
             </Link>

            <Link href={"/work-with-us"}>
            <div className='flex gap-3 items-center md:w-2/3 md:m-auto border-2 bz border-white py-3 px-6 w-fit hover justify-center'>
                See ways to work together <RiArrowRightLine />
            </div>
            </Link>
          </div>

         
        </Reveal>
      </div>

        <Footer />
    </>
  )
}

export default page