import React from 'react'
import {motion} from 'framer-motion'
const Page1 = () => {
  return (
    <div className='relative min-h-screen  flex flex-col items-center justify-center bg-black text-white '>
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 via-black to-blue-500/20 blur-2xl opacity-50'></div>
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

     <motion.h1
      style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
      
      className='text-[8vw] font-extrabold uppercase tracking-tighter text-center relative z-10 leading-tight'
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,ease:"easeOut"}}
      whileHover={{scale:1.05,rotate:-2}}
     >UNLEASH  <span className='text-purple-500'>THE POWER</span></motion.h1>
    <motion.p
     initial={{opacity:0,x:50}}
     animate={{opacity:1,x:0}}
     transition={{duration:1,ease:"easeOut"}}
     className='text-xl tetxt-gray-400 mt-4 z-10'
    >Transforming visions into digital reality.</motion.p>
   
   <motion.div className='flex space-x-6 mt-6 z-10'>
   <motion.button
   whileHover={{scale:1.1}}
    className='px-6 py-3 text-lg transition font-bold bg-purple-600 text-white shadow-lg hover:bg-purple-500 z-10'
   >
    Get Started
    </motion.button>

    <motion.button
   whileHover={{scale:1.1}}
    className='px-6 py-3 text-lg  transition font-bold bg-transparent border broder-gray-500 text-white shadow-lg hover:bg-gray-800 z-10'
   >
    Learn More
    </motion.button>

    </motion.div>
   
    </div>
  )
}

export default Page1
