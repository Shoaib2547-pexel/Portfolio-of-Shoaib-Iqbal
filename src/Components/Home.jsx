import React, { useState } from 'react'
import { motion } from 'motion/react'
import { faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export function Home({ open }) {

    return (
        <>
            <FontAwesomeIcon />
            <div>
                <motion.h2 initial={{ opacity: 0.5, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='text-left  font-bold text-4xl text-white mt-[40px] ml-[50px] mb-3 '>Hello <span className='text-red-500'>.</span></motion.h2>
                <motion.p initial={{ opacity: 0.5, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='text-red-500 text-left mb-3'>___________ <span className=' text-white text-xl font-medium'>I'm Shoaib Iqbal</span></motion.p>
                <motion.p initial={{ opacity: 0.5, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='text-left  font-bold text-4xl text-white ml-[50px]'>Software Developer</motion.p>
            </div>


            {/* Icons  */}
            <motion.div initial={{ opacity: 0.5, x: -45 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='flex items-center justify-start gap-6 py-1 ml-[50px]  '>
                <motion.a className='h-[25px] w-[30px]  rounded-md flex items-center justify-center'

                    initial={{ backgroundColor: "transparent" }}
                    whileHover={{ backgroundColor: "gray" }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    href="https://facebook.com/yourusername" target="_blank"  >

                    <FontAwesomeIcon icon={faFacebook} className='text-white' />

                </motion.a>


                <motion.a className='h-[25px] w-[30px]  rounded-md flex items-center justify-center'

                    initial={{ backgroundColor: "transparent" }}
                    whileHover={{ backgroundColor: "gray" }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    href="https://github.com/yourusername" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} className='text-white' />
                </motion.a>

                <motion.a className='h-[25px] w-[30px]  rounded-md flex items-center justify-center'

                    initial={{ backgroundColor: "transparent" }}
                    whileHover={{ backgroundColor: "gray" }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    href="https://linkedin.com/in/yourusername" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className='text-white' />
                </motion.a>


                <motion.a className='h-[25px] w-[30px]  rounded-md md:flex items-center justify-center'

                    initial={{ backgroundColor: "transparent" }}
                    whileHover={{ backgroundColor: "gray" }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    href="tel:+923253248696" target="_blank">
                    <FontAwesomeIcon icon={faPhone} className='text-white' />
                </motion.a>
            </motion.div>

            <div className='flex justify-start items-center gap-3 ml-[50px] mt-[60px]'>
                <motion.button initial={{ opacity: 0.7, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} whileHover={{ opacity: 0.7 }} className='bg-red-400 px-[12px] py-[8px] text-white '>Read More</motion.button>
                <motion.button initial={{ opacity: 0.7, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} whileHover={{
                    backgroundColor: "#f87171",
                    color: "#000",
                }}  className='border border-red-400  px-[12px] py-[8px] text-white' onClick={open}>My Resume</motion.button>
            </div>



        </>
    )
}

export function HomeScroll() {
    const skills = ["Html", "Css", "Javascript", "Node.Js", "React", "Github"];
    return (
        <motion.ul
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            }}
            className='flex items-center gap-10 px-5 py-4'
        >
            {[...skills, ...skills, ...skills].map((val, index) => (
                <li key={index} className='min-w-[150px] text-center'>
                    {val}
                </li>
            ))}
        </motion.ul>
    )
}
