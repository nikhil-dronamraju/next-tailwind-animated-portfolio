import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/future/image';
import resume from '/public/resume.png'

const Resume = ({scrollDown, scrollTop}) => {
  return (
    <motion.div id='resume'>
        <button onClick={() => scrollUp()}>Scroll Up</button>
      <motion.h1 id='aboutmeheader' initial = {{opacity: 0}} whileInView = {{scale: 1.1, opacity: 1}} transition = {{duration: 1}}>Resume</motion.h1>
        <Image className='ml-auto mr-auto w-1/3' id='resumeImage' src= {resume} alt="NikhilResume"/>
        <button onClick={() => scrollTop()}>Scroll To Top</button>
    </motion.div>
  )
}

export default Resume