
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Tools from '../components/Tools'
import TwoWay from '../components/TwoWay'
import FitImage from '../components/FitImage'
import FunFacts from '../components/FunFacts'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine } from "react-icons/ri"
import Footer from '../components/Footer'
import { Reveal, Stagger, StaggerItem, DrawLine, ScrollWords, CloseGap, ImageReveal } from '../components/Reveal'

export const metadata = {
  title: "The Mide Lawal & Co. · Strategy & Operations Advisory",
  description: "We build the systems, processes and structure behind expert-led brands, so your business runs without you in everything.",
}

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

const pillars = [
  { title: "Clarity", text: "Everyone knows what happens next, who owns it and where to find it." },
  { title: "Consistency", text: "Every client gets the same polished experience, whether it’s their first week or their fiftieth." },
  { title: "Calm", text: "Fewer fires, fewer late nights, and a business that keeps moving when you step away." },
]

export default function Home() {
  return (
    <>
      <NavBar active={0} />
      <ImageReveal>
        <Hero />
      </ImageReveal>

      <div className="bg-primary2 mt-[64px] md:mt-[30px] py-[72px] md:py-[60px] px-xPadding md:text-center">
      <TwoWay fit>
        <FitImage src="/./4.jpg" imgClassName="object-top" />

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

          <p>
            Behind every business that feels effortless to its clients is a backend that was built on purpose. That’s the part we build: the processes, people and rhythms that let your business deliver at the level it promises, every single time.
          </p>

          <p>
            Most founders don’t need more hustle, more tools or another hire. They need someone to step back, see the whole picture and build the structure that ties it all together. That’s where we come in: part strategist, part architect, and the steady hand in the room.
          </p>

          <ul className='grid grid-cols-3 gap-6 md:grid-cols-1 md:gap-4 my-2'>
            {pillars.map((p) => (
              <li key={p.title} className='border-t border-black/20 pt-4 flex flex-col gap-1'>
                <span className='bigText text-[24px] md:text-[22px]'>{p.title}</span>
                <p className='text-[15px]'>{p.text}</p>
              </li>
            ))}
          </ul>

          <p>
            Whether you’re preparing for your next season of growth or recovering from the last one, the structure you build now decides how far your business can go.
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

          <p className='bg-black text-white text-[14px] uppercase tracking-wide leading-[24px] px-5 py-3 w-fit self-start md:self-center'>
            35+ founders served · 7+ years building operations · US, UK, Canada, Nigeria
          </p>
        </Reveal>
      </TwoWay>
      </div>

      <div className="bg-primary2 px-xPadding py-[72px] md:py-[70px] flex flex-col items-center text-center">
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

      <div className='bg-[#F8F6F4] px-xPadding py-[72px] md:py-[60px] flex flex-col items-center text-center gap-12 md:gap-8'>
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

      <div className='btm px-xPadding py-[72px] md:py-[60px] flex flex-col items-center text-center gap-14 md:gap-10'>
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

      {/* Founder (migrated from the old About page: "How it all began" + "This is me in a nutshell") */}
      <div id="founder" className="my-yPadding px-xPadding md:px-[5%] scroll-mt-6">
      <TwoWay fit>
        <FitImage src="/./8.jpg" imgClassName="object-top" />

        <Reveal delay={0.2} className='flex flex-col gap-[16px] md:text-center max-w-[560px] md:max-w-none'>
          <p className='uppercase tracking-[0.2em] text-[14px]'>
            Meet the founder
          </p>

          <h2 className='bigText text-[59px] md:text-[38px] leading-[70px] md:leading-[46px] tracking-[-0.5%]'>
            They bring the vision. We build the structure.
          </h2>

          <p>
            I’m Mide Lawal, founder of The Mide Lawal & Co. I’ve loved order for as long as I can remember. Long before I had a name for it, I was the one organising the room, the plan and the people.
          </p>

          <p>
            In 2020 I started supporting entrepreneurs behind the scenes, first as an assistant, then as a business and operations manager. Over seven years I’ve worked with 35+ businesses across the US, UK, Canada and Nigeria: coaches, consultants, speakers, agencies, fitness brands, a luxury hair brand and more.
          </p>

          <p>
            That range taught me something simple. Every growing business breaks in the same places: ideas outrun structure, the founder becomes the operating system, and the client experience starts to lag behind the brand. The Mide Lawal & Co. exists to fix that.
          </p>

          <p className='bigText text-[24px] md:text-[21px] leading-[34px] md:leading-[30px] border-l-2 border-black pl-5 mt-2 md:border-l-0 md:pl-0 md:border-t md:pt-4'>
            My clients aren’t simply building businesses; they’re building legacies.
          </p>
        </Reveal>
      </TwoWay>
      </div>

      <FunFacts />

      <div className='relative md:fs md:static fs'>
        <ImageReveal className='md:hidden'>
          <Image src="/./mide-footer.jpg" alt="" className='w-full h-[500px] object-cover object-top' width={1000} height={1000} unoptimized/>
        </ImageReveal>

        <Reveal delay={0.3} className="content absolute md:static bottom-28 left-[10%] text-white w-3/5 flex gap-[40px] flex-col md:gap-[32px]">
          <div className='flex flex-col gap-3'>
          <h2 className="text-[60px] md:text-[40px] bigText leading-[68px] md:leading-[55px]">
            Your vision deserves structure.
          </h2>

          <p className='w-3/5'>
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
