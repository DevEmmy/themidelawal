import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const page = () => {
  return (
    <div className='bg-[#F8F6F4]'>
        <NavBar active={3} />

        <div>
            <h2 className='bg-[#EFEEEA] bigText text-[59px] text-center py-[32px] md:text-[38px] md:py-[16px]'>Client Experience Review</h2>

            <p className='text-center w-1/2 md:w-full md:px-xPadding m-auto py-8 md:py-[16px]'>
            Some kind words from clients who have experienced and enjoy ease working with me. I hope to add your testimonial  to this page in the future!
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-none md:flex md:flex-col gap-[104px] md:gap-[30px] md:my-[0px] justify-center px-xPadding my-[60px]">
            <img src="./bg-ce.png" alt="" />

            <div className='flex flex-col gap-5 text-center'>
                <p>
                Mide came into my life [and business] at the perfect time. I was in the midst of relaunching my coaching business and had several new offers that needed administrative support. And while I booked a "virtual assistant", I received so much more. From my emails, calendar management, social media, and the restructuring/organization of the backend of my business, Mide is truly heaven-sent. So much so that I envision her being around for as long as she will allow my family to have her. Overall, Mide is punctual, detail-oriented, and always shows up to honor her word. I have never worried about clients [and work] not getting the attention needed... and cannot imagine my business(es) without her. Mide is INCREDIBLE to work with, PATIENT, KIND, and will be just the right hand you need to take your business to the next level
                </p>

                <div>
                    <p className=" text-[24px] md:text-[18px]">BRITNEY JEANINE</p>
                    <p>
                    PIVOT PUSHER, RETIRED BIZ COACH
                    </p>
                </div>
            </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-none gap-[104px] md:gap-[40px] md:flex md:flex-col-reverse justify-center px-xPadding my-yPadding">
            <div className='flex flex-col gap-5 md:text-center'>
                <p>
                Working with Mide over the last couple of months and years has been extremely beautiful. Mide has simplified my life in many ways than I can articulate. She does not only give you value for your money, but she also goes above and beyond her job description. Her attention to details is top notch. You can tell she is extremely passionate about adding value to the life of her client. It comes naturally to her, and you can tell the level of skills she puts into her craft. I have never found someone with such a great work ethic. Mide doesn’t need to be micromanaged. She is extremely diligent and thorough. She also needs little or no supervision. You just tell her what you want, and she thinks way beyond what you might have even thought. Fleshing out your ideas and finding efficient ways to get them done. I generally believe there is nothing Mide cannot figure out or execute.
                </p>

                <p>
                The way she executes tasks is admirable. I also love her communication skills. She is very intuitive and knows when and how to get me to do things, which is very key especially when working with busy professionals like me.  The beautiful thing about how structured Mide is no matter how many clients she takes on, she makes you feel like you are her only client. I do not and have never felt any form of distractions, She is also very creative, and her time management skills are impeccable.  I can trust Mide to take decisions for me because she has mastered the art of effective decision making and I can rely on her to make sound judgement over something. In general, she makes my life easier, and I am so grateful for the role she plays in my life. I highly recommend her if you want to be at your best as a Professional.
                </p>

                <div>
                    <p className=" text-[24px] uppercase md:text-[18px]">Morenike Molehin</p>
                    <p className='uppercase'>
                    Interior Designer + Lifestyle Content Creator
                    </p>
                </div>
            </div>

            <img src="./mm-ce.png" alt="" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-none gap-[104px] md:gap-[40px] md:flex md:flex-col justify-center px-xPadding my-yPadding md:my-[20px]">
            <img src="./sa-ce.png" alt="" />

            <div className='flex flex-col gap-5 md:text-center'>
                <p>
                Working with Mide over the past year has been a dream! Not only has my business been optimized on all fronts, the standard and quality of my client delivery has skyrocketed since she joined the team. Mide is timely, organized, super Tech-savvy, and has added so much structure to our operations and marketing. Hiring Mide is one of the best decisions I have ever made in my business.
                </p>

                <div>
                <p className="text-[24px] md:text-[18px]">SIMI AWOKOYA</p>
                <p >CAREER COACH FOR BLACK WOMEN</p>
                </div>
            </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-none md:flex md:flex-col-reverse gap-[104px] md:gap-[40px] justify-center px-xPadding my-yPadding">
            <div className='flex flex-col gap-5 md:text-center'>
                <p>
                My experience with The Mide Lawal & Co., has been nothing short of amazing! She is professional, thorough, knowledgeable, and reliable. Lami always has a positive attitude and completes tasks in a timely manner. In fact, she works FAST and sometimes I have to work harder to keep up! Most importantly, I really do believe as my business grows, Lami will be able to keep up with the demand and grow right along with me! Thanks for all you do!.
                </p>

                <div>
                    <p className=" text-[24px] uppercase md:text-[18px]">KAMILAH WILLIAMS</p>
                    <p className='uppercase text-[18px] md:text-[16px]'>
                    FITNESS INSTRUCTOR
                    </p>
                </div>
            </div>

            <img src="./kw.png" alt="" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-none gap-[104px] md:gap-[40px] md:flex md:flex-col justify-center px-xPadding my-yPadding md:my-[20px]">
            <Image width={1000} height={1000} unoptimized className='w-full h-full object-cover' src="/./shakira.png" alt="Shakira Hemphill" />

            <div className='flex flex-col gap-5 md:text-center'>
                <p>
                Working with Mide has been one of the greatest blessings in this season of business. She didn’t just come in to support—she came in and shifted the atmosphere. The systems. The structure. The strategy.
                </p>
                <p>
                When God answered my prayers and sent help to streamline, strategize and scale—He sent Lami. From the moment she joined my team, things didn’t just get done—they got aligned. She brought order where there was overwhelm, clarity where there was chaos, and strategy where there was strain.
                </p>
                <p>
                Mide is truly the Olivia Pope of my business. Sharp. Spirit-led. Solution-focused. She doesn’t just check boxes—she builds legacy. Her partnership has given me the freedom to dream bigger, lead stronger, and rest deeper knowing that the behind-the-scenes is being held with care, excellence, and intention.
                </p>
                <p>
                What sets her apart is not just her skill—but her heart. She serves from a place of mission, not just management. She thinks ahead, moves with discernment, and makes room for me to lead without burning out.
                </p>
                <p>
                If you’ve ever prayed for someone who could carry both the vision and the weight—Mide is that answer. My business is better because of her. And so am I.
                </p>
                <div>
                    <p className=" text-[24px] uppercase md:text-[18px]">Shakira Hemphill</p>
                    <p className="uppercase md:text-[16px]">Speaker, Life Coach & HR Strategist</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-none gap-[104px] md:gap-[40px] md:flex md:flex-col justify-center px-xPadding my-yPadding md:my-[20px]">
            <Image src="/./ashleigh.png" width={1000} height={1000} unoptimized alt="Ashleigh Chanél" />

            <div className='flex flex-col gap-5 md:text-center'>
                <p>Mide, MY Operations & Systems Specialist.</p>
                <p>When I say she is the Ops person of my dreeeeeaaammzzz—I mean it!</p>
                <p>My SOPs? Phenomenal. So detailed and thoughtful.</p>
                <p>She even created a “How to Work with Ashleigh” document that makes me laugh every time because it’s so true.</p>
                <p>She specializes in helping high-level entrepreneurs get their backend operations all the way together. Whether you’re drowning in disorganized systems (or no systems at all like I was—lol) or just need a fresh pair of eyes to audit and refine what’s already there—Mide’s your girl.</p>
                <p>She’s helped me with team ops, systems, and SOPs.</p>
                <p>Onboarding ops, systems, and SOPs.</p>
                <p>ClickUp setup. ALL the things.</p>
                <p>And why I love her so much? Because she OWNS the whole thing.</p>
                <p>I told her what I wanted and that I didn’t want to be involved until the very end to review it—and she delivered.</p>
                <p>I almost never need to make revisions. She takes the time to understand me and how I work—and I like someone who can critically think.</p>
                <p>She considers what will work best for me and isn’t afraid to tell me when I need to reel it in or when something’s unnecessary.</p>
                <p>Mide brings the perfect balance of clarity, calm, and strategic execution.</p>
                <p>She doesn’t just set up systems—she steps into your business with intention, sees what you can’t always articulate, and turns it into a high-functioning backend flow.</p>
                <p>She’s thoughtful, professional, and deeply committed to excellence (another one of my core values), and she makes the process feel supportive instead of stressful.</p>
                <p>Because when I hire someone, I don’t want to be involved.</p>
                <p>No fluff. No chaos. And NO LOLLYGAGGING.</p>
                <p>If you’ve ever wished someone could just get it and help you build a business that runs smoothly behind the scenes—Mide is exactly who you’ve been looking for.</p>
                <p>So, if you’ve been meaning to fix the backend mess but keep pushing it off, this is your sign. Reach out to Mide.</p>
                <div>
                    <p className=" text-[24px] uppercase md:text-[18px]">Ashleigh Chanél</p>
                    <p className="uppercase md:text-[16px]">Marketing & Ads Specialist</p>
                </div>
            </div>
        </div>

        <div className='relative md:fs md:static fs'>
        <Image src="/./ex.png" alt="" className='md:hidden w-full h-[500px] object-cover object-top' width={1000} height={1000} unoptimized/>

        <div className="content absolute md:static bottom-28 left-xPadding text-white w-3/5 flex flex-col gap-[40px] md:gap-[32px]">
        <h2 className="text-[59px] md:text-[40px] bigText leading-[68px] md:leading-[40px]">
          Ready to experience the reality of doing business with ease? 
          </h2>

             <Link href="/contact-us">
             <div className='px-6 py-3 gap-3 bg-transparent bz hover border-2 md:m-auto border-white w-fit flex items-center '>
                WORK WITH ME <RiArrowRightLine />
            </div>
             </Link>
         
        </div>
      </div>


        <Footer />
    </div>
  )
}

export default page