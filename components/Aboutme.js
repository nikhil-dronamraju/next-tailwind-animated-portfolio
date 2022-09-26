/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/future/image'
import myPic from '/public/cartoonIcon.jpg'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'

const Aboutme = ({scrollUp, scrollDown}) => {
  return (
    <div className='h-screen bg-sky-300'>
    <div className='flex flex-col'>
      <motion.button onClick={() => scrollUp()}>
          <IoIosArrowDown className='ml-auto mr-auto mt-16 text-xl md:text-2xl lg:text-4xl text-zinc-800' style = {{transform: 'rotate(180deg)' }}/>
      </motion.button>        
        <h4 className='text-end ml-auto mr-auto w-3/4 pb-5 text-2xl md:text-4xl text-zinc-600 underline'>About Me</h4>
         <div className='bg-zinc-200 w-5/6 ml-auto mr-auto border border-zinc-500 shadow-2xl inline-flex justify-around'>
            <Image className='border w-1/2 h-1/2 lg:w-1/4 lg:h-1/4' src={myPic} alt='cartoon Nikhil Dronamraju'/>
            <div className='w-3/5 ml-auto mr-auto text-[7.5px] ali md:text-[16px] lg:text-[16px]'>
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
              <motion.div id='aboutmeiconscontainer' className='flex text-5xl justify-evenly md:mt-4' initial = {{opacity: 0}} whileInView = {{ opacity: 1}} transition = {{duration: 2, delay: 1}}>
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
         </div>
    </div>
    <div className='w-screen flex justify-center pt-48'>
    <motion.button onClick={() => scrollDown()}>
          <IoIosArrowDown className='text-xl md:text-2xl lg:text-4xl text-zinc-800'/>
        </motion.button>  
    </div>
    </div>
  )
}

export default Aboutme