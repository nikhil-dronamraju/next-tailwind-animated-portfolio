import React from 'react'
import {motion} from 'framer-motion'

const Home = ({myFunction}) => {
  return (
    <div className='border flex flex-col'>
        <motion.h1 className='text-5xl text-center'>Nikhil Dronamraju.</motion.h1>
        <motion.h3 className='border ml-20 text-center'>Full Stack Developer. Web Designer. Creator.</motion.h3>
        <motion.button onClick={() => myFunction()}>
              Click me to move down
        </motion.button>
    </div>
  )
}

export default Home