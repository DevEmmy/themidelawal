import Footer from "../../components/Footer";
import Marque from "../../components/Marque";
import NavBar from "../../components/NavBar";
import TwoWay from "../../components/TwoWay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine, RiCheckDoubleLine } from "react-icons/ri";

const page = () => {
  const serviceOfferings = [
    {
      id: "01",
      title: "Business Support Retainer",
      subtitle: "Your right hand in operations—on an ongoing basis.",
      description: "This high-touch retainer is designed for founders who need consistent, professional support with running their backend operations. From client experience and program logistics to task delegation and admin flow, we'll be your dedicated support specialist who understands your vision—and executes with excellence.",
      features: [
        "Ongoing executive & administrative support",
        "Client onboarding & communication management",
        "Program and project coordination",
        "Calendar, email, and task management",
        "SOP creation and documentation",
        "Team oversight and delegation tracking",
        "Backend optimization and systems monitoring",
        "Weekly Zoom check-ins"
      ],
      investment: "Begins at $1000",
      cta: "Let's explore if this is the right fit",
      image: "./p1.jpg"
    },
    {
      id: "02",
      title: "Business Systems Build-Out",
      subtitle: "A full backend transformation—done in 30 days.",
      description: "If you're overwhelmed by scattered systems, no clear workflows, or a backend that doesn't support your growth—this is for you. We build a streamlined operations system from the ground up using tools like Dubsado, ClickUp, Notion, and Airtable. You'll walk away with a backend that finally makes sense.",
      features: [
        "CRM Build-Out (Dubsado, HoneyBook, or Notion)",
        "– Client forms, contracts, proposals, automations, canned emails, portals",
        "Task & Project Management Setup (ClickUp, Notion, Asana, Airtable, or Trello)",
        "– Task boards, SOP library, team space, content calendar",
        "SOP Creation & Documentation",
        "– Onboarding, offboarding, launch support, team roles",
        "Tool integration & walkthrough training"
      ],
      investment: "$3,500",
      paymentPlan: "Payment Plan: 50% upfront | 50% at completion",
      cta: "Ready to build your dream backend?",
      image: "./p2.jpg"
    },
    {
      id: "03",
      title: "Systems Wipe",
      subtitle: "Declutter. Refresh. Reclaim your ease.",
      description: "If your business backend feels chaotic, bloated, or just \"not working anymore,\" this is your clean slate. The Systems Wipe is for founders who already have systems in place—but need them reorganized, optimized, and refreshed without starting from scratch. We'll go into your systems, clean up what's no longer serving you, and rebuild your workflows with more clarity, simplicity, and flow.",
      features: [
        "Backend system cleanup (CRM, task managers, folders, emails)",
        "Reorganized workflows",
        "Tool and task alignment",
        "Refreshed SOPs and templates",
        "Full walkthrough of your new structure"
      ],
      investment: "$2000",
      cta: "Let's bring order back to your business.",
      image: "./p3.jpg"
    },
    {
      id: "04",
      title: "Systems Audit & Action Plan",
      subtitle: "Not sure what's wrong? Let us take a look.",
      description: "This is the perfect offer for founders who feel something's off in their backend—but can't quite put their finger on it. We'll audit your current systems, tools, workflows, and client journey, and deliver a tailored, high-level report outlining what's working, what's not, and what needs to change.",
      features: [
        "A full backend systems & tech audit",
        "Identification of gaps, redundancies, and bottlenecks",
        "A customized action plan to streamline and improve your operations",
        "Recommendations on tools and structure to move forward confidently"
      ],
      investment: "$650",
      note: "(one-time fee)",
      cta: "Want clarity on your backend?",
      image: "./p4.jpg"
    },
    {
      id: "05",
      title: "Program | Offer Launch Support",
      subtitle: "High-level operational support for your next signature offer or program.",
      description: "This one-time, project-based service is perfect for entrepreneurs preparing for a major launch and need an expert to manage all the operational moving pieces. We handle the backend so you can stay focused on showing up and selling with confidence.",
      features: [
        "End-to-end launch operations support",
        "Program workflow & delivery setup",
        "Promo Emails Support",
        "Tech tool setup & integrations",
        "Launch SOPs and templates",
        "Client onboarding process for new enrollments",
        "Post-launch debrief & recommendations"
      ],
      investment: "Custom, based on scope and timeline",
      cta: "Ready to launch with confidence?",
    image: "./p6.JPG"
    }
  ];

  const process = [
    {
      id: "01",
      head: "Discovery & Fit Call",
      text: "We begin with a personalized call to explore your current needs, business goals, and the challenges you're facing. ",
    },
    {
      id: "02",
      head: "Proposal, Agreement & Onboarding",
      text: "Once we've defined the scope, we'll send over a tailored proposal and service agreement. ",
    },
    {
      id: "03",
      head: "Strategy, Setup & Implementation",
      text: "Depending on your selected offer, we move into the heart of the work—whether that's a full build-out, cleanup, audit, or ongoing support. ",
    },
    {
      id: "04",
      head: "Review, Delivery & Ongoing Support",
      text: "We close out with a final walkthrough and deliverables handoff. For retainer clients, we seamlessly transition into monthly support. ",
    },
  ];

  return (
    <>
      <NavBar active={2} />

      <div className="grid grid-cols-2 gap-24 md:gap-10 items-center md:grid-cols-none">
        <Image src="/./DAP3.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>

        <div className="md:text-center sm:px-xPadding md:px-[5%] md:pr-[5%] pr-[10%]">
          <h2 className="bigText text-[80px] md:text-[38px] leading-[92px] md:leading-[48px]">
            The Mide Lawal & Co.
          </h2>

          <div className="w-4/5 md:w-full mt-[25px] md:mt-[18px] flex flex-col gap-2">
            <p>You didn't start your business to get buried in the backend.</p>
            
            <p>That's where we come in.</p>
            
            <p>At <b>The Mide Lawal & Co.</b>, we partner with high-level entrepreneurs to streamline, systemize, and scale their operations with excellence. From refining your backend to optimizing your client experience, we offer premium business operations support designed to help you reclaim your time and elevate how your business runs behind the scenes.
            </p>
            Whether you need dedicated support, a full systems build, or a high-level audit, we offer tailored services that meet you exactly where you are—and help you move with more clarity, structure, and ease.
          </div>
        </div>
      </div>

      <Marque />

      <div className="bg-white py-yPadding  md:py-[40px]  px-xPadding sm:px-xPadding md:px-[5%] sm:text-center">
        <TwoWay>
          <div className="hidden md:block">
            <Image src="/./DAP4.jpg" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
          </div>

          <div className="flex flex-col gap-5 md:text-center">
            <h2 className="bigText text-[40px] md:text-[32px] leading-[55px] md:leading-[38px]">
              Let`s make your CEO role a breeze so you can enjoy the life and
              business of your dream!
            </h2>

            <div className="flex flex-col gap-6">
              <p>
                Led by Mide Lawal, a Business Operations & Systems Strategist with 7 years of experience, our firm is built on the belief that a well-run business is a sustainable business. We've worked with over 30+ high-level entrepreneurs across industries—supporting everything from service-based providers to product based brand owners.
              </p>
              <p>
                At The Mide Lawal & Co., we don't just manage tasks—we build systems that think ahead for you. Our mission is to help you design a business backend that feels clean, powerful, and beautifully aligned with how you want to lead.
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-semibold">We believe in:</p>
                <ul className="flex flex-col gap-2 pl-4">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">+</span>
                    <span>Intentional structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">+</span>
                    <span>Luxurious client experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">+</span>
                    <span>Thoughtful delegation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">+</span>
                    <span>Quiet, consistent excellence</span>
                  </li>
                </ul>
              </div>
              <p>
                Let's make the backend of your business just as remarkable as what your clients see on the outside.
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <Image src="/./services2.png" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
          </div>
        </TwoWay>
      </div>

      <div className="bg-primary2 px-xPadding py-[60px] md:py-[40px]">
        <h2 className="bigText text-[50px] text-center w-9/12 md:w-full md:text-[38px] capitalize md:leading-[38px] m-auto mb-10">
          Our Services
        </h2>

        <div className="flex flex-col gap-10">
          {serviceOfferings.map((service, index) => (
            <div key={service.id} className={`${index % 2 === 1 ? 'bg-white' : ''} rounded-lg p-8 md:p-6`}>
              <TwoWay >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#E6E1DB] w-16 h-16 rounded-full flex items-center justify-center bigText text-2xl font-bold">
                      {service.id}
                    </div>
                    <div>
                      <h3 className="bigText text-[32px] md:text-[28px] font-bold">
                        {service.title}
                      </h3>
                      <p className="text-lg md:text-base text-gray-600 italic">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-l-4 border-l-black px-6 flex flex-col gap-4">
                    <h4 className="font-semibold text-lg">What's included:</h4>
                    <div className="flex flex-col gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <RiCheckDoubleLine className="text-green-600 mt-1 flex-shrink-0" />
                          <p className="text-base">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-lg">Investment: {service.investment}</p>
                      {service.note && <span className="text-sm text-gray-600">{service.note}</span>}
                    </div>
                    {service.paymentPlan && (
                      <p className="text-sm text-gray-600">{service.paymentPlan}</p>
                    )}
                  </div>

                  <Link href="/contact-us">
                    <button className="flex border-2 border-black gap-2 items-center px-6 py-3 w-fit uppercase font-bold hover:bg-black hover:text-white transition-colors duration-300">
                      {service.cta} <RiArrowRightLine />
                    </button>
                  </Link>
                </div>

                <div className="">
                  <Image src={`/${service.image}`} alt={service.title} className="w-full h-[800px] md:h-[400px] md:w-full object-cover " unoptimized width={1000} height={1000}/>
                </div>
              </TwoWay>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F8F6F4] px-xPadding py-yPadding md:py-[40px]">
        <h2 className="bigText text-[50px] md:text-[40px] text-center">
          THE PROCESS
        </h2>

        <div className="items-stretch grid grid-cols-4 mt-[40px] gap-5 md:grid-cols-none">
          {process.map((pr, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-1 justify-start items-center text-center bg-white py-10 px-5 h-full"
              >
                <h2 className="bg-[#E6E1DB] p-10 w-fit h-fit bigText text-[50px] cc">
                  {pr.id}
                </h2>

                <h2 className="bigText text-[20px]">{pr.head}</h2>

                <p className="text-[14px] flex-1">{pr.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center md:flex md:flex-col-reverse">
        <div className="flex flex-col justify-center gap-3 pl-[20%] pr-[7%] md:px-xPadding md:text-center md:py-20 btm">
          <h2 className="bigText text-[48px] md:text-[32px]">
            Mide has simplified my life in many ways than I can articulate!
          </h2>

          <p>
            Working with Mide over the last couple of months and years has been
            extremely beautiful. She does not only give you value for your
            money, but she also goes above and beyond her job description.
          </p>

          <p className="text-[24px] md:text-[18px]">MORENIKE MOLEHIN</p>
        </div>

        <Image src="/./mm.png" alt="" className='w-full h-auto' unoptimized width={1000} height={1000}/>
      </div>

      <div className="relative md:fs md:static fs fs2 md:fs2">
        <Image src="/./ex.png" alt="" className="md:hidden w-full h-auto" unoptimized width={1000} height={1000}/>

        <div className="content absolute  md:static bottom-28 left-xPadding text-white w-3/5 flex flex-col gap-[40px] md:gap-[32px]">
          <h2 className="text-[59px] md:text-[40px] bigText leading-[68px] md:leading-[48px]">
            Ready to experience the reality of doing business with ease?
          </h2>

          <Link href={"/contact-us"}>
            <div className="px-6 py-3 gap-3 bg-transparent bz border-2 md:m-auto border-white w-fit flex items-center hover">
              WORK WITH ME <RiArrowRightLine />
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
