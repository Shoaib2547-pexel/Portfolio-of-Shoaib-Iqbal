import React, { useState } from 'react'
import { motion } from 'motion/react'

export function Home({open}) {
    
    return (
        <>
            <div>
                <motion.h2 initial={{ opacity: 0.5, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='text-left  font-bold text-4xl text-white mt-[40px] ml-[50px] mb-3 '>Hello <span className='text-red-500'>.</span></motion.h2>
                <motion.p initial={{ opacity: 0.5, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='text-red-500 text-left mb-3'>___________ <span className=' text-white text-xl font-medium'>I'm Shoaib Iqbal</span></motion.p>
                <motion.p initial={{ opacity: 0.5, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='text-left  font-bold text-4xl text-white ml-[50px]'>Software Developer</motion.p>
            </div>

            <div className='flex justify-start items-center gap-3 ml-[50px] mt-[60px]'>
                <motion.button initial={{ opacity: 0.7, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} whileHover={{ opacity: 0.6 }} className='bg-red-400 px-[12px] py-[8px] text-white '>Got a projects?</motion.button>
                <motion.button initial={{ opacity: 0.7, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} whileHover={{
                    backgroundColor: "#f87171", // red-400 in hex
                    color: "#000",
                }} className='border border-red-400  px-[12px] py-[8px] text-white' onClick={open}>My Resume</motion.button>
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
