import React, { useState } from 'react'
import proImg from '../Images/proImg.jpg'
import loginPic from '../Images/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ProjectsN() {
    let [hovereffect, sethovereffect] = useState(null)

    let objects = [
        {
            img: loginPic,
            heading: 'Login Page',
            writing: 'Animated Sign Up and Login Page',
            reff: 'https://login-signup-form-theta.vercel.app/'
        },
        {
            img: proImg,
            heading: 'Portfolio',
            writing: 'Created to display creativity of Shoaib Iqbal',
            reff: 'https://shoaib-portfolio-phi.vercel.app/'
        },
        {
            img: proImg,
            heading: 'Portfolio',
            writing: 'Created to display creativity of Shoaib Iqbal',
            reff: 'https://shoaib-portfolio-phi.vercel.app/'
        },
        {
            img: proImg,
            heading: 'Portfolio',
            writing: 'Created to display creativity of Shoaib Iqbal',
            reff: 'https://shoaib-portfolio-phi.vercel.app/'
        },
        {
            img: proImg,
            heading: 'Portfolio',
            writing: 'Created to display creativity of Shoaib Iqbal',
            reff: 'https://shoaib-portfolio-phi.vercel.app/'
        },
        {
            img: proImg,
            heading: 'Portfolio',
            writing: 'Created to display creativity of Shoaib Iqbal',
            reff: 'https://shoaib-portfolio-phi.vercel.app/'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-6 mx-auto '>
            {objects.map((items,index) => (
                <div onMouseEnter={() => sethovereffect(index)} onMouseLeave={() => sethovereffect(null)} className='relative h-[170px] max-w-[952px] rounded-lg border-2 border-yellow-300 shadow-[0_0_10px_1px_rgba(250,204,21,0.7)] '>
                    <img src={items.img} className='w-full h-full object-contain' />
                    {
                        hovereffect === index &&
                        <div className='absolute inset-0 z-50 bg-gradient-to-t from-yellow-300 to-transparent flex flex-col items-center justify-end py-3 px-2'>
                            
                                <h1 className='text-black font-extrabold text-[20px] drop-shadow-xl'>{items.heading}</h1>
                                <p className='text-black shadow-white font-bold drop-shadow-lg'>{items.writing}</p>
                               <a href={items.reff} target='_blank'><FontAwesomeIcon icon={faSquareArrowUpRight} className='text-black w-[40px] h-[40px]'/></a>
 
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}