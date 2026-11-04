import Image from 'next/image'
import React from 'react'
import { RiBookOpenLine, RiSearchEyeLine, RiHome4Line } from 'react-icons/ri'
import { GiMeditation, GiBanana } from 'react-icons/gi'
import { Reveal, Stagger, StaggerItem } from './Reveal'

// To add a photo: drop it in /public/fun-facts/ and set `image: "/fun-facts/yoga.jpg"`.
// Cards without an image show the tinted icon panel instead.
const facts = [
  {
    tag: "Faith",
    text: "I’m always curious about God, and that curiosity shapes how I live and work.",
    icon: RiBookOpenLine,
    tint: "#E6E1DB",
    image: null,
    span: "col-span-3",
  },
  {
    tag: "Movement",
    text: "You’ll find me at yoga, Pilates or barre.",
    icon: GiMeditation,
    tint: "#D9CFC4",
    image: null,
    span: "col-span-3",
  },
  {
    tag: "Night in",
    text: "My favourite evening is my couch and a good mystery or crime show.",
    icon: RiSearchEyeLine,
    tint: "#2B2B2B",
    dark: true,
    image: null,
    span: "col-span-2",
  },
  {
    tag: "Hot take",
    text: "Unpopular opinion: I don’t like plantain.",
    icon: GiBanana,
    tint: "#EFE6D2",
    image: null,
    span: "col-span-2",
  },
  {
    tag: "Downtime",
    text: "Interior design and organising spaces are how I relax.",
    icon: RiHome4Line,
    tint: "#E3DDD5",
    image: null,
    span: "col-span-2",
  },
]

const FunFacts = () => {
  return (
    <section className="bg-white my-yPadding md:my-[60px] px-xPadding md:px-[5%] max-w-[1440px] mx-auto">
      <div className="flex items-end justify-between gap-8 mb-12 md:mb-8 md:flex-col md:items-center md:text-center">
        <Reveal as="h2" className="bigText text-[56px] md:text-[38px] leading-[64px] md:leading-[44px]">
          A few fun facts.
        </Reveal>
        <Reveal delay={0.15} as="p" className="max-w-[360px] text-black/60">
          The person behind the systems, off the clock.
        </Reveal>
      </div>

      <Stagger as="ul" className="grid grid-cols-6 gap-6 md:grid-cols-1 md:gap-5" gap={0.12}>
        {facts.map((f, i) => {
          const Icon = f.icon
          return (
            <StaggerItem
              as="li"
              key={i}
              y={24}
              className={`${f.span} md:col-span-1 group flex flex-col bg-[#F8F6F4]`}
            >
              <div
                className={`relative overflow-hidden ${i < 2 ? "aspect-[4/3]" : "aspect-square"} md:aspect-[4/3]`}
                style={{ backgroundColor: f.tint }}
              >
                {f.image ? (
                  <Image
                    src={f.image}
                    alt={f.tag}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={i < 2 ? "(max-width: 800px) 100vw, 45vw" : "(max-width: 800px) 100vw, 30vw"}
                  />
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center ${f.dark ? "text-white/80" : "text-black/70"}`}>
                    <Icon className="transition-transform duration-700 ease-out group-hover:scale-110" size={i < 2 ? 96 : 72} />
                  </div>
                )}

                <span className="absolute top-4 left-4 bigText text-[28px] leading-none text-white mix-blend-difference">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-6 md:p-5 md:text-center">
                <span className="uppercase tracking-[0.15em] text-[12px] font-semibold text-black/50">{f.tag}</span>
                <p className={`bigText ${i < 2 ? "text-[26px] leading-[36px]" : "text-[22px] leading-[32px]"} md:text-[20px] md:leading-[30px]`}>
                  {f.text}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </section>
  )
}

export default FunFacts
