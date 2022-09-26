import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/future/image';
import resume from '/public/resume.png'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosHome } from 'react-icons/io';
import Navbar from './Navbar';
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, 
  TbTerminal2, TbBrandPython, TbBrandNextjs,
  TbBrandVercel,TbBrandTailwind, TbBrandBootstrap, 
  TbBrandFigma, TbBrandGit, TbBrandGithub, TbBrandSlack} from 'react-icons/tb'

import {SiRubyonrails, SiReact, SiFramer, SiJquery, SiNodedotjs, 
  SiMongodb, SiPostgresql, SiPrisma, SiTrello} from 'react-icons/si'

const Resume = ({scrollUp, scrollTop, scrollAbout, scrollPortfolio, scrollResume}) => {
  return (
    <motion.div id='resume' className='bg-red-500 flex flex-col'>
        <Navbar color='white' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>
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
        <div id='iconscontainer' className='text-white font-Shadows-Into-Light mt-10'>
            <motion.h2 className=' underline text-center' initial = {{opacity: 0}} whileInView = {{opacity: 1}}>Tech Stack: </motion.h2>
            <motion.div className='flex justify-evenly'>
              <TbBrandHtml5 size={30}/> <TbBrandCss3 size={30}/> <TbBrandJavascript size={30}/> 
              <TbTerminal2 size={30}/> <TbBrandPython size={30}/> <TbBrandNextjs size={30}/>
              <TbBrandVercel size={30}/> <TbBrandTailwind size={30}/> <TbBrandBootstrap size={30}/>
              <TbBrandFigma size={30}/> <TbBrandGit size={30}/> <TbBrandGithub size={30}/> <TbBrandSlack size={30}/>
              <SiRubyonrails size={30}/> <SiReact size={30}/> <SiFramer size={30}/> <SiJquery size={30}/> <SiNodedotjs size={30}/>
              <SiMongodb size={30}/> <SiPostgresql size={30}/> <SiPrisma size={30}/> <SiTrello size={30}/>
            </motion.div>
            <motion.div className='flex justify-center'>
            <motion.button classView='pt-24' onClick={() => {scrollDown()}} whileHover={() => {{scale:1.1}}}>
              <IoIosArrowDown className='text-white text-xl md:text-2xl lg:text-4xl'/>
            </motion.button>   
          </motion.div> 
          </div>
    </motion.div>
    
  )
}

export default Resume