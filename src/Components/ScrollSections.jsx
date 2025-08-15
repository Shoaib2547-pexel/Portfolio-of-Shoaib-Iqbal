import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Home, HomeScroll } from './Home'
import Modaal from './Modaal'
import Skills from './Skills';
import profilepic from '../Images/Shoaib.png'
import Contact from './Contact';
import Projects from './Projects';
import skillPic from '../Images/skillss.png'



export default function ScrollSections() {


    // Modal state
    let [Isclose, Setopen] = useState(false);
    let open = Isclose
    let close = () => Setopen(!Isclose)


    return (
        <>
            <section id='home' className='bg-black '>
                <Modaal close={open} btnclose={close} />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='pt-3'>
                        <Home open={close} />  {/*  open={() => Setopen(!Isclose)}  */}
                    </div>                     {/*  I can directly pass call back function as well */}



                    <div className='md:relative flex items-center justify-center mr-6 '>
                        <motion.img initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} src={profilepic} alt="" className='md:absolute md:top-0 md:right-12 w-[300px] h-[300px] ' />
                    </div>


                    <div className='md:col-span-2 bg-gray-900 text-white mt-[40px] overflow-hidden mx-3'>
                        <HomeScroll />
                    </div>


                </div>

            </section>

            <section id='skills' className=' bg-black px-6 py-[40px]'>
                <h1 className='text-[25px] font-sans font-bold text-yellow-400 mb-10 underline decoration-yellow-400'>My <span className='text-white'>SKILLS</span></h1>
                <div className='mx-6 grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    <div className='' >
                        <Skills />
                    </div>
                    <div className='pl-[100px]'>
                        <motion.img src={skillPic} alt="" width={300} height={300}
                            initial={{ rotateX: -90, opacity: 0 }} // start from top (rotated)
                            whileInView={{ rotateX: 0, opacity: 1 }} // rotate to normal
                            viewport={{ amount: 0.3 }} // when 30% visible
                            transition={{ duration: 0.8, ease: "easeOut" }} />

                    </div>
                </div>
            </section>

            <section id='project' className='bg-black'>
                <h1 className='text-yellow-500 underline decoration-yellow-400 text-[20px] font-bold pt-5'>My <span className='text-white'>Works</span></h1>
                <p className='text-white pb-5 mb-20'>Some of my projects</p>
                <Projects />
            </section>

            <section id='contact' className='bg-black pt-3'>
                <h1 className='text-white text-[20px] font-semibold underline decoration-yellow-400 underline-offset-3 pt-10'><span className='text-yellow-500 font-bold text-[20px] underline'>Contact</span> me</h1>
                <Contact />
            </section>

        </>
    )
}
