import React from 'react'
import {motion} from 'framer-motion'
import {IoIosArrowDown} from 'react-icons/io'
import Navbar from './Navbar'

const Home = ({scrollDown, scrollAbout, scrollResume, scrollPortfolio, scrollTop}) => {
  
  const parent = {
    hidden: {opacity: 0},
    show: {opacity: 1,transition:{staggerChildren:.05}}
  }

  const child = {
    hidden:{opacity: 0},
    show:{opacity: 1}
  }

  const parent2 = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition:{staggerChildren:.1}}
  }

  const child2 = {
    hidden:{opacity: 0},
    show:{opacity: 1}
  }

  const myName = 'Nikhil Dronamraju'
  const myNameAsArray = myName.split("")

  const myNameAutoFill = myNameAsArray.map(
    (letter, index) => {
      return (
        <motion.span key={`myName ${index}`} variants={child}>{letter}</motion.span>
      )
    }
  )
  const myTitle = 'Full Stack Developer. Designer. Creator.'
  const myTitleAsArray = myTitle.split("")
  const myTitleAutoFill = myTitleAsArray.map(
    (letter, index) => {
      return (
        <motion.span key={`myTitle ${index}`} variants={child2}>{letter}</motion.span>
      )
    }
  )
  return (
  <div id='home' className='flex flex-col w-fill h-screen bg-zinc-600'>
        <Navbar color='white' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>
        <motion.h1 className='text-4xl md:text-6xl lg:text-8xl text-center pt-36 text-slate-50 font-Bilbo' variants={parent} initial='hidden' whileInView={'show'}>{myNameAutoFill}</motion.h1>
        <motion.h1 className='text-1xl md:text-2xl lg:text-4xl text-center text-sky-200 pr-16 md:pr-24 lg:pr-32 font-Shadows-Into-Light' variants={parent2} initial='hidden' whileInView={'show'}>{myTitleAutoFill}</motion.h1>
        <motion.div initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='flex w-1/2 relative left-1/4'>
          <motion.button onClick={() => {scrollDown()}} className='inline-flex w-fit ml-auto mr-auto mt-16 md:mt-24 lg:mt-32 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
            <IoIosArrowDown color='white'/>     
          </motion.button>
      </motion.div>
    </div>
  )
}

export default Home