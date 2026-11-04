import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Reveal, ImageReveal } from "../../components/Reveal";
import contact from "../../../public/contact.webp";
import kwBig from "../../../public/kw-big.webp";

export const metadata = {
  title: "Contact · Book a Fit Call",
  description: "Book a 30-minute fit call or send a note. We reply within 24–48 business hours.",
}

const page = () => {
  return (
    <div className="bg-[#F8F6F4]">
      <NavBar active={4} />

      <div className="bg-[#F8F6F4]">
        <ImageReveal>
          <Image src={contact} alt="" className="relative w-full h-auto" priority sizes="100vw" />
        </ImageReveal>

        <Reveal y={30} className="absolute top-[458px] md:top-[200px] sm:top-[153px] md:left-xPadding md:right-xPadding  md:px-xPadding left-32 right-32 bg-white flex gap-5 items-center justify-center flex-col py-[40px] md:py-[32px] px-xPadding">
          <h2 className="text-center bigText300 text-[80px] md:text-[40px] font-[300] leading-[60px] md:leading-[30px]">
            Get In Touch
          </h2>
          <p className="text-center max-w-[560px]">
            Book a 30-minute fit call or send a note. We reply within 24–48 business hours.
          </p>

          <Link href="https://calendar.app.google/9eJEpYdDz9APFzFh7" target="_blank">
            <div className="flex items-center border-2 border-black bz gap-3 w-fit py-3 px-6 hover-black">
              Book a fit call <RiArrowRightLine />
            </div>
          </Link>

          <div className="w-full max-w-2xl">
            <iframe
              src="https://forms.gle/W6Wz8wMN2f9mMQuTA"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              className="border-0"
            >
              Loading…
            </iframe>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2  justify-center mt-[900px] md:mt-[700px] sm:mt-[800px] md:flex md:flex-col-reverse">
        <Reveal className="flex flex-col gap-5 justify-center pl-[20%] pr-[5%] md:px-[5%] md:text-center md:py-20 btm">
          <h2 className="bigText text-[40px] md:text-[32px] md:leading-[40px] leading-[56px]">
            “She is professional, thorough, knowledgeable, and reliable. She always has a positive attitude and completes tasks in a timely manner.”
          </h2>

          <p className="text-[24px] md:text-[18px] uppercase">
            Kamilah Williams, Fitness Instructor
          </p>
        </Reveal>

        <ImageReveal>
          <Image className="w-full h-auto object-cover" src={kwBig} alt="" sizes="(max-width: 800px) 100vw, 50vw" />
        </ImageReveal>
      </div>

      <Footer />
    </div>
  );
};

export default page;
