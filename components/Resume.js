import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/future/image';
import resume from '/public/resume-nikhil.png'
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
    <motion.div id='resume' className='bg-red-700 h-screen w-screen'>
        <Navbar color='white' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>     
        <motion.h1 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-start w-5/6 ml-auto mr-auto text-1xl md:text-3xl lg:text-4xl underline text-white font-Shadows-Into-Light'>Resume/CV</motion.h1>
        
        <motion.div id='iconscontainer' className='text-white font-Shadows-Into-Light mt-10 flex justify-evenly '>

            <motion.div className='inline-flex flex-col ml-8  w-1/3'>
            <motion.h2 className=' underline text-center text-xs md:text-2xl lg:text-2xl' initial = {{opacity: 0}} whileInView = {{opacity: 1}}>Tech Stack: </motion.h2>
            <motion.div initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='justify-items-center h-1/2 inline-grid grid-cols-8 md:grid-cols-6 lg:grid-cols-4 mt-8'>
              <TbBrandHtml5 className='text-xs md:text-xl lg:text-3xl'/> <TbBrandCss3 className='text-xs md:text-xl lg:text-3xl'/> <TbBrandJavascript className='text-xs md:text-xl lg:text-3xl'/> 
              <TbTerminal2 className='text-xs md:text-xl lg:text-3xl'/> <TbBrandPython className='text-xs md:text-xl lg:text-3xl'/> <TbBrandNextjs className='text-xs md:text-xl lg:text-3xl'/>
              <TbBrandVercel className='text-xs md:text-xl lg:text-3xl'/> <TbBrandTailwind className='text-xs md:text-xl lg:text-3xl'/> <TbBrandBootstrap className='text-xs md:text-xl lg:text-3xl'/>
              <TbBrandFigma className='text-xs md:text-xl lg:text-3xl'/> <TbBrandGit className='text-xs md:text-xl lg:text-3xl'/> <TbBrandGithub className='text-xs md:text-xl lg:text-3xl'/> <TbBrandSlack className='text-xs md:text-xl lg:text-3xl'/>
              <SiRubyonrails className='text-xs md:text-xl lg:text-3xl'/> <SiReact className='text-xs md:text-xl lg:text-3xl'/> <SiFramer className='text-xs md:text-xl lg:text-3xl'/> <SiJquery className='text-xs md:text-xl lg:text-3xl'/> <SiNodedotjs className='text-xs md:text-xl lg:text-3xl'/>
              <SiMongodb className='text-xs md:text-xl lg:text-3xl'/> <SiPostgresql className='text-xs md:text-xl lg:text-3xl'/> <SiPrisma className='text-xs md:text-xl lg:text-3xl'/> <SiTrello className='text-xs md:text-xl'/>
            </motion.div> 
            </motion.div>
            <motion.div whileHover={{scale:1.1}} transition = {{duration:1}} className='inline-flex w-fit relative bottom-1/4'>
            <Image className='ml-auto mr-auto w-5/6' src= {resume} alt="NikhilResume"/>
            </motion.div>
        </motion.div>
        <motion.div className='relative bottom-5 flex items-start h-fit w-1/2 left-1/4' initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}}>
          <motion.button onClick={() => {scrollTop()}} className='inline-flex w-fit ml-auto mr-auto mt-16 md:mt-12 lg:mt-4 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
            <IoIosArrowUp color='white'/>     
          </motion.button>
        </motion.div>

    </motion.div>
    
  )
}

export default Resume