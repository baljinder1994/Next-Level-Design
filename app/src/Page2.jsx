import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Page2 = () => {

    const titleRef=useRef(null)
    const parRef=useRef(null)
    const buttonRef=useRef(null)

    useEffect(() =>{
        gsap.fromTo(
            titleRef.current,
            {opacity:0,y:50,scale:0.5},
            {
                opacity:1,
                y:0,
                scale:1,
                duration:1.5,
                scrollTrigger:{
                    trigger:titleRef.current,
                    start:"top 85%",
                    toggleActions:"play none none reverse"
                }
            }
        );

        gsap.fromTo(
            parRef.current,
            {opacity:0,x:-100},
            {
                opacity:1,
                x:0,
               ease:"power3.out",
                duration:1.5,
                scrollTrigger:{
                    trigger:parRef.current,
                    start:"top 90%",
                    toggleActions:"play none none reverse"
                }
            }
        );

        gsap.fromTo(
            buttonRef.current,
            {opacity:0,y:50,scale:0.8},
            {
                opacity:1,
                y:0,
                scale:1,
                duration:1.5,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:buttonRef.current,
                    start:"top 95%",
                    toggleActions:"play none none reverse"
                }
            }
        )

    },[])
  return (
    <div className='relative min-h-screen flex overflow-hidden flex-col items-center justify-center bg-black text-white '>
         <div className='absolute inset-0 '></div>
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
        
             <motion.div
              className='absolute top-16 text-[5vw] font-extrabold uppercase text-gray-500 opacity-20'
               animate={{x:['-100%','100%']}}
               transition={{duration:10,repeat:Infinity,ease:'linear'}}
             
             >
               FUTURE TECHNOLOGY ⚡ INNOVATION DESIGN  
               </motion.div>

               <motion.h2
               ref={titleRef}
               style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
            
               className='text-[6vw] font-extrabold uppercase text-center text-white relative z-10'
               >
                <span className='text-purple-500'>BREAK</span> THE LIMITS
               </motion.h2>

               <motion.p
               ref={parRef}
               className='text-lg text-gray-300 mt-6 z-10 max-w-2xl text-center'
               >
                Welcome to the future of web experinces. We blend **art, technology, and motion** to create **mind-blowing digital world.**
               </motion.p>

               <motion.div
               animate={{y:[-20,20,-20]}}
               transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
                className='absolute w-1 h-48 bg-gradient-to-b from-purple-400 to-transparent md:left-[20%] left-[5%] bottom-[10%] rotate-12'
              
               >
               
               </motion.div>

               <motion.div
                 animate={{y:[-30,30,-30]}}
                 transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
                
                 className='absolute w-1 h-56 bg-gradient-to-b from-blue-400 to-transparent md:right-[15%] right-[10%] bottom-[7%] -rotate-12'
                ></motion.div>

                <motion.button
                ref={buttonRef}
                 className='mt-10 px-8 py-4 text-lg font-bold uppercase bg-purple-500 text-white transition-all hover:bg-purple-700 hover:scale-105'
                >
                    Join The Revolution 🚀
                </motion.button>
            
    </div>
  )
}

export default Page2
