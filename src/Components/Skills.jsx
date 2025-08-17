import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import react from '../Images/react.png'
import github from '../Images/github.png'
import css from '../Images/css.png'
import html from '../Images/icons8-html-5-48.png'
import js from '../Images/icons8-javascript-64.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function Skills() {
    let skills = [
        { name: 'React', level: 70, color: 'bg-colors-react', images: react },
        { name: 'JavaScript', level: 80, color: 'bg-colors-javascript', images: js },
        { name: 'CSS', level: 85, color: 'bg-colors-css', images: css },
        { name: 'HTML', level: 90, color: 'bg-colors-html', images: html },
        { name: 'Github', level: 70, color: 'bg-colors-darkgray', images: github }
    ]

    return (
        <>
            {skills.map((Val, index) => {
                return (
                    <div className='flex items-center justify-center gap-6 mb-4 md:w-[80%] w-[100%]  '>
                        <div>
                            <img src={Val.images} alt="" />
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between '>
                                <h1 className='text-white'>{Val.name}</h1>
                                <p className='text-white'>{Val.level}%</p>
                            </div>


                            <div key={index} className='w-full mb-4 h-2 bg-white rounded-br-lg flex items-center'>
                                <motion.div initial={{ width: "0%", opacity: 0.5 }} whileInView={{ width: `${Val.level}%`, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className={` ${Val.color} rounded-br-lg h-2 text-${Val.color}`} style={{ width: `${Val.level}%` }}>.</motion.div>
                            </div>
                        </div>

                    </div>)

            })}
        </>
    )
}

export function Progressbar() {

    const skill = [
        { name: "React", value: 66 },
        { name: "CSS", value: 70 },
        { name: "JavaScript", value: 80 },
        { name: "Node.js", value: 90 },
    ];
    return (
        <div className='grid grid-cols-2  gap-10 '>
            {skill.map((val, index) => (

                <AnimatePB Name={val.name} Val={val.value} />
            ))}

        </div>
    )

}

function AnimatePB({ Val, Name }) {

    let [progess, setcount] = useState(0);

    useEffect(() => {
        let start = 0

        let step = () => {
            start += 1
            if (start <= Val) {
                setcount(start)
                requestAnimationFrame(step)
            }
        }

        requestAnimationFrame(step)
    }, [Val])

    return (
        <div className='flex flex-col items-center'>
            <div className=' w-24 h-24'>
                <CircularProgressbar value={progess} text={`${Val}%`} styles={buildStyles({
                    pathColor: "#facc15", // yellow-400
                    textColor: "#fff",
                    trailColor: "#374151", // gray-700
                    strokeLinecap: "butt",
                    pathTransitionDuration: 2,
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                })}
                    strokeWidth={8} />
            </div>
            <span className='text-[#fff]'>
                {Name}
            </span>
        </div>
    )
}
