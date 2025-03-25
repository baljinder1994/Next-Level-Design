import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Page5 = () => {
    const controls= useAnimation()
    const {ref,inView} =useInView({triggerOnce:false,threshold:0.2})

    useEffect(() =>{
        if(inView){
            controls.start("visible")
        }else{
            controls.start("hidden")
        }
    },[controls,inView])

    return (
    <div ref={ref} className='relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden'>
       
       <div className='absolute inset-0 flex items-center justify-center overflow-hidden'>
        {[...Array(6)].map((_,i) =>(
            <motion.div
             key={i}
             animate={{scale:[0.4,1.5],opacity:[0,1]}}
             transition={{
                duration:2.5 + i * 0.4,
                repeat:Infinity,
                repeatType:"reverse",
                ease:"easeInOut"
             }}
             className='absolute w-[90vw] h-[90vw] border-2 border-purple-500 rounded-full '
            >

            </motion.div>
        ))}
       </div>

       <motion.h2
       className='text-[6vw] font-extrabold uppercase text-white z-10'
       style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
        initial="hidden"
       animate={controls}
         variants={{
            hidden:{opacity:0,y:100,scale:0.5},
            visible:{opacity:1,y:0,scale:1},


         }}
         transition={{duration:1.5,ease:"easeOut"}}
       >
        <span>BEYOND</span> REALITY
       </motion.h2>

       <motion.p
        initial="hidden"
        animate={controls}
          variants={{
             hidden:{opacity:0,x:-100},
             visible:{opacity:1,x:0},
 
 
          }}
          transition={{duration:1.5,delay:0.3}}
        
        className='text-lg text-gray-300 mt-6 z-10 max-w-2xl text-center'

       >
       Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
    
       </motion.p>

       <motion.button

initial="hidden"
animate={controls}
  variants={{
     hidden:{opacity:0,y:50},
     visible:{opacity:1,y:0},


  }}
  transition={{duration:1.5,delay:0.6}}
  
       className='mt-10 px-8 py-4 text-lg font-bold uppercase bg-purple-500 text-white hover:bg-purple-700 hover:scale-105'
       >
        EXPLORE THE FUTURE  🌟
       </motion.button>
    </div>
  )
}

export default Page5
