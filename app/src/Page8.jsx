import React from 'react'
import {motion} from 'framer-motion'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
const Page8 = () => {
  return (
    <div className='relative w-full bg-black text-white py-16 px-6  md:px-16 overflow-hidden'>
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

                 <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between  items-center text-center md:text-left'>
                    <motion.div
                    className='space-y-4'
                    >
                        <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-wide'><span className='text-purple-500'>DigiBal</span> ✨</h2>
                   <p className='max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed'>Step into the **next-gen** digital world, where **design, motion, and innovation** redefine the future. The possibilities? **Limitless.**
                   </p>
                    </motion.div>

                    <motion.div>
                       

                        <div className='flex space-x-4 text-gray-400 text-xl'>
                            <a href="#" className='hover:text-purple-400'><FaFacebook/></a>
                            <a href="#" className='hover:text-purple-400'><FaInstagram/></a>
                            <a href="#" className='hover:text-purple-400'><FaTwitter/></a>
                            <a href="#" className='hover:text-purple-400'><FaGithub/></a>
                        </div>
                    </motion.div>
                 </div>

                <div className='mt-10 text-center text-gray-500 text-xs md:text-sm'>
                    &copy; DigiBal. All rights reserved</div>
    </div>
  )
}

export default Page8
