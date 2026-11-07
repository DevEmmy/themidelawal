import React from 'react'

// `fit`: both columns stretch to the taller one (use with FitImage so the text sets the height).
// Defaults keep these props optional for TypeScript callers (e.g. vapreneur-blueprint/page.tsx).
const TwoWay = ({ image = null, children, rev = false, fit = false }) => {
  return (
    <div className={`grid grid-cols-2 gap-[104px]  md:gap-[40px] bg-transparent ${fit ? "items-stretch" : "items-start"} md:grid-cols-none ${ rev && "md:flex md:flex-col-reverse"}`}>
        {children}
    </div>
  )
}

export default TwoWay
