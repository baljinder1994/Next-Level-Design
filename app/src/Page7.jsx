import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Page7 = () => {
    const sectionRef=useRef(null)

    const[currentText,setCurrentText]=useState(0)
    const textArray=["Web 3.0","AI-Powered Design","Next Level Design","Future Design"]
  
    useEffect(() =>{
        gsap.fromTo(
            sectionRef.current,
            {opacity:0,y:-100,scale:0.95},
            {
                opacity:1,
                y:0,
                scale:1,
                duration:1.5,
                ease:"power4.out",
                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 85%",
                    toggleActions:"play none none reverse"
                }
            }
        )

        const textChange= setInterval(() =>{
            setCurrentText((prev) => (prev + 1) % textArray.length);

        },3000)
        return () => clearInterval(textChange)
    })
  
    return (
    <div className='relative min-h-screen flex flex-col md:flex-row  items-center justify-center bg-black text-white overflow-hidden px-10'>
        <motion.div
        
        className=" w-full md:w-1/2 flex flex-col items-center justify-center text-center"
        initial={{opacity:1,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        >
            <h2
            ref={sectionRef}
             className='text-[5vw] font-extrabold uppercase leading-tight'
            >The <span className='text-purple-500'> Revolution</span> Begins</h2>

         <p className='text-lg text-gray-300 mt-4 max-w-lg'>Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
         </p>

         <motion.div
         className='mt-4 text-2xl font-bold text-blue-400'
         key={currentText}
         initial={{opacity:0,y:-50}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}
         >
            {textArray[currentText]}
         </motion.div>
        </motion.div>

        <motion.div 
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        className='w-full md:w-1/2 flex item-center justify-center relative'>
            <motion.div
             className='relative w-80 h-80 flex items-center justify-center bg-gradient-to-b from-purple-500/40 to-blue-500/20 rounded-2xl shadow-xl border border-purple-600 border-opacity-20'
             whileHover={{scale:1.1,rotateX:10,rotateY:-10}}
             transition={{duration:0.5}}
             style={{
                boxShadow:
                "0px 0px 30px rgba(128,0,255,0.5),0px 0px 50px rgba(0,183,255,0.3)"
             }}
            >
                <motion.div
                className='absolute text-3xl font-bold text-white'

                >
                ⚡ Future is Here ⚡
                </motion.div>

                <motion.div className='absolute w-12 bottom-6 right-6 h-12 bg-blue-400 rounded-full blur-xl'
                animate={{y:[-20,20,-20]}}
                transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}
                ></motion.div>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Page7
