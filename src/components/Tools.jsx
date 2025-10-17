"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { SiAirtable, SiClickup, SiMailchimp, SiNotion, SiSlack } from 'react-icons/si';


const Tools = () => {

    

    const sTools1 = [
        {
            text: "Notion",
            icon: <SiNotion size={38}/>
        },
        {
            text: "Airtable",
            icon: <SiAirtable size={38}/>
        },
        {
            text: "ClickUp",
            icon: <SiClickup size={38}/>
        },
        {
            text: "MailChimp",
            icon: <SiMailchimp size={38}/>
        }
    ]

    const sTools2 = [
        {
            text: "Slack",
            icon: <SiSlack size={30} />
        },
        {
            icon: "",
            text: "Flodesk"
        },
        {
            icon: "",
            text: "Dubsado"
        },
        {
            icon: "",
            text: "Google Workspace"
        }
    ]

    const mTools = [
        {
            text: "Notion",
            icon: <SiNotion size={28}/>
        },
        {
            text: "Airtable",
            icon: <SiAirtable size={28}/>
        },
        {
            text: "ClickUp",
            icon: <SiClickup size={28}/>
        },
        {
            text: "MailChimp",
            icon: <SiMailchimp size={28}/>
        },
        {
            text: "Slack",
            icon: <SiSlack size={28} />
        },
        {
            icon: "",
            text: "Flodesk"
        },
        {
            icon: "",
            text: "Dubsado"
        },
        {
            icon: "",
            text: "Google Workspace"
        }
    ]

    const [tools, setTools] = useState(sTools1)
    const [mTool, setM] = useState(mTools.slice(0,2))

    useEffect(()=>{
        let flag = false;
        // let i = 1

        setInterval(()=>{
            if(!flag){
                setTools(sTools2)
                flag = true
            }
            else{
                setTools(sTools1);
                flag = false
            }
        }, 2000)

        let i = 0;
        setInterval(()=>{
            if(i == 0){
                setM(mTools.slice(2,4))
                i = 1
            }
            else if(i == 1){
                setM(mTools.slice(4,6));
                i = 2
            }
            else if(i == 2){
                setM(mTools.slice(6,8));
                i = 0
            }
        }, 2000)


    }, [])
  return (
    <div className='flex bg-[#E6E1DB] md:flex-col md:gap-[20px]   px-[10%] md:px-[5%] py-5 md:py-[15px] justify-between'>

        <h1 className="bigText md:text-center leading-[63px] md:leading-[40px] text-[40px] md:text-[32px] bts text-left md:w-full md:m-auto w-[20%]">
            Tools I Work With
        </h1>

        {/* <Slot>
             <div className='md:flex md:flex-col grid grid-cols-4 h-[10px] bg-red-400 justify-between items-center w-[70%] md:w-full md:gap-[37px]'>
           {
            tools.map((t, i)=>{
                return(
                    <div key={i} className='uppercase flex gap-3 items-center justify-center'>
                        {t.icon}
                        <p className='text-[18px]'>
                            {t.text}
                        </p>
                    </div>
                )
            })
        } 
        </div>
        </Slot> */}
       

        <AnimatePresence mode="wait">
          <motion.div
            key={tools[0]}
            initial={{ y: 10, opacity: 1 }}
            animate={{ y: 1, opacity: 1 }}
            exit={{ y: -10, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className=' md:grid-cols-2 md:hidden flex justify-evenly items-center w-[70%] md:w-full md:gap-[37px]'
          >

            {/* <div > */}
           {
            tools.map((t, i)=>{
                return(
                    <div key={i} className='uppercase flex gap-3 items-center justify-center'>
                        {t.icon}
                        <p className='text-[18px]'>
                            {t.text}
                        </p>
                    </div>
                )
            })
        } 
        {/* </div> */}
            
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={tools[0]}
            initial={{ y: 10, opacity: 1 }}
            animate={{ y: 1, opacity: 1 }}
            exit={{ y: -10, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className=' md:grid-cols-2 md:flex hidden justify-evenly items-center w-[70%] md:w-full '
          >

            {/* <div > */}
           {
            mTool.map((t, i)=>{
                return(
                    <div key={i} className='uppercase flex gap-3 items-center justify-center'>
                        {t.icon}
                        <p className='text-[16px]'>
                            {t.text}
                        </p>
                    </div>
                )
            })
        } 
        {/* </div> */}
            
          </motion.div>
        </AnimatePresence>
        

    </div>
  )
}

export default Tools
