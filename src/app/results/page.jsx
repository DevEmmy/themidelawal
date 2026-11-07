import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import TwoWay from '../../components/TwoWay'
import FitImage from '../../components/FitImage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { Reveal, Stagger, StaggerItem, ImageReveal } from '../../components/Reveal'
import bgCe from '../../../public/bg-ce.jpg'
import mmCe from '../../../public/morenike.jpg'
import saCe from '../../../public/sa-ce.webp'
import kw from '../../../public/kw.jpg'
import shakira from '../../../public/shakira.jpg'
import ashleigh from '../../../public/ashleigh.jpg'
import ex from '../../../public/ex.jpg'

export const metadata = {
  title: "Client Results · The Mide Lawal & Co.",
  description: "Case studies and client words: 60% less admin, hours saved on onboarding, and teams with real ownership.",
}

const BOOK_CALL = "https://calendar.app.google/9eJEpYdDz9APFzFh7"

const caseStudies = [
  {
    client: "Britney Jeanine",
    role: "The Pivot Pusher",
    headline: "Relaunching a coaching business on a backend built to deliver.",
    diagnosis: "A relaunch with two new offers, running on outdated, manual delivery and onboarding.",
    design: "An offer-led Notion workspace with client portals, and automated onboarding across Wix, Notion, Google Drive and templated emails.",
    outcome: "Onboarding that saves her hours every week, and the freedom to lead as the visionary, not the admin.",
    image: bgCe,
  },
  {
    client: "Shakira Hemphill",
    role: "Speaker, Life Coach & HR Strategist",
    headline: "Turning fast growth into a business that runs on rhythm.",
    diagnosis: "Fast expansion with no full team and a backend that lacked cohesion.",
    design: "A rebuilt Asana backend, a Google Drive headquarters, a weekly operating rhythm and structure for her HR client projects.",
    outcome: "60% less daily admin and 20+ high-impact tasks completed every week.",
    image: shakira,
  },
  {
    client: "Ashleigh Chanél",
    role: "CEO, Make Your Mark Consulting",
    headline: "Owning the full backend, so the founder didn’t have to.",
    diagnosis: "A thriving business with disorganised or non-existent systems behind it.",
    design: "A custom ClickUp workspace, personalised SOPs and a “How to Work with Ashleigh” guide.",
    outcome: "A contractor team with real task ownership, delivered hands-off with minimal revisions.",
    image: ashleigh,
  },
]

const quotes = [
  {
    text: "Working with Mide over the past year has been a dream! Not only has my business been optimized on all fronts, the standard and quality of my client delivery has skyrocketed since she joined the team. Hiring Mide is one of the best decisions I have ever made.",
    name: "Simi Awokoya",
    role: "Career Coach for Black Women",
    image: saCe,
  },
  {
    text: "If you’ve ever prayed for someone who could carry both the vision and the weight, Mide is that answer.",
    name: "Shakira Hemphill",
    role: "Speaker, Life Coach & HR Strategist",
    image: shakira,
  },
  {
    text: "Mide is punctual, detail-oriented, and always shows up to honor her word. I have never worried about clients and work not getting the attention needed.",
    name: "Britney Jeanine",
    role: "The Pivot Pusher",
    image: bgCe,
  },
  {
    text: "Mide has simplified my life in more ways than I can articulate. She does not only give you value for your money, but she also goes above and beyond her job description.",
    name: "Morenike Molehin",
    role: "Founder, Grow With Renny",
    image: mmCe,
  },
  {
    text: "She specializes in helping high-level entrepreneurs get their backend operations all the way together. Mide’s your girl.",
    name: "Ashleigh Chanél",
    role: "CEO, Make Your Mark Consulting",
    image: ashleigh,
  },
  {
    text: "She is professional, thorough, knowledgeable, and reliable. She always has a positive attitude and completes tasks in a timely manner.",
    name: "Kamilah Williams",
    role: "Fitness Instructor",
    image: kw,
  },
]

