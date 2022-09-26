/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {motion} from 'framer-motion';
import Slider from "react-slick";
import Head from 'next/head';
import Image from 'next/future/image';
import dashboardPic from '/public/dashboardpic.png'
import unmanned from '/public/unmannedWebsitePic.png'
import hprcPortfolioPic from '/public/hprcWebsitePic.png'
import hprcPublication from '/public/mypublication.png'
import myPortfolio from '/public/myhomepage.png'
import {AiFillGithub} from 'react-icons/ai';

import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'
import Navbar from './Navbar';

const Portfolio = ({scrollTop, scrollDown, scrollAbout, scrollPortfolio, scrollResume}) => {

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



  return (
    <motion.div className='h-screen bg-sky-700'>
        <Navbar color='neutral-50' scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollTop = {scrollTop} scrollResume={scrollResume}/>

        <motion.h1 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-end w-5/6 text-1xl md:text-3xl lg:text-4xl underline text-neutral-50 font-Shadows-Into-Light'>Portfolio</motion.h1>

        <Slider {...settings} id='slider' className='max-h-1/2 w-1/2 ml-auto mr-auto'>
            <motion.div className='flex justify-center' id='slide'>
                <motion.h3 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-center md:text-lg lg:text-3xl underline text-neutral-50 font-Shadows-Into-Light'>Supercomputing Dashboard</motion.h3>
                <Image src={dashboardPic} alt="Dashboard pic" className='ml-auto mr-auto'/>
                <br/>
                <motion.div id='slideicons' className='flex justify-around text-neutral-50'>
                <Link href = "https://github.tamu.edu/HPRC/OOD-Dashboard/tree/testround" scroll={false} passHref={true}>
                    <motion.a whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} id='navLink'>                    
                    <AiFillGithub size={50}/>
                    </motion.a>
                </Link>
                <br/>
                <motion.div className='font-Shadows-Into-Light'>Code public, but under {'\n'}university GitHub. {'\n'}Please reach out to see the code!</motion.div>
                </motion.div>
            </motion.div>

            <motion.div id='slide'>
                <motion.h3 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-center md:text-lg lg:text-3xl underline text-neutral-50 font-Shadows-Into-Light'>HPRC Website</motion.h3>
                <motion.div className='flex justify-center' id='slideimage'>
                <Image src={hprcPortfolioPic} alt="Website pic" />
                </motion.div>
                <br/>
                <motion.div id='slideiconsportfolio' className=' flex justify-center'>
                <motion.div className='text-neutral-50 font-Shadows-Into-Light'>Code made private under {'\n'}university research. {'\n'}Sorry about that!</motion.div>
                </motion.div>
            </motion.div>

            <motion.div id='slide'>
            <motion.h3 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-center md:text-lg lg:text-3xl underline text-neutral-50 font-Shadows-Into-Light'>12th Unmanned Team</motion.h3>
                <motion.div id='slideimage'>
                <Image src={unmanned} alt="12th unmanned pic" />
                </motion.div>
                <br/>
                <motion.div id='slideiconsportfolio' className=' flex justify-center'>
                    <motion.div className='font-Shadows-Into-Light text-neutral-50'>Code made private under {'\n'}university research. {'\n'}Sorry about that!</motion.div>
                </motion.div>
            </motion.div>

            <motion.div id='slide'>
            <motion.h3 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-center md:text-lg lg:text-3xl underline text-neutral-50 font-Shadows-Into-Light'>Portfolio Site</motion.h3>
                <motion.div id='slideimage'>
                <Image src={myPortfolio} alt="My portfolio pic" />
                </motion.div>
                <br/>
                <motion.div id='slideiconsportfolio' className='flex justify-center text-neutral-50'>
                <Link href = "https://github.com/nikhil-dronamraju/nextjsportfolio" scroll={false} passHref={true}>
                    <motion.a whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} id='navLink'>                    
                    <AiFillGithub size={50}/>
                    </motion.a>
                </Link>
                </motion.div>
            </motion.div>
            
            <motion.div id='slide'>
            <motion.h3 initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='text-center md:text-lg lg:text-3xl underline text-neutral-50 font-Shadows-Into-Light'>Publication: Cybersecurity...</motion.h3>
                <motion.div id='slideimage'>
                <Image src={hprcPublication} alt="Publication pic"/>
                </motion.div>
                <br/>
                <motion.div id='slideiconsportfolio' className='ml-auto mr-auto w-1/2 h-1/2 text-neutral-50 font-Shadows-Into-Light'>
                <motion.div>Currently being reviewed {'\n'}for BPHTE '22 Research Conference</motion.div>
                </motion.div>
            </motion.div>
            </Slider>
            <motion.div initial = {{opacity: 0}} whileInView={{opacity:1, scale:1.1}} transition = {{duration:3}} className='flex'>
                <motion.button onClick={() => {scrollDown()}} className='inline-flex w-fit ml-auto mr-auto mt-16 md:mt-24 lg:mt-0 text-xl md:text-2xl lg:text-4xl' whileHover={{scale:1.1}} whileTap={{scale:.9}}>
                    <IoIosArrowDown color='white'/>     
                </motion.button>
            </motion.div>
        </motion.div>
  )
}

export default Portfolio