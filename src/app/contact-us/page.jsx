"use client";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[##F8F6F4]">
      <NavBar active={5} />

      <div className="bg-[#F8F6F4]">
        <img src="./contact.png" alt="" className="relative w-full" />

        <div className="absolute top-[458px] md:top-[200px] sm:top-[153px] md:left-xPadding md:right-xPadding  md:px-xPadding left-32 right-32 bg-white flex gap-5 items-center justify-center flex-col py-[40px] md:py-[32px] px-xPadding">
          <h2 className="text-center bigText300 text-[80px] md:text-[40px] font-[300] leading-[60px] md:leading-[30px]">
            Get In Touch
          </h2>
          <p className="text-center">
            Kindly fill the form below and we would respond within 24-48
            business hours.
          </p>

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
        </div>
      </div>

      <div className="grid grid-cols-2  justify-center mt-[800px] md:mt-[600px] sm:mt-[700px] md:flex md:flex-col-reverse">
        <div className="flex flex-col gap-3 justify-center pl-[20%] pr-[5%] md:px-[5%] md:text-center md:py-20 btm">
          <h2 className="bigText text-[40px] md:text-[32px] md:leading-[40px] leading-[63px]">
            My experience with The Mide Lawal & Co., has been nothing
            short of amazing!
          </h2>

          <p>She is professional, thorough, knowledgeable, and reliable.</p>

          <p className="text-[24px] md:text-[18px] uppercase">
            Kamilah Williams
          </p>
        </div>

        <Image unoptimized width={1000} height={1000} className="w-full object-cover"  src="/./kw-big.png" alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default page;
