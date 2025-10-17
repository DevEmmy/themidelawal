import Footer from "../../components/Footer";
import Marque from "../../components/Marque";
import NavBar from "../../components/NavBar";
import TwoWay from "../../components/TwoWay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiArrowRightLine, RiCheckDoubleLine } from "react-icons/ri";

const page = () => {


  return (
    <>
      <NavBar active={4} />

      <div className="grid grid-cols-2 gap-10 md:gap-10 items-center md:grid-cols-none">
        <div className=" sm:px-xPadding md:px-[5%] px-[10%]">
          <h2 className="bigText text-[80px] md:text-[38px] leading-[92px] md:leading-[48px]">
            Did You Know?
          </h2>

          <div className=" md:w-full mt-[25px] md:mt-[18px] flex flex-col gap-2">
            <p className="text-2xl">That the Virtual Assistant industry is projected to exceed $44 billion globally by 2027?</p>

            <p>That hundreds of young Nigerians are already earning $200–$500 working just 10 hours a week right from their phones and laptops, as Virtual Assistants?</p>
            <p>That international brands are not just hiring content creators, they are also hiring organized, reliable, smart people to manage their backend and systems?</p>
            {/* <br /> */}
            <p>If you've ever said to yourself:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>"I'm not a content creator—I don't like the camera."</li>
              <li>"I'm not cut out for hair, makeup, or fashion."</li>
              <li>"I want to do work that challenges my brain."</li>
              <li>"I want a digital skill that pays well and works for me."</li>
            </ul>
            <p>Then you’re exactly who this was created for.</p>

            <p>You don’t need to go viral. You don’t need a massive following. You just need a system. A skill. And a smart start.</p>
          </div>
        </div>

        <Image src="/./new1 (1).PNG" alt="" className='w-full h-auto' unoptimized width={1000} height={1000} />
      </div>

      <Marque text="The VAPreneur Blueprint™" />

      <div className="bg-white py-yPadding  md:py-[40px]  px-xPadding sm:px-xPadding md:px-[5%] sm:text-center">
        <TwoWay image={null} rev={true}>
          <div className="hidden md:block">
            <Image src="/./services1.png" alt="" className='w-full h-auto' unoptimized width={1000} height={1000} />
          </div>

          <div className="md:hidden">
            <Image src="/./services1.png" alt="" className='w-full h-auto' unoptimized width={1000} height={1000} />
          </div>

          <div className="flex flex-col gap-5 md:text-center">
            <h2 className="bigText text-[40px] md:text-[32px] leading-[55px] md:leading-[38px]">
              Introducing… The VAPreneur Blueprint™
            </h2>
            <h3 className="text-2xl font-bold">Launch Your Virtual Assistant Career with Skill & Confidence</h3>
            <p className="text-lg italic">From Campus to Clients — Your Pathway to Earning Online While You Learn.</p>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3">Why Virtual Assistance? Why Now?</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The demand for VAs is skyrocketing globally.</li>
                  <li>Business owners are looking for people who can help them run things—not just post on Instagram.</li>
                  <li>You don't need a huge following or fancy tech—just the right knowledge, tools, and guidance.</li>
                  <li>You can work from anywhere, on your own terms.</li>
                  <li>Imagine earning $800/month from one international client.</li>
                </ul>
              </div>

              <p>Now imagine having 3 to 6 clients like that, all while being a student or NYSC member.</p>
              <p>That's the life thousands of VAs are building and you can too.</p>


            </div>
          </div>


        </TwoWay>

        
      </div>

      <div className="bg-white py-yPadding  md:py-[40px]  px-xPadding sm:px-xPadding md:px-[5%] sm:text-center">
      <TwoWay image={null} rev={false}>
          <div>
          <div>
            <h4 className="text-xl font-bold mb-3">What is The VAPreneur Blueprint™?</h4>
            <p>It's a 3-Day Masterclass designed specifically for students and NYSC members who want to build a practical, profitable digital career as a Virtual Assistant.</p>
            <p className="font-semibold">No fluff. No vague motivational talk. Just the step-by-step blueprint to get started and get paid.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold my-3">This Masterclass Is For You If You:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Are tired of not knowing how to start earning your own money</li>
              <li>Know you don't want to be a content creator or handmade business owner</li>
              <li>Prefer working behind the scenes with systems, tools, and tasks</li>
              <li>Loves structure, organization, design, content, or admin-type work</li>
              <li>Are tired of confusion and want someone to show you exactly where to start</li>
              <li>Are ready to build something sustainable before graduation or after NYSC</li>
              <li>Want to work for international clients who pay in dollars</li>
              <li>Love working with your brain and enjoy being detail-oriented</li>
              <li>Want to gain digital experience in admin, tech, or creative fields</li>
            </ul>
          </div>
          </div>

          <div>
                <Image src="/./new1 (1).jpg" alt="Curriculum" className="w-full h-[600px] object-cover rounded-lg" width={1000} height={1000} unoptimized />
              </div>
        </TwoWay>
      </div>

      <div className="bg-primary2 px-xPadding py-[60px] md:py-[40px]">
        <h2 className="bigText text-[50px] text-center w-9/12 md:w-full md:text-[38px] capitalize md:leading-[38px] m-auto mb-10">
          Let's Break It Down
        </h2>

        {/* The Curriculum Section */}
        <div className="flex flex-col gap-10">
          <div className="bg-[#F8F6F4] rounded-lg p-8 md:p-6">
            <TwoWay image={null} rev={false}>
              <div className="flex flex-col gap-6">
                <h2 className="bigText text-[40px] md:text-[32px] mb-6">The Curriculum</h2>
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Day 1 – Welcome to the World of VAs</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>What VAs do</li>
                      <li>Admin, Tech, Design, Social, Video—pick your path</li>
                      <li>Discover the role that fits your personality + strengths and get client-ready</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Day 2 – Tools & Systems You Must Know</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Learn to navigate over 30 systems like: Notion, Trello, ClickUp, Slack, Flodesk, Dubsado, Go High Level, Circle Canva, Kajabi + more</li>
                      <li>Learn how to use them confidently and serve clients like a pro</li>
                      <li>Bonus: PDF walkthrough for each tool</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Day 3 – Finding Clients & Landing Your First Role</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>How to find access to your dream clients</li>
                      <li>What to say when you apply</li>
                      <li>How to create a portfolio even without experience</li>
                      <li>Your action plan to go from student → skilled VA</li>
                    </ul>
                  </div>
                </div>
                                 <div className="mt-8">
                   <h3 className="font-bold text-xl mb-2">Your Assets</h3>
                   <ul className="list-none pl-0 space-y-1 text-lg">
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> 3 Pre-Recorded Video Lessons (Delivered Daily)</li>
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> Downloadable Guides + Workbooks for Each Day</li>
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> A VA Tools Master Guide PDF</li>
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> Personalized Q&A Submission Form</li>
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> Access to 30-Day Slack Support Group</li>
                     <li className="flex items-center gap-2"><RiAddLine className="text-black text-xl" /> Clear step-by-step plan to get your first client</li>
                   </ul>
                 </div>
              </div>
              <div>
                <Image src="/./p3.jpg" alt="Curriculum" className="w-full h-[90vh] md:h-[100%] object-cover rounded-lg" width={1000} height={1000} unoptimized />
              </div>
            </TwoWay>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-6">
            <TwoWay image={null} rev={false}>
              <div>
                <Image src="/./new1 (2).jpg" alt="Pricing" className="w-full h-[90vh] md:h-[100%]  object-cover rounded-lg" width={1000} height={1000} unoptimized />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="bigText text-[40px] md:text-[32px] mb-2">So why ₦15,000, right?</h2>
                <p className="mb-1">It's affordable — on purpose.</p>
                <p className="mb-1">We priced this masterclass with students and NYSC members in mind, those who are hungry to build something real but don't have hundreds of thousands to spend on coaching or tech courses.</p>
                <p className="mb-1">Could you find some information on YouTube or TikTok? Yes.</p>
                <p className="mb-1">But what you won't find is structure, clarity, and a focused blueprint created specifically for Nigerian students, by someone who has walked this path.</p>
                <p className="mb-1 mt-3">This masterclass is not a rabbit hole of random videos. It's not filled with fluff or recycled advice. It's a carefully curated guide to help you launch your Virtual Assistant journey with confidence, from someone who's built a career helping entrepreneurs build profitable systems and teams.</p>
                <p className="mb-1">You're not just paying for information. You're investing in direction, support, and a real roadmap you can follow.</p>
                <p className="mb-4">This should be expensive, but it's not. And its affordability doesn't mean it lacks depth, value, or excellence.</p>
              </div>
            </TwoWay>
          </div>

          <div className="bg-[#F8F6F4] rounded-lg p-8 md:p-6">
            <TwoWay image={null} rev={false}>
              <div className="flex flex-col gap-2">
                <h2 className="bigText text-[40px] md:text-[32px] mb-1">What Happens After You Register?</h2>
                <p className="mb-4">As soon as your payment is confirmed, you'll receive a welcome email to officially onboard you into the VAPreneur Blueprint™ experience.</p>
                <p className="mb-4">Then, on Saturday, October 18th at 10 AM, you'll get an exclusive email with:</p>
                <ul className="list-disc pl-6 mb-1">
                  <li>The full masterclass schedule</li>
                  <li>A private link to join our Slack Support Group</li>
                  <li>Delivery times for each day's lesson, guide, and resources</li>
                </ul>
                <p className="mb-1">From Monday, October 20th to Wednesday, October 22nd, you'll receive:</p>
                <ul className="list-disc pl-6 mb-1">
                  <li>Your daily pre-recorded video lesson</li>
                  <li>A practical PDF guide</li>
                  <li>Carefully curated bonus templates to help you hit the ground running</li>
                </ul>
                <p>You're not just learning, you're launching. Get ready.</p>
              </div>
              <div>
                <Image src="/./new1 (3).jpg" alt="Registration Process" className="w-full h-[90vh] md:h-[100%] object-cover rounded-lg" width={1000} height={1000} unoptimized />
              </div>
            </TwoWay>
          </div>
        </div>
      </div>


      <div className="bg-white py-yPadding md:py-[40px] px-xPadding">
        <TwoWay image={null} rev={false}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="bigText text-[48px] md:text-[32px] mb-6">
                Register for Your Space Today
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm font-bold">1</div>
                  <div>
                    <p className="font-semibold">Pay to:</p>
                    <p>The Private Assistant Limited | 0900868794 | GTBank</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm font-bold">2</div>
                  <div>
                    <p className="font-semibold">Send proof of payment to:</p>
                    <p>hey@themidelawal.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm font-bold">3</div>
                  <div>
                    <p className="font-semibold">Once your payment is confirmed, you'll receive an email with your onboarding form</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="bigText text-[32px] md:text-[24px] mb-4">
                This Might Be the Smartest N15,000 You've Ever Spent
              </h3>

              <p className="text-lg mb-4">
                Because when you look back a few months from now, confidently applying to remote roles, managing client tasks, or earning your first $5000 online, you'll realize this was the moment it all started.
              </p>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Your future will thank you.</p>
                <p className="font-semibold">Your bank account will too.</p>
                <p className="font-semibold">And you'll know you didn't wait, you built and changed your life.</p>
              </div>
            </div>
          </div>

          <div>
            <Image src="/./new1 (4).jpg" alt="Registration" className="w-full h-[90vh] md:h-[100%] object-cover rounded-lg" width={1000} height={1000} unoptimized />
          </div>
        </TwoWay>
      </div>

      {/* <div className="bg-white px-xPadding ">
        <div className="max-w-4xl mx-auto">
          <h3 className="bigText capitalize text-[32px] md:text-[24px] text-center mb-8">Fill out this Form to complete your registration</h3>
          <iframe
            src="https://forms.gle/81ki8E8SM9CT8agj7"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="border-0"
          >
            Loading…
          </iframe>
        </div>
      </div> */}

      {/* <div className="relative md:fs md:static fs fs2 md:fs2">
                <Image src="/./ex.png" alt="" className="md:hidden w-full h-auto" unoptimized width={1000} height={1000} />

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
            </div> */}

      <Footer showPinterest={false} />
    </>
  );
};

export default page;
