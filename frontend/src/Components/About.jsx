import { motion } from 'motion/react'
import profile from '../Images/profile2.png'
import React from 'react'
import { Link } from 'react-scroll'

export default function About() {
  return (

    <div className='grid grid-cols-1 md:grid-cols-2   m-3'>
      <div className='order-2 md:order-1 flex items-center justify-center'>
        <motion.img initial={{opacity:0, x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:1 ,ease:'easeIn'}} src={profile} className='border-b-2 border-yellow-400 ' />
      </div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className=' md:pt-[100px] pb-[20px] order-1 md:order-2  '>
        <p className='text-white text-left font-thin'>Let Me Introduce My Self</p>
        <h3 className='text-yellow-300 text-left text-[18px] md:text-[25px] md:leading-6 font-semibold'>
          A Journey of Crafting Excellence
        </h3>
        <p className='text-white text-justify md:text-left font-light text-[10px] md:text-[16px]'>Dedicated to web development, I excel in creating innovative and responsive digital solutions. My work combines creativity with precision, ensuring that every project not only meets but exceeds expectations. I thrive on turning complex challenges into seamless, user-friendly experiences, delivering quality that speaks for itself.</p>

        <button className='flex justify-start bg-yellow-400 px-[12px] py-[8px] rounded-md text-white ml-0 m-2 '><Link to='home' smooth={true} duration={500}>Read More</Link></button>
      </motion.div>

    </div>
  )
}
