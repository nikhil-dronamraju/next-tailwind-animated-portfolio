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
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, 
        TbTerminal2, TbBrandPython, TbBrandNextjs,
        TbBrandVercel,TbBrandTailwind, TbBrandBootstrap, 
        TbBrandFigma, TbBrandGit, TbBrandGithub, TbBrandSlack} from 'react-icons/tb'
      
import {SiRubyonrails, SiReact, SiFramer, SiJquery, SiNodedotjs, 
        SiMongodb, SiPostgresql, SiPrisma, SiTrello} from 'react-icons/si'

import Link from 'next/link'

const Portfolio = ({scrollDown, scrollUp}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const styles = {maxWidth: '100%', height: 'auto'}

  return (
    <motion.div className='w-full min-h-full'>
        <Slider id='slider' {...settings}>

<motion.div id='slide'>
  <motion.h3 id='slidetitle'>Supercomputing Dashboard</motion.h3>
    <motion.div id='slideimage' whileHover={{scale: 1.1}} whileTap={{scale:.9}}>
      <Image src={dashboardPic} alt="Dashboard pic" style={styles}/>
    </motion.div>
    <br/>
    <motion.div id='slideicons'>
      <Link href = "https://github.tamu.edu/HPRC/OOD-Dashboard/tree/testround" scroll={false} passHref={true}>
        <motion.a whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} id='navLink'>                    
          <AiFillGithub size={50}/>
        </motion.a>
      </Link>
      <br/>
      <pre>Code public, but under {'\n'}university GitHub. {'\n'}Please reach out to see the code!</pre>
    </motion.div>
  </motion.div>

  <motion.div id='slide'>
    <motion.h3 id='slidetitle'>HPRC Website</motion.h3>
    <motion.div id='slideimage' whileHover={{scale: 1.1}} whileTap={{scale:.9}}>
      <Image src={hprcPortfolioPic} alt="Website pic" style={styles}/>
    </motion.div>
    <br/>
    <motion.div id='slideiconsportfolio'>
      <pre>Code made private under {'\n'}university research. {'\n'}Sorry about that!</pre>
    </motion.div>
  </motion.div>

  <motion.div id='slide'>
  <motion.h3 id='slidetitle'>12th Unmanned Team</motion.h3>
    <motion.div id='slideimage' whileHover={{scale: 1.1}} whileTap={{scale:.9}}>
      <Image src={unmanned} alt="12th unmanned pic" style={styles}/>
    </motion.div>
    <br/>
    <motion.div id='slideiconsportfolio'>
        <pre>Code made private under {'\n'}university research. {'\n'}Sorry about that!</pre>
    </motion.div>
  </motion.div>

  <motion.div id='slide'>
  <motion.h3 id='slidetitle'>Portfolio Site</motion.h3>
    <motion.div id='slideimage' whileHover={{scale: 1.1}} whileTap={{scale:.9}}>
      <Image src={myPortfolio} alt="My portfolio pic" style={styles}/>
    </motion.div>
    <br/>
    <motion.div id='slideiconsportfolio'>
    <Link href = "https://github.com/nikhil-dronamraju/nextjsportfolio" scroll={false} passHref={true}>
        <motion.a whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} id='navLink'>                    
          <AiFillGithub size={50}/>
        </motion.a>
      </Link>
    </motion.div>
  </motion.div>
  
  <motion.div id='slide'>
  <motion.h3 id='slidetitle'>Publication: Cybersecurity...</motion.h3>
    <motion.div id='slideimage' whileHover={{scale: 1.1}} whileTap={{scale:.98}}>
      <Image src={hprcPublication} alt="Publication pic" style={styles}/>
    </motion.div>
    <br/>
    <motion.div id='slideiconsportfolio'>
      <pre>Currently being reviewed {'\n'}for BPHTE '22 Research Conference</pre>
    </motion.div>
  </motion.div>
</Slider>
      <button onClick={() => scrollUp()}>Scroll Up</button>
      <motion.h1 className='text-end w-5/6 underline' initial = {{opacity: 0}} whileInView = {{scale: 1.1, opacity: 1}} transition = {{duration: 1}}>Portfolio</motion.h1>

          <motion.div className='border' id='iconscontainer'>
            <motion.h2 className='underline' initial = {{opacity: 0}} whileInView = {{opacity: 1}}>Tech Stack: </motion.h2>
            <motion.div className='flex justify-evenly'>
              <TbBrandHtml5 size={30}/> <TbBrandCss3 size={30}/> <TbBrandJavascript size={30}/> 
              <TbTerminal2 size={30}/> <TbBrandPython size={30}/> <TbBrandNextjs size={30}/>
              <TbBrandVercel size={30}/> <TbBrandTailwind size={30}/> <TbBrandBootstrap size={30}/>
              <TbBrandFigma size={30}/> <TbBrandGit size={30}/> <TbBrandGithub size={30}/> <TbBrandSlack size={30}/>
              <SiRubyonrails size={30}/> <SiReact size={30}/> <SiFramer size={30}/> <SiJquery size={30}/> <SiNodedotjs size={30}/>
              <SiMongodb size={30}/> <SiPostgresql size={30}/> <SiPrisma size={30}/> <SiTrello size={30}/>
            </motion.div>
          </motion.div>
      <button onClick={() => scrollDown()}>Scroll Down</button>
    </motion.div>
  )
}

export default Portfolio