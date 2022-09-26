import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/future/image';
import resume from '/public/resume.png'
import Navbar from './Navbar';
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, 
  TbTerminal2, TbBrandPython, TbBrandNextjs,
  TbBrandVercel,TbBrandTailwind, TbBrandBootstrap, 
  TbBrandFigma, TbBrandGit, TbBrandGithub, TbBrandSlack} from 'react-icons/tb'

import {SiRubyonrails, SiReact, SiFramer, SiJquery, SiNodedotjs, 
  SiMongodb, SiPostgresql, SiPrisma, SiTrello} from 'react-icons/si'

  import { IoIosArrowUp } from 'react-icons/io';

const Resume = ({scrollUp, scrollTop, scrollAbout, scrollPortfolio, scrollResume}) => {
  return (
    <motion.div id='resume' className='bg-red-500 h-screen'>
        <Navbar color='white' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>     
        <motion.h1 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-end w-5/6 text-1xl md:text-3xl lg:text-4xl underline text-slate-50 font-Shadows-Into-Light'>Resume/CV</motion.h1>
        
        <motion.div id='iconscontainer' className='text-white font-Shadows-Into-Light mt-10 flex justify-evenly'>

            <motion.div className='inline-flex flex-col ml-8'>
            <motion.h2 className=' underline text-center text-xs md:text-2xl lg:text-2xl' initial = {{opacity: 0}} whileInView = {{opacity: 1}}>Tech Stack: </motion.h2>
            <motion.div initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='grid grid-cols-8 lg:grid-cols-4 mt-4'>
              <TbBrandHtml5 className='text-xs md:text-xl'/> <TbBrandCss3 className='text-xs md:text-xl'/> <TbBrandJavascript className='text-xs md:text-xl'/> 
              <TbTerminal2 className='text-xs md:text-xl'/> <TbBrandPython className='text-xs md:text-xl'/> <TbBrandNextjs className='text-xs md:text-xl'/>
              <TbBrandVercel className='text-xs md:text-xl'/> <TbBrandTailwind className='text-xs md:text-xl'/> <TbBrandBootstrap className='text-xs md:text-xl'/>
              <TbBrandFigma className='text-xs md:text-xl'/> <TbBrandGit className='text-xs md:text-xl'/> <TbBrandGithub className='text-xs md:text-xl'/> <TbBrandSlack className='text-xs md:text-xl'/>
              <SiRubyonrails className='text-xs md:text-xl'/> <SiReact className='text-xs md:text-xl'/> <SiFramer className='text-xs md:text-xl'/> <SiJquery className='text-xs md:text-xl'/> <SiNodedotjs className='text-xs md:text-xl'/>
              <SiMongodb className='text-xs md:text-xl'/> <SiPostgresql className='text-xs md:text-xl'/> <SiPrisma className='text-xs md:text-xl'/> <SiTrello className='text-xs md:text-xl'/>
            </motion.div> 
            </motion.div>
            <div className='inline-flex w-3/4'>
            <Image className='ml-auto mr-auto w-1/3 md:w-1/4' id='resumeImage' src= {resume} alt="NikhilResume"/>
            </div>
        </motion.div>
        <motion.div className='flex' initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}}>
          <motion.button onClick={() => {scrollTop()}} className='inline-flex w-fit ml-auto mr-auto mt-16 md:mt-12 lg:mt-12 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
            <IoIosArrowUp color='white'/>     
          </motion.button>
        </motion.div>

    </motion.div>
    
  )
}

export default Resume