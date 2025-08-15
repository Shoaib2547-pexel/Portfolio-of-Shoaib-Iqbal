import React, { createElement, useState } from 'react'
import { motion } from 'motion/react'
import Cv from '../assets/SHoaib.pdf'
import resume from '../Images/Resume.png'

export default function Modaal({ close, btnclose }) {

    let downloadbtn = (e) => {
        let links = document.createElement('a')
        links.href = Cv;
        links.download = "MyCv.pdf";
        links.click();
        e.preventDefault();


    }

    return (
        <>
            {close &&
                <motion.div initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] flex justify-center items-center'>
                    <div className='max-w-[400px] rounded-sm bg-white relative p-3 m-3'>
                        <h1 className='text-center text-2xl font-bold font-sans'>Resume</h1>
                        <img src={resume} width={300} height={300}/>
                        <button className='font-semibold text-black absolute top-0 right-2' onClick={btnclose}>X</button>
                        <button className='rounded px-4 py-1 my-2 mx-1 text-white bg-slate-600' onClick={btnclose}>Close</button>
                        <button className='rounded px-4 py-1 my-2 text-white bg-slate-600' onClick={downloadbtn}>Dowload</button>

                    </div>
                </motion.div>
            }
        </>
    )
}
