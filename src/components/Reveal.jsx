"use client";
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

// A slow, soft ease-out: quick to start, long gentle settle.
const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: "0px 0px -80px 0px" }

// Fades and drifts an element up as it scrolls into view (or on load, if already visible).
export const Reveal = ({ children, className, delay = 0, y = 28, duration = 1, as = "div" }) => {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Tag>
  )
}

// Parent for a staggered set of <StaggerItem>s.
export const Stagger = ({ children, className, gap = 0.14, delay = 0, as = "div" }) => {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  )
}

export const StaggerItem = ({ children, className, y = 28, as = "div" }) => {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
      }}
    >
      {children}
    </Tag>
  )
}

// Draws a thin rule from left to right; use inside a relatively positioned parent.
export const DrawLine = ({ className = "", delay = 0, color = "bg-black" }) => {
  const reduce = useReducedMotion()

  if (reduce) return <div className={`h-[2px] ${color} w-full ${className}`} />

  return (
    <motion.div
      className={`h-[2px] ${color} w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 1.2, delay, ease }}
    />
  )
}

// Unveils an image: the frame fades in while the picture settles from a slight zoom.
export const ImageReveal = ({ children, className }) => {
  const reduce = useReducedMotion()

  if (reduce) return <div className={`overflow-hidden ${className || ""}`}>{children}</div>

  return (
    <motion.div
      className={`overflow-hidden ${className || ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 1.2, ease }}
    >
      <motion.div
        className='w-full h-full'
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.8, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const Word = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }} className='inline-block mr-[0.28em]'>{word}</motion.span>
}

// Text whose words light up one by one as the reader scrolls through it.
export const ScrollWords = ({ text, className }) => {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.6"] })

  if (reduce) return <p className={className}>{text}</p>

  const words = text.split(" ")
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, Math.min((i + 1.5) / words.length, 1)]} />
      ))}
    </p>
  )
}

// Two bars that start apart and slide together until they meet: the gap, closed.
export const CloseGap = ({ className = "" }) => {
  const reduce = useReducedMotion()
  const bar = "h-[2px] bg-black w-1/2"

  if (reduce) return <div className={`flex w-full ${className}`}><div className={bar} /><div className={bar} /></div>

  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <motion.div
        className={`${bar} origin-right`}
        initial={{ x: "-35%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1.8, ease }}
      />
      <motion.div
        className={`${bar} origin-left`}
        initial={{ x: "35%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1.8, ease }}
      />
    </div>
  )
}
