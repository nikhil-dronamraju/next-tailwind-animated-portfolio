import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import {MdHome} from "react-icons/md";
import {MdPerson} from "react-icons/md";
import {MdWork} from "react-icons/md";
import {FaClipboard} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = ({color, scrollTop}) => {

  return (
        <motion.nav className={`flex justify-evenly text-${color}`} initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2}} id='topBar'>
            <Link href = "/" scroll = {true}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='navLink'>
                    <MdHome size={30}/>
                </motion.a>
            </Link>
            <Link href = "/#aboutme" scroll={false}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='navLink' >
                    <MdPerson size={30}/>
                </motion.a>
            </Link>
            <Link href = "/#portfolio" scroll={false}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='navLink'>                    
                <MdWork size={30}/>
                </motion.a>
            </Link>
            <Link href = "/#resume" scroll={false}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='navLink'>                    
                <FaClipboard size={30}/></motion.a>
            </Link>

            <Link href = "https://github.com/nikhil-dronamraju" scroll={false} passHref={true}>
                <motion.a whileHover={{opacity: 1, scale: 1.3}} whileTap = {{scale: 0.9}} id='navLink'>                    
                <FaGithub size={30}/></motion.a>
            </Link>
        </motion.nav>
  )
}

export default Navbar