/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/future/image'
import myPic from '/public/cartoonIcon.jpg'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Aboutme = ({scrollUp, scrollDown}) => {
  return (
    <div className='border flex flex-col'>
        <button onClick={() => scrollUp()}>Scroll Up</button>
        <h4 className='text-end w-3/4 underline'>About Me</h4>
         <div className='border border-black inline-flex justify-around'>
            <Image className='border w-1/4 h-1/4' src={myPic} alt='cartoon Nikhil Dronamraju'/>
            <div className='border w-1/2 h-1/2 text-xs'>
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
              <motion.div id='aboutmeiconscontainer' initial = {{opacity: 0}} whileInView = {{ opacity: 1}} transition = {{duration: 2, delay: 1}}>
                <Link href='https://www.youtube.com/channel/UCwDfN0ThzGiaQjV6pgKG-pQ' passHref={true}>
                  <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='aboutmelink'>
                    <AiFillYoutube size={100} id='icon'/>
                  </motion.a>
                </Link>

                <Link href='https://www.linkedin.com/in/nikhil-dronamraju-154818144/' passHref={true}>
                  <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='aboutmelink'>
                    <AiFillLinkedin size={100} id='icon'/>
                  </motion.a>
                </Link>
              </motion.div>        
            </div>
         </div>
        <button onClick={() => scrollDown()}>Scroll Down</button>
    </div>
  )
}

export default Aboutme