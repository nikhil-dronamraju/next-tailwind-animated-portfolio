/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/future/image'
import myPic from '/public/cartoonIcon.JPG'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'
import Navbar from './Navbar'

const Aboutme = ({scrollTop, scrollAbout, scrollPortfolio, scrollResume, scrollDown}) => {
  return (
    <div id='about' className='h-screen bg-orange-500'>
      <Navbar color='black' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>
        <motion.h1 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-end w-5/6 text-1xl md:text-3xl lg:text-4xl underline text-black font-Shadows-Into-Light'>About Me</motion.h1>
        
        <div className='inline-flex flex-col h-fit-content'>
        <motion.div id='aboutmebody' initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className = 'bg-zinc-300 shadow-2xl border border-black mt-4 md:mt-6 lg:mt-8 font-Shadows-Into-Light inline-flex w-5/6 m-auto'>

          <Image src={myPic} alt='cartoon Nikhil Dronamraju' className=' w-1/4 h-1/4 lg:w-1/4'/>

          <div className='flex flex-col justify-evenly '>
          <motion.div className='lg:mt-4 w-5/6 h-1/2 ml-auto mr-auto text-center text-[6px] md:text-[11px] lg:text-[14px]'>
              My name is Nikhil Dronamraju. I'm currently a graduating Industrial Engineering major{'\n'}
              at Texas A&M
              University, and a front-end intern at their High Performance Research{'\n'}
              Computing Department.
              I also make EDM music; check out my YouTube channel!
              {'\n'}
              {'\n'} 
              A couple years ago, I realized developing websites was what I wanted to do. Since then,{'\n'}
              I've thrown myself into learning everything I could about design and responsive{'\n'}
              development, and made this site to showcase my portfolio.
            If you like what you see,{'\n'}
            please don't hesitate to reach out. Maybe we can create something together! 
           </motion.div>

            <motion.div id='aboutmeiconscontainer' className='lg:mb-8 flex justify-evenly mt-auto mr-auto text-2xl md:text-4xl lg:text-5xl w-full'>
              <Link href='https://www.youtube.com/channel/UCwDfN0ThzGiaQjV6pgKG-pQ' passHref={true}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='aboutmelink'>
                  <AiFillYoutube id='icon'/>
                </motion.a>
              </Link>

              <Link href='https://www.linkedin.com/in/nikhil-dronamraju-154818144/' passHref={true}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='aboutmelink'>
                  <AiFillLinkedin id='icon'/>
                </motion.a>
              </Link>
            </motion.div>  
          </div>      
          </motion.div>
  </div>
    <motion.div initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='flex'>
      <motion.button onClick={() => {scrollDown()}} className='inline-flex w-fit ml-auto mr-auto mt-16 md:mt-24 lg:mt-32 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
        <IoIosArrowDown color='black'/>     
      </motion.button>
    </motion.div>
  </div>
  )
}

export default Aboutme