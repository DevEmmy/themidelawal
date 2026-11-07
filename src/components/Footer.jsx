import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine, RiArrowUpLine } from 'react-icons/ri'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { Reveal } from './Reveal'

const BOOK_CALL = "https://calendar.app.google/9eJEpYdDz9APFzFh7"
const NEWSLETTER = "https://the-private-assistant.kit.com/e1fdf52a38"
const EMAIL = "hey@themidelawal.com"

const nav = [
    { title: "Home", link: "/" },
    { title: "Work With Us", link: "/work-with-us" },
    { title: "Results", link: "/results" },
    { title: "Contact", link: "/contact-us" },
]

const social = [
    {
        icon: <SiInstagram size={16} />,
        label: "Instagram",
        link: "https://www.instagram.com/heymidelawal?rpxt=OGN6cHBucTk4MTJ0&utm_source=qr"
    },
    {
        icon: <SiLinkedin size={16} />,
        label: "LinkedIn",
        link: "https://ng.linkedin.com/in/mide-lawal-182734149"
    },
]

const Label = ({ children }) => (
    <p className='uppercase tracking-[0.2em] text-[12px] text-white/50 mb-5 md:mb-4'>{children}</p>
)

const Footer = () => {
  return (
    <Reveal y={20} as="footer" className='mt-10 md:mt-[24px]'>
      <div className='text-white bg-black'>

        <div className='px-xPadding md:px-[5%] pt-20 pb-14 md:pt-14 md:pb-10 grid grid-cols-12 gap-10 md:grid-cols-1 md:gap-12 md:text-center'>

            {/* Brand */}
            <div className='col-span-4 md:col-span-1 flex flex-col gap-5 md:items-center'>
                <Link href="/" className='bigText text-[32px] md:text-[28px] leading-[38px] uppercase'>
                    The Mide Lawal & Co.
                </Link>
                <p className='text-white/70 max-w-[300px]'>
                    Strategy, operations and systems for expert-led brands.
                </p>
                <div className='flex gap-3 mt-1'>
                    {social.map((s) => (
                        <Link
                            key={s.label}
                            href={s.link}
                            target='_blank'
                            aria-label={s.label}
                            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                        >
                            {s.icon}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Explore */}
            <nav className='col-span-2 md:col-span-1'>
                <Label>Explore</Label>
                <ul className='flex flex-col gap-3 uppercase text-[14px] tracking-wide'>
                    {nav.map((n) => (
                        <li key={n.link}>
                            <Link href={n.link} className='text-white/85 hover:text-white underline-offset-4 hover:underline'>
                                {n.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Contact */}
            <div className='col-span-3 md:col-span-1'>
                <Label>Get in touch</Label>
                <div className='flex flex-col gap-3 md:items-center'>
                    <a href={`mailto:${EMAIL}`} className='text-white/85 hover:text-white underline-offset-4 hover:underline break-all'>
                        {EMAIL}
                    </a>
                    <Link href={BOOK_CALL} target='_blank' className='flex items-center gap-2 uppercase text-[14px] tracking-wide text-white/85 hover:text-white underline-offset-4 hover:underline'>
                        Book a fit call <RiArrowRightLine />
                    </Link>
                </div>
            </div>

            {/* Newsletter */}
            <div className='col-span-3 md:col-span-1 flex flex-col md:items-center'>
                <Label>Newsletter</Label>
                <h2 className='bigText text-[22px] leading-[30px] mb-2'>
                    Notes on Structure, Every Week.
                </h2>
                <p className='text-white/70 text-[14px] mb-5 max-w-[320px]'>
                    Practical ideas on systems, operations and building a business that runs without you in everything.
                </p>
                <Link href={NEWSLETTER} target='_blank' className='w-fit'>
                    <span className='border-2 border-white flex gap-3 bz hover items-center px-5 py-3 uppercase text-[14px]'>
                        Subscribe <RiArrowRightLine />
                    </span>
                </Link>
            </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-white/15 px-xPadding md:px-[5%] py-6 flex items-center justify-between gap-4 text-[13px] text-white/60 md:flex-col md:text-center'>
            <p>&copy; {new Date().getFullYear()} The Mide Lawal & Co. All rights reserved.</p>
            <a href="#" className='flex items-center gap-2 hover:text-white uppercase tracking-wide'>
                Back to top <RiArrowUpLine />
            </a>
        </div>

      </div>
    </Reveal>
  )
}

export default Footer
