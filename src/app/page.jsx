
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Tools from '../components/Tools'
import TwoWay from '../components/TwoWay'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine } from "react-icons/ri"
import Footer from '../components/Footer'
import { Reveal, Stagger, StaggerItem, DrawLine, ScrollWords, CloseGap, ImageReveal } from '../components/Reveal'

const stats = [
  { figure: "60%", text: "less daily admin for Shakira Hemphill" },
  { figure: "20+", text: "high-impact tasks completed every week" },
  { figure: "Hours", text: "saved on every client onboarding for Britney Jeanine" },
]

const offers = [
  { title: "Systems Audit & Action Plan", text: "Find out exactly what’s breaking and what to fix first." },
  { title: "Structure & Systems Build", text: "Your backend designed, installed and rolled out in 90 days." },
  { title: "Advisory & Operations Partner", text: "Senior operations leadership, month after month." },
]

export default function Home() {
  return (
    <>
      <NavBar active={0} />
      <ImageReveal>
        <Hero />
      </ImageReveal>

      <div className="bg-primary2 mt-[120px] md:mt-[30px] py-[120px] md:py-[60px] px-xPadding md:text-center">
      <TwoWay>
        <ImageReveal>
          <Image src="/./DAP1.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
        </ImageReveal>

        <Reveal delay={0.2} className='flex flex-col gap-5'>
          <p className='uppercase tracking-[0.2em] text-[14px]'>
            Strategy · Operations · Systems
          </p>

          <h2 className='bigText text-[48px] md:text-[32px] font-regular md:text-center bts leading-[62.4px] md:leading-[37px]'>
            Structure is what gives freedom.
          </h2>

          <p>
            The Mide Lawal & Co. is a strategy and operations advisory for expert-led brands that have outgrown their backend. We turn your vision into structure, and your structure into execution.
          </p>

          <div className='flex gap-4 md:flex-col md:items-center'>
            <Link href={"https://calendar.app.google/9eJEpYdDz9APFzFh7"} target='_blank'>
              <button className='flex border-2 border-black gap-2 items-center p-3 w-fit md:m-auto uppercase bz hover-black'>
                Book a fit call <RiArrowRightLine />
              </button>
            </Link>

            <Link href={"/work-with-us"}>
              <button className='flex border-2 border-transparent gap-2 items-center p-3 w-fit md:m-auto uppercase bz underline underline-offset-4'>
                See how we work
              </button>
            </Link>
          </div>

          <p className='text-[14px] uppercase tracking-wide'>
            35+ founders served · 7+ years building operations · US, UK, Canada, Nigeria
          </p>
        </Reveal>
      </TwoWay>
      </div>

      <div className="bg-primary2 px-xPadding py-[140px] md:py-[70px] flex flex-col items-center text-center">
        <Reveal as="h2" className='bigText text-[64px] md:text-[34px] leading-[78px] md:leading-[44px] max-w-[900px]'>
          Your marketing made a promise. Your operations have to keep it.
        </Reveal>

        <div className='max-w-[760px] flex flex-col gap-6 mt-[70px] md:mt-[40px]'>
          <ScrollWords
            className='text-[24px] md:text-[18px] leading-[40px] md:leading-[30px]'
            text="Most founders invest heavily in the front of the business: branding, content, visibility and launches. Far fewer invest in what happens after someone pays."
          />
          <ScrollWords
            className='text-[24px] md:text-[18px] leading-[40px] md:leading-[30px]'
            text="The result is a gap. A brand that looks premium online, and a client experience that feels slower, messier and less certain than the one that was promised. That gap costs trust, referrals and your own headspace."
          />
        </div>

        <CloseGap className='mt-[90px] md:mt-[50px] max-w-[760px]' />

        <Reveal as="p" delay={0.6} className='bigText text-[34px] md:text-[22px] leading-[50px] md:leading-[32px] max-w-[760px] mt-[40px] md:mt-[28px]'>
          “We close the gap, so the business people experience matches the one they bought.”
        </Reveal>
      </div>

      <Reveal y={16}>
        <Tools />
      </Reveal>

      <div className='bg-[#F8F6F4] px-xPadding py-[120px] md:py-[60px] flex flex-col items-center text-center gap-12 md:gap-8'>
        <Reveal className='flex flex-col gap-4 items-center'>
          <h2 className='bigText text-[59px] md:text-[40px] leading-[77px] md:leading-[48px]'>One clear path.</h2>
          <p className='max-w-[620px]'>
            Start where you are. Most clients begin with the audit and move into the build.
          </p>
        </Reveal>

        <div className='w-full'>
          <DrawLine className='mb-10 md:hidden' />

          <Stagger className='grid grid-cols-3 md:grid-cols-1 gap-7' gap={0.2}>
            {offers.map((o, i) => (
              <StaggerItem key={i} className='bg-white p-10 md:p-7 flex flex-col gap-5 items-center justify-between text-center'>
                <div className='flex flex-col gap-4 items-center'>
                  <span className='bigText text-[40px] leading-none text-black/25'>0{i + 1}</span>
                  <p className='bigText text-[28px] md:text-[24px] leading-[38px]'>{o.title}</p>
                  <p>{o.text}</p>
                </div>

                <Link href="/work-with-us">
                  <div className='flex items-center gap-2 border-2 border-black bz hover-black p-3 uppercase w-fit'>
                    Learn more <RiArrowRightLine />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <Link href="/work-with-us" className='underline underline-offset-4'>
            Also available: Business Strategy VIP Day and Launch Support →
          </Link>
        </Reveal>
      </div>

      <div className='btm px-xPadding py-[120px] md:py-[60px] flex flex-col items-center text-center gap-14 md:gap-10'>
        <Reveal as="h2" className='bigText text-[59px] md:text-[34px] leading-[77px] md:leading-[44px] max-w-[800px]'>
          What changes when the structure is right.
        </Reveal>

        <Stagger className='grid grid-cols-3 md:grid-cols-1 w-full max-w-[1100px] md:gap-10' gap={0.25}>
          {stats.map((s, i) => (
            <StaggerItem key={i} className={`flex flex-col items-center gap-3 px-8 md:px-0 ${i > 0 ? "border-l border-black/20 md:border-l-0" : ""}`}>
              <span className='bigText text-[84px] md:text-[64px] leading-none'>{s.figure}</span>
              <p className='max-w-[260px]'>{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className='max-w-[760px] flex flex-col gap-4 items-center'>
          <p className='bigText text-[34px] md:text-[22px] leading-[50px] md:leading-[32px]'>
            “Hiring Mide is one of the best decisions I have ever made.”
          </p>
          <p className='uppercase text-[14px] tracking-wide'>Simi Awokoya, Career Coach for Black Women</p>
        </Reveal>

        <Reveal>
          <Link href="/results">
            <div className='flex items-center gap-2 border-2 border-black bz hover-black p-3 uppercase w-fit'>
              See client results <RiArrowRightLine />
            </div>
          </Link>
        </Reveal>
      </div>

      <div className="my-yPadding px-xPadding md:px-[5%]">
      <TwoWay>
        <ImageReveal>
          <Image src="/./mide-long.png" alt="" className='w-full h-[800px] object-cover' width={1000} height={1000} unoptimized/>
        </ImageReveal>

        <Reveal delay={0.2} className='flex flex-col gap-[40px] justify-between md:text-center w-[500px] md:w-full'>


          <div className="flex flex-col gap-[16px]">
          <h2 className='bigText text-[59px] md:text-[38px] tracking-[-0.5%]'>
            They bring the vision. We build the structure.
          </h2>

          <p>
            I’m Mide Lawal, founder of The Mide Lawal & Co. For more than seven years I’ve built the operations behind coaches, consultants, speakers and premium brands. I believe operations should feel like luxury: your backend should be as refined as what your clients see on the front end.
          </p>
          </div>


          <Link href="/about">
          <button className='flex border-2 md:m-auto border-black gap-2 bz items-center p-3 w-fit uppercase hover-black'>
            Get to know Mide <RiArrowRightLine />
          </button>
          </Link>
        </Reveal>
      </TwoWay>
      </div>

      <div className='relative md:fs md:static fs'>
        <ImageReveal className='md:hidden'>
          <Image src="/./mide-footer.png" alt="" className='w-full h-[500px] object-cover object-top' width={1000} height={1000} unoptimized/>
        </ImageReveal>

        <Reveal delay={0.3} className="content absolute md:static bottom-28 left-[10%] text-white w-2/5 flex gap-[40px] flex-col md:gap-[32px]">
          <div className='flex flex-col gap-3'>
          <h2 className="text-[60px] md:text-[40px] bigText leading-[68px] md:leading-[55px]">
            Your vision deserves structure.
          </h2>

          <p>
            Book a 30-minute fit call. We’ll talk about where your business is, where it’s going, and the structure it needs next.
          </p>
          </div>

          <Link href={"https://calendar.app.google/9eJEpYdDz9APFzFh7"} target='_blank'>
          <div className='flex items-center border-2 bz md:m-auto border-white py-3 px-6 gap-3 w-fit hover'>
            Book a fit call <RiArrowRightLine />
          </div>
          </Link>
        </Reveal>
      </div>

      <Footer />
    </>
  )
}
