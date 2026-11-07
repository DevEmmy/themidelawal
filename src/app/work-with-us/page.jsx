import Footer from "../../components/Footer";
import Marque from "../../components/Marque";
import NavBar from "../../components/NavBar";
import TwoWay from "../../components/TwoWay";
import FitImage from "../../components/FitImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Reveal, Stagger, StaggerItem, ImageReveal } from "../../components/Reveal";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import dap3 from "../../../public/DAP3.jpg";
import mm from "../../../public/morenike.jpg";
import ex from "../../../public/ex.jpg";
import p1 from "../../../public/p1.jpg";
import p2 from "../../../public/p2.jpg";
import p4 from "../../../public/p4.jpg";

export const metadata = {
  title: "Work With Us · Audits, Systems Builds & Ops Partnership",
  description: "Systems Audit, 90-day Structure & Systems Build and ongoing Advisory & Operations Partner for founders at $100K–$500K.",
}

const BOOK_CALL = "https://calendar.app.google/9eJEpYdDz9APFzFh7";

const offers = [
  {
    label: "STEP 1 · DIAGNOSE · $1,200",
    title: "Systems Audit & Action Plan",
    line: "Clarity meets strategy, because you can’t fix what you can’t see.",
    body: "A strategic deep-dive into how your business actually runs. We assess your tools, workflows and backend structure, then hand you a clear, prioritised plan.",
    includes: [
      "90-minute diagnostic session",
      "Full systems and tech-stack audit",
      "Workflow analysis, internal and client-facing",
      "Gaps and bottlenecks mapped",
      "Tool recommendations",
      "Prioritised action plan",
      "60-minute walkthrough of findings",
    ],
    smallPrint: "One-time fee, delivered within 2 weeks. Credited in full toward the Build if booked within 30 days.",
    button: "Start with an audit",
    image: p4,
  },
  {
    label: "STEP 2 · BUILD · (SIGNATURE OFFER · 90 DAYS) · $7,500",
    title: "Structure & Systems Build",
    line: "A full backend transformation: designed, installed and rolled out.",
    body: "Our signature engagement. We diagnose, design and install the structure your business runs on, then lead the rollout with your team so it actually sticks.",
    timeline: [
      { month: "Month 1", text: "Diagnose and design" },
      { month: "Month 2", text: "Build" },
      { month: "Month 3", text: "Roll out and refine" },
    ],
    includes: [
      "Operating blueprint",
      "Client journey design",
      "CRM build-out (Dubsado, HoneyBook or Notion)",
      "Project management setup (ClickUp, Notion, Asana, Airtable or Trello)",
      "SOP library",
      "Integrations and automations",
      "Team training",
      "Weekly check-ins plus 30 days of support after handover",
    ],
    smallPrint: "50% to begin, 50% at handover, or 3 monthly payments of $2,650.",
    button: "Build my backend",
    image: p2,
  },
  {
    label: "STEP 3 · SUSTAIN · FROM $2,500/MONTH",
    title: "Advisory & Operations Partner",
    line: "Your long-term operations partner for sustained excellence.",
    body: "Senior operations leadership without a full-time hire. We run the rhythm of your business, lead your team and projects, and refine the structure as you scale.",
    includes: [
      "Monthly strategy session",
      "Weekly Zoom check-ins",
      "Team oversight and delegation tracking",
      "Program and project leadership",
      "Client onboarding and communication",
      "SOP creation and upkeep",
      "Systems monitoring",
      "Executive support across inbox, calendar and priorities",
    ],
    smallPrint: "3-month minimum, billed monthly. Final scope confirmed in your proposal.",
    button: "Explore a partnership",
    image: p1,
  },
];

const alsoAvailable = [
  {
    title: "Business Strategy VIP Day",
    price: "$2,500",
    text: "A full-day (7-hour) 1:1 working session on what’s stuck. You leave with a written action plan within 48 hours and 14 days of email support.",
  },
  {
    title: "Program & Event Launch Support",
    price: "from $3,000",
    text: "End-to-end management for your next program launch or live event: timelines, owners, tech setup, promo emails, onboarding and a post-launch debrief.",
  },
];

