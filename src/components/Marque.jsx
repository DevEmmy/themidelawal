import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = ({text}) => {
  return (
    <div className='bg-[#D9D9D9] py-[38px]'>
        <Marquee>
            <div className='flex gap-20 justify-between'>
            {
            [1,2,3,4,5].map((j, i)=>{
                return(
                    <p className='uppercase' key={i}>{text || "SUPPORT || STRATEGY || STRUCTURE"}</p>
                )
            })
            }
            </div>
            
        </Marquee>
        
    </div>
  )
}

export default Marque