const page = () => {
  return (
    <div className='bg-[#F8F6F4]'>
        <NavBar active={2} />

        {/* Hero */}
        <div className='bg-[#EFEEEA] px-xPadding py-[64px] md:py-[50px] text-center flex flex-col items-center gap-5'>
            <Reveal as="p" delay={0.1} y={14} className='uppercase tracking-[0.2em] text-[14px]'>
                Client Results
            </Reveal>

            <Reveal as="h1" delay={0.3} y={36} duration={1.3} className='bigText text-[64px] md:text-[36px] leading-[78px] md:leading-[46px] max-w-[900px]'>
                What changes when the structure is right.
            </Reveal>

            <Reveal as="p" delay={0.6} className='max-w-[620px] text-[18px] md:text-[16px]'>
                Real founders, real backends, and what happened once the structure was in place.
            </Reveal>
        </div>

        {/* Case studies */}
        <div className='px-xPadding py-[56px] md:py-[40px] flex flex-col gap-[64px] md:gap-[60px]'>
            {caseStudies.map((c, i) => (
                <TwoWay key={i} fit>
                    <FitImage src={c.image} alt={c.client} placeholder="blur" imgClassName="object-top" className={i % 2 === 1 ? 'order-2 md:order-1' : ''} sizes="(max-width: 800px) 100vw, 45vw" />

                    <Reveal delay={0.15} className={`flex flex-col gap-6 md:text-center ${i % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                        <div className='flex flex-col gap-1'>
                            <p className='uppercase tracking-[0.15em] text-[13px] font-semibold'>{c.client} · {c.role}</p>
                            <h2 className='bigText text-[40px] md:text-[30px] leading-[52px] md:leading-[38px]'>{c.headline}</h2>
                        </div>

                        <Stagger className='flex flex-col gap-5' gap={0.2} delay={0.2}>
                            {[
                                ['Diagnosis', c.diagnosis],
                                ['Design', c.design],
                                ['Outcome', c.outcome],
                            ].map(([label, text]) => (
                                <StaggerItem key={label} y={18} className='border-t border-black/20 pt-4'>
                                    <p className='uppercase tracking-[0.15em] text-[13px] font-semibold mb-1'>{label}</p>
                                    <p>{text}</p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </Reveal>
                </TwoWay>
            ))}
        </div>

        {/* Client words */}
        <div className='bg-primary2 px-xPadding py-yPadding md:py-[40px] flex flex-col gap-12 md:gap-8'>
            <Reveal as="h2" className='bigText text-[50px] md:text-[36px] text-center'>
                In their words.
            </Reveal>

            <Stagger className='grid grid-cols-2 md:grid-cols-1 gap-8' gap={0.15}>
                {quotes.map((q, i) => (
                    <StaggerItem key={i} className='bg-white p-10 md:p-6 flex flex-col gap-6 justify-between'>
                        <p className='text-[18px] md:text-[16px] italic'>“{q.text}”</p>

                        <div className='flex items-center gap-4'>
                            <Image src={q.image} alt="" className='w-[64px] h-[64px] rounded-full object-cover object-top flex-shrink-0' sizes="64px" />
                            <div>
                                <p className='uppercase font-semibold text-[15px] leading-[22px]'>{q.name}</p>
                                <p className='text-[14px] leading-[22px]'>{q.role}</p>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </Stagger>
        </div>

        {/* Final call to action */}
        <div className='relative md:fs md:static fs'>
        <ImageReveal className='md:hidden'>
            <Image src={ex} alt="" className='w-full h-[500px] object-cover object-top' placeholder="blur" sizes="100vw"/>
        </ImageReveal>

        <Reveal delay={0.3} className="content absolute md:static bottom-28 left-xPadding text-white w-3/5 flex flex-col gap-[40px] md:gap-[32px]">
        <h2 className="text-[59px] md:text-[40px] bigText leading-[68px] md:leading-[40px]">
          Ready for results like these?
          </h2>

             <Link href={BOOK_CALL} target='_blank'>
             <div className='px-6 py-3 gap-3 bg-transparent bz hover border-2 md:m-auto border-white w-fit flex items-center '>
                Book a fit call <RiArrowRightLine />
            </div>
             </Link>
        </Reveal>
      </div>


        <Footer />
    </div>
  )
}

export default page