const process = [
  {
    id: "01",
    head: "Discovery & fit call",
    text: "A 30-minute conversation to align on goals and the right offer.",
  },
  {
    id: "02",
    head: "Proposal, agreement & onboarding",
    text: "A tailored proposal, then your onboarding packet.",
  },
  {
    id: "03",
    head: "Strategy, setup & implementation",
    text: "The heart of the work, with regular updates and checkpoints.",
  },
  {
    id: "04",
    head: "Review, handover & ongoing support",
    text: "A final walkthrough, then monthly support or post-project guidance.",
  },
];

const page = () => {
  return (
    <>
      <NavBar active={1} />

      {/* Hero */}
      <div className="grid grid-cols-2 gap-24 md:gap-10 items-stretch md:grid-cols-none">
        {/* fills the first screen: viewport height minus the ~90px nav bar */}
        <FitImage src="/16.jpg" imgClassName="object-top" minHeight="min-h-[calc(100vh-90px)]" priority />

        <div className="md:text-center sm:px-xPadding md:px-[5%] md:pr-[5%] pr-[10%] py-[60px] md:py-0 flex flex-col justify-center">
          <Reveal as="h1" delay={0.2} y={36} duration={1.3} className="bigText text-[80px] md:text-[38px] leading-[92px] md:leading-[48px]">
            Diagnose. Build. Sustain.
          </Reveal>

          <Reveal delay={0.5} className="w-4/5 md:w-full mt-[25px] md:mt-[18px] flex flex-col gap-6 md:items-center">
            <p>Every engagement follows one path. Start where you are, and move forward when you’re ready.</p>

            <Link href={BOOK_CALL} target="_blank">
              <button className="flex border-2 border-black gap-2 items-center p-3 w-fit uppercase bz hover-black">
                Book a fit call <RiArrowRightLine />
              </button>
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal y={16}>
        <Marque />
      </Reveal>

      {/* Offers */}
      <div className="bg-primary2 px-xPadding py-[60px] md:py-[40px] flex flex-col gap-[56px] md:gap-[50px]">
        <Reveal as="h2" className="bigText text-[56px] md:text-[38px] leading-[64px] md:leading-[44px] text-center -mb-[24px] md:-mb-[20px]">
          Our offers
        </Reveal>

        {offers.map((o, i) => (
          <div key={i} className={`${i % 2 === 1 ? "bg-white" : ""} p-8 md:p-6`}>
            <TwoWay fit>
              <Reveal className="flex flex-col gap-6 md:text-center md:items-center">
                <p className="uppercase tracking-[0.15em] text-[13px] font-semibold">{o.label}</p>

                <div className="flex flex-col gap-3">
                  <h2 className="bigText text-[44px] md:text-[32px] leading-[56px] md:leading-[40px]">{o.title}</h2>
                  <p className="text-lg md:text-base italic text-gray-600">{o.line}</p>
                </div>

                <p>{o.body}</p>

                {o.timeline && (
                  <div className="grid grid-cols-3 md:grid-cols-1 gap-4 w-full">
                    {o.timeline.map((t, j) => (
                      <div key={j} className="border-t-2 border-black pt-3 text-left md:text-center">
                        <p className="bz uppercase">{t.month}</p>
                        <p className="text-[15px]">{t.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-l-4 border-l-black pl-6 md:border-l-0 md:pl-0 md:border-t-4 md:border-t-black md:pt-5 flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-lg">What’s included</h3>
                  <Stagger as="ul" className="flex flex-col gap-2" gap={0.08}>
                    {o.includes.map((f, j) => (
                      <StaggerItem as="li" key={j} y={14} className="flex gap-3 items-start md:text-left">
                        <RiCheckLine className="mt-1 flex-shrink-0" />
                        <span>{f}</span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>

                <p className="text-sm text-gray-600">{o.smallPrint}</p>

                <Link href={BOOK_CALL} target="_blank">
                  <button className="flex border-2 border-black gap-2 items-center px-6 py-3 w-fit uppercase bz hover-black">
                    {o.button} <RiArrowRightLine />
                  </button>
                </Link>
              </Reveal>

              <FitImage src={o.image} alt={o.title} placeholder="blur" sizes="(max-width: 800px) 100vw, 45vw" />
            </TwoWay>
          </div>
        ))}
      </div>

      {/* Also available */}
      <div className="bg-[#F8F6F4] px-xPadding py-yPadding md:py-[40px] flex flex-col gap-10 items-center">
        <Reveal as="h2" className="bigText text-[50px] md:text-[36px] text-center">
          Also available
        </Reveal>

        <Stagger className="grid grid-cols-2 md:grid-cols-1 gap-8 w-full" gap={0.2}>
          {alsoAvailable.map((a, i) => (
            <StaggerItem key={i} className="bg-white p-10 md:p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="bigText text-[30px] md:text-[24px]">{a.title}</h3>
                <p className="uppercase tracking-[0.15em] text-[13px] font-semibold">{a.price}</p>
              </div>
              <p>{a.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Process */}
      <div className="bg-primary2 px-xPadding py-yPadding md:py-[40px]">
        <Reveal as="h2" className="bigText text-[50px] md:text-[36px] text-center">
          Designed for ease and excellence.
        </Reveal>

        <Stagger className="items-stretch grid grid-cols-4 mt-[40px] gap-5 md:grid-cols-none" gap={0.18}>
          {process.map((pr, i) => (
            <StaggerItem
              key={i}
              className="flex flex-col gap-1 justify-start items-center text-center bg-white py-10 px-5 h-full"
            >
              <h3 className="bg-[#E6E1DB] p-10 w-fit h-fit bigText text-[50px] cc">
                {pr.id}
              </h3>

              <h3 className="bigText text-[20px]">{pr.head}</h3>

              <p className="text-[14px] flex-1">{pr.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Testimonial */}
      <div className="grid grid-cols-2 justify-center md:flex md:flex-col-reverse">
        <Reveal className="flex flex-col justify-center gap-5 pl-[20%] pr-[7%] md:px-xPadding md:text-center md:py-20 btm">
          <h2 className="bigText text-[44px] md:text-[32px] leading-[60px] md:leading-[40px]">
            “Mide has simplified my life in more ways than I can articulate.”
          </h2>

          <p className="text-[24px] md:text-[18px] uppercase">Morenike Molehin, Founder, Grow With Renny</p>
        </Reveal>

        <ImageReveal>
          <Image src={mm} alt="" className='w-full h-auto' sizes="(max-width: 800px) 100vw, 50vw"/>
        </ImageReveal>
      </div>

      {/* Final call to action */}
      <div className="relative md:fs md:static fs fs2 md:fs2">
        <ImageReveal className="md:hidden">
          <Image src={ex} alt="" className="w-full h-auto" placeholder="blur" sizes="100vw"/>
        </ImageReveal>

        <Reveal delay={0.3} className="content absolute  md:static bottom-28 left-xPadding text-white w-3/5 flex flex-col gap-[40px] md:gap-[32px]">
          <div className="flex flex-col gap-3">
            <h2 className="text-[59px] md:text-[40px] bigText leading-[68px] md:leading-[48px]">
              Not sure where to start?
            </h2>

            <p>Book a 30-minute fit call and we’ll find the right path for your business.</p>
          </div>

          <Link href={BOOK_CALL} target="_blank">
            <div className="px-6 py-3 gap-3 bg-transparent bz border-2 md:m-auto border-white w-fit flex items-center hover">
              Book a fit call <RiArrowRightLine />
            </div>
          </Link>
        </Reveal>
      </div>

      <Footer />
    </>
  );
};

export default page;
