import React, { useRef,useEffect } from 'react'
import {motion} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const Page3 = () => {

     const sectionRef=useRef(null)
        const contentRef=useRef(null)

        useEffect(() =>{
                gsap.fromTo(
                    contentRef.current,
                    {opacity:0,x:-100},
                    {
                        opacity:1,
                        x:0,
                        
                        duration:1.5,
                        ease:"power4.out",
                        scrollTrigger:{
                            trigger:contentRef.current,
                            start:"top 85%",
                            toggleActions:"play none none reverse"
                        }
                    }
                );
        
                gsap.fromTo(
                    sectionRef.current,
                    {opacity:0,x:-100},
                    {
                      opacity:1,
                        x:0,
                       ease:"power3.out",
                        duration:1.5,
                        scrollTrigger:{
                            trigger:sectionRef.current,
                            start:"top 90%",
                            toggleActions:"play none none reverse"
                        }
                    }
                );
        
               
        
            },[])
        
  return (
    <div className='relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black text-white px-10 overflow-hidden'>
      <motion.div
      ref={contentRef}
      className='lg:w-1/2 text-center lg:text-left space-y-6'
      >
        <h2
         ref={sectionRef}
          style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
    
        className='text-[5vw] font-extrabold uppercase'
        ><span className='text-purple-500'>INNOVATE</span> BEYOND LIMITS
        </h2>

        <motion.p
        className='text-lg text-gray-300'
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.5,duration:1}}
        >
            **Rwvolution design meets technology.**
            Step into the future with **next-level** animations, sleek UI, and interactions.
        </motion.p>

        <motion.button
        className='mt-6 px-8 py-4 text-lg font-bold uppercase bg-purple-500 text-white transition-all hover:bg-purple-700 hover:scale-105'
        >Discover More 🔥</motion.button>
      </motion.div>

      <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
        <motion.div
        animate={{y:[0,-10,0]}}
        transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
         className='relative w-80 h-80 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl flex items-center justify-center border-2 border-purple-500/30'
        >
            <motion.div
             className='absolute w-28 h-28 bg-purple-500/30 backdrop-blur-md rounded-full flex items-center justify-center text-4xl font-bold text-white'
             whileHover={{scale:1.2,rotate:10}}
             transition={{duration:0.5}}
            >
            ✨
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page3
