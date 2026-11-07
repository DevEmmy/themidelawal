import React from 'react'

// `fit`: both columns stretch to the taller one (use with FitImage so the text sets the height).
const TwoWay = ({image, children, rev, fit}) => {
  return (
    <div className={`grid grid-cols-2 gap-[104px]  md:gap-[40px] bg-transparent ${fit ? "items-stretch" : "items-start"} md:grid-cols-none ${ rev && "md:flex md:flex-col-reverse"}`}>
        {children}
    </div>
  )
}

export default TwoWay
