import React from 'react'
import {animate, motion} from 'framer-motion'
import Link from 'next/link';
import {MdHome} from "react-icons/md";
import {MdPerson} from "react-icons/md";
import {MdWork} from "react-icons/md";
import {FaClipboard} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = ({color, scrollTop, scrollAbout, scrollPortfolio, scrollResume}) => {
    
    const navGitHub = (e) => {
        e.preventDefault();
        window.open('https://github.com/nikhil-dronamraju')
    }

    const navArray = [
        {
            icon: <MdHome size={30}/>,
            func: scrollTop
        },

        {
            icon:<MdPerson size={30}/>,
            func:scrollAbout
        },

        {
            icon:<MdWork size={30}/>,
            func:scrollPortfolio
        },
        {
            icon:<FaClipboard size={30}/>,
            func:scrollResume
        },
        {
            icon:<FaGithub size={30}/>,
            func:navGitHub
        }
    ]

    const parent = {
        initial: {opacity: 0},
        animate:{opacity:1, transition:{staggerChildren:.5}}
    }

    const child = {
        initial:{opacity:0},
        animate:{opacity:1}
    }

    const navReturn = navArray.map(
        (component, index) => {
            return (
                    <motion.button key={`navbar ${index}`} variants={child} onClick={component.func} whileHover={{scale:1.1}} whileTap={{scale:1.05}}>{component.icon}</motion.button>
            )
        }
    )
      return(
        <motion.nav variants={parent} initial={'initial'} whileInView={'animate'} className={`flex h-20 justify-evenly items-center text-${color}`}>
            {navReturn}
        </motion.nav>
    )
}

export default Navbar