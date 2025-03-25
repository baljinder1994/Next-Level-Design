import React, { useEffect,useRef } from 'react'
import {motion} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Page4 = () => {
    
     
        const textRef=useRef(null)

        useEffect(() =>{
            gsap.fromTo(
                textRef.current,
                        {opacity:0,scale:0.8,y:100},
                        {
                            opacity:1,
                            y:0,
                            scale:1,
                            duration:1.5,
                            ease:"power4.out",
                            scrollTrigger:{
                                trigger:textRef.current,
                                start:"top 85%",
                                toggleActions:"play none none reverse"
                            }
                        }
                    );
        })
  return (
    <div  className='relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden'>
        <motion.div
           className='absolute top-16 left-10 w-32 h-32 bg-blue-500/50 right-10 blur-2xl rounded-full'
           animate={{x:[-15,15,-15,15],y:[10,-10,10,-10]}}
           transition={{duration:5,repeat:Infinity,ease:"linear"}}
           >
           
           </motion.div>
           <motion.div
           className='absolute w-32 h-32 bg-purple-500/50 bottom-10 right-10 blur-2xl rounded-full'
           animate={{x:[-15,15,-15,15],y:[10,-10,10,-10]}}
           transition={{duration:5,repeat:Infinity,ease:"linear"}}
           >
           
           </motion.div>
           <motion.h2
           ref={textRef} 
           whileHover={{scale:1.1}}
           
           transition={{duration:1,ease:'linear'}}     
           style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
                 
                 className='relative   text-[10vw] font-extrabold uppercase tracking-tighter text-center relative z-10 leading-tight'  >
         FUTURE <span className='text-purple-500'>IS NOW</span>
         </motion.h2>
           
           <motion.div
           animate={{x:[-3,3,-3],y:[-3,3,-3]}}
           
           transition={{duration:0.1,repeat:Infinity,ease:'linear'}}     
           style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
                 
                 className='absolute top-1/2 opacity-7 text-[10vw] font-extrabold uppercase tracking-tighter text-center relative z-10 leading-tight'  >
         FUTURE IS NOW
         </motion.div>

         <motion.p
         className='text-lg text-gray-300 mt-6 max-w-2xl text-center'
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:0.5,duration:1}}
         >
         Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
   
         </motion.p>

         <motion.button
         className='mt-10 px-8 py-4 text-lg font-bold uppercase bg-purple-500 text-white transition-all hover:bg-purple-700 hover:scale-105'
         >
            Explore the Future ⚡
         </motion.button>
              
    </div>
  )
}

export default Page4
