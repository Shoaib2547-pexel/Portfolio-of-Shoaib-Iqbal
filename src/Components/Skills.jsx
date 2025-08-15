import React from 'react'
import {motion} from 'motion/react'
import react from '../Images/react.png'
import github from '../Images/github.png'
import css from '../Images/css.png'
import html from '../Images/icons8-html-5-48.png'
import js from '../Images/icons8-javascript-64.png'

export default function Skills() {
    let skills = [
        { name: 'React', level: 70, color: 'bg-colors-react', images: react },
        { name: 'JavaScript', level: 80, color: 'bg-colors-javascript' ,images: js  },
        { name: 'CSS', level: 85, color: 'bg-colors-css' ,images: css  },
        { name: 'HTML', level: 90, color: 'bg-colors-html' ,images: html  },
        { name: 'Github', level: 70, color: 'bg-colors-darkgray' ,images: github  }
    ]

    return (
        <>
            {skills.map((val, index) => {
                return (
                    <div className='flex items-center gap-6 mb-4 w-[80%] mx-auto '>
                        <div>
                            <img src={val.images} alt="" />
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between '>
                                <h1 className='text-white'>{val.name}</h1>
                                <p className='text-white'>{val.level}%</p>
                            </div>


                            <div   key={index} className='w-full mb-4 h-2 bg-white rounded-br-lg flex items-center'>
                                <motion.div initial={{width:"0%",opacity:0.5}} viewport={{amount:0.2}} whileInView={{width: `${val.level}%`,opacity:1}} transition={{duration:2,ease:'linear'}} className={` ${val.color} rounded-br-lg h-2 text-${val.color}`} style={{ width: `${val.level}%` }}>.</motion.div>
                            </div>
                        </div>

                    </div>)

            })}
        </>
    )
}
