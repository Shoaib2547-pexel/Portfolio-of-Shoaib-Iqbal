import React from 'react'
import { Link } from "react-scroll";
import { motion } from "motion/react"

export default function NavBar() {
    return (
        <nav >
            <ul className=' bg-black text-white p-5 flex md:justify-between justify-center items-center cursor-pointer '>
                <li className='text-xl font-bold hidden md:block'>Shoaib Iqbal</li>
                <div className='flex md:gap-5 gap-6'>
                    <motion.li whileHover={{opacity:0.5,scale:0.9}}><Link to='home' smooth={true} duration={500}>Home</Link></motion.li>
                    <motion.li whileHover={{opacity:0.5,scale:0.9}}><Link to='about' smooth={true} duration={500}>About</Link></motion.li>
                    <motion.li whileHover={{opacity:0.5,scale:0.9}}><Link to='skills' smooth={true} duration={500}>Skills</Link></motion.li>
                    <motion.li whileHover={{opacity:0.5,scale:0.9}}><Link to='project' smooth={true} duration={500}>Projects</Link></motion.li>
                    <motion.li whileHover={{opacity:0.5,scale:0.9}}><Link to='contact' smooth={true} duration={500}>Contact</Link></motion.li>
                    
                </div>
            </ul>

        </nav>
    )
}
