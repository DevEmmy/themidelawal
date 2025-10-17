import React from 'react'

const TwoWay = ({image, children, rev}) => {
  return (
    <div className={`grid grid-cols-2 gap-[104px]  md:gap-[40px] bg-transparent items-start md:grid-cols-none ${ rev && "md:flex md:flex-col-reverse"}`}>
        {children}
    </div>
  )
}

export default TwoWay