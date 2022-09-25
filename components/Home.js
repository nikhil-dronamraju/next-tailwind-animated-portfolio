import React from 'react'
import {motion} from 'framer-motion'
import {IoIosArrowDown} from 'react-icons/io'

const Home = ({myFunction}) => {
  
  const parent = {

    hidden: {
      opacity: 0
    },

    show: {
      opacity: 1,
      transition:{staggerChildren:.1}
    }
  }

  const child = {

    hidden:{
      opacity: 0
    },

    show:{
      opacity: 1,
    }
  }

  const parent2 = {

    hidden: {
      opacity: 0
    },

    show: {
      opacity: 1,
      transition:{staggerChildren:.2, delay: 1}
    }
  }

  const child2 = {

    hidden:{
      opacity: 0
    },

    show:{
      opacity: 1,
    }
  }

  const myName = 'Nikhil Dronamraju'
  const myNameAsArray = myName.split("")
  //console.log(myNameAsArray)
  const myNameAutoFill = myNameAsArray.map(
    (letter, index) => {
      //console.log(`myName ${index}`)
      return (
        <motion.span key={`myName ${index}`} variants={child}>{letter}</motion.span>
      )
    }
  )
  const myTitle = 'Full Stack Developer. Designer. Creator.'
  const myTitleAsArray = myTitle.split("")
  //console.log(myNameAsArray)
  const myTitleAutoFill = myTitleAsArray.map(
    (letter, index) => {
      //console.log(`myName ${index}`)
      return (
        <motion.span key={`myTitle ${index}`} variants={child2}>{letter}</motion.span>
      )
    }
  )
  return (
    <div className='border flex flex-col h-screen bg-zinc-400'>
        <motion.h1 className='text-4xl md:text-6xl lg:text-8xl text-center pt-36 text-slate-50' variants={parent} initial='hidden' animate={'show'}>{myNameAutoFill}</motion.h1>
        <motion.h1 className='text-1xl md:text-2xl lg:text-3xl text-center text-sky-300' variants={parent2} initial='hidden' animate={'show'}>{myTitleAutoFill}</motion.h1>
        <motion.button onClick={() => myFunction()}>
              <IoIosArrowDown color='white' className='ml-auto mr-auto mt-32 text-xl md:text-2xl lg:text-4xl'/>
        </motion.button>
    </div>
  )
}

export default Home