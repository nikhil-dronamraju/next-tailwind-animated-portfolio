import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/future/image';
import resume from '/public/resume.png'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosHome } from 'react-icons/io';

const Resume = ({scrollUp, scrollTop}) => {
  return (
    <motion.div id='resume' className='bg-red-500 h-screen flex flex-col'>
        <motion.div className='flex'>
          <motion.button onClick={() => {scrollUp()}} className='inline-flex ml-auto mr-auto w-fit text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
              <IoIosArrowDown color='white' transform='rotate(180)'/>     
          </motion.button>      
        </motion.div>        
        <motion.h1 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-end w-5/6 text-1xl md:text-3xl lg:text-4xl underline text-slate-50 font-Shadows-Into-Light'>Resume/CV</motion.h1>
        <Image className='ml-auto mr-auto w-1/3' id='resumeImage' src= {resume} alt="NikhilResume"/>
        <motion.div className='flex'>
          <motion.button onClick={() => {scrollTop()}} className='inline-flex ml-auto mr-auto w-fit mt-2 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
              <IoIosHome color='white'/>     
          </motion.button>      
        </motion.div>
    </motion.div>
    
  )
}

export default Resume