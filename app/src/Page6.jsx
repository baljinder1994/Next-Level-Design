import React from 'react'
import {motion} from 'framer-motion'
const Page6 = () => {
  return (
    <div className='relative flex flex-col min-h-screen items-center justify-center text-white bg-black px-6 py-16 md:py-24  overflow-hidden'>
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
                             
                              
                                  
                              style={{textShadow:"4px 4px 20px rgba(128,0,255,0.8), -4px -4px 20px rgba(0,183,255,0.8)"}}
                                    
                                    className='relative   text-[8vw] md:text-[6vw] font-extrabold uppercase tracking-tighter text-center relative z-10 leading-tight'  >
                            NEXT LEVEL <span className='text-purple-500'>EXPERIENCE</span>
                            </motion.h2>

                            <motion.div
                            
                            className='relative w-full max-w-6xl md:space-x-6 px-4 mt-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'
                            >
                                <motion.div
                                whileHover={{scale:1.05,rotate:3}}
                                className='w-full md:w-1/2 p-4 rounded-lg border border-purple-500'
                                >
                                    <img src='img.png'
                                    className='rounded-lg object-cover w-ful'
                                    ></img>
                                </motion.div>

                                <motion.div
                                className='w-full md:w-1/2 text-gray-300 text-lg leading-relaxed text-center md:text-left'
                                >
                                    <p
                                    
                                    >
                                    Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
                                    Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
                                    Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
    
                                    </p>
                                    <p className='mt-4 text-purple-500 font-bold'>Embrance the future. It's here. 🚀</p>
                                </motion.div>
                            </motion.div>

                             <motion.button
                             initial={{opacity:0,y:20}}
                             animate={{opacity:1,y:0}}
                             transition={{duration:0.5}}
                             whileHover={{scale:1.1,rotate:2}}
                                     className='mt-10 px-8 py-4 text-lg font-bold uppercase bg-purple-500 text-white transition-all hover:bg-purple-700 hover:scale-105'
                                     >
                                        Explore the Future ⚡
                                     </motion.button>
      
    </div>
  )
}

export default Page6
