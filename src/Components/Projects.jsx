import React, { useState, useEffect } from 'react'
import travel from '../Images/travel.png'
import { motion } from 'motion/react'

export default function Projects() {
  let project = [
    { Title: 'Travel Website', Description: 'This project is made by Shoaib Iqbal by 23-NTU-CS-1212' },
    { Title: 'Portfolio Website', Description: 'A personal portfolio to showcase my skills and work.' },
    { Title: 'E-commerce Store', Description: 'Online store built with React and Tailwind.' },
    { Title: 'Blog Platform', Description: 'A modern blog with markdown support.' },
    { Title: 'Weather App', Description: 'Shows live weather data from API.' }
  ]

  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Detect screen size and update visibleCount
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1) // Mobile
      } else if (window.innerWidth < 910) {
        setVisibleCount(2) // Desktop
      } else {
        setVisibleCount(3) // Desktop
      }
    }

    updateCount() // Set on mount
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  const nextProjects = () => {
    if (startIndex + visibleCount < project.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevProjects = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className='flex flex-col items-center px-4'>
      {/* Projects Row */}
      <div className='flex flex-wrap justify-center gap-4'>
        {project.slice(startIndex, startIndex + visibleCount).map((proj, idx) => (
          <motion.div whileHover={{ scale: 1.1 }}
            key={idx}
            className='relative bg-gray-800  p-4 rounded-xl  w-[90%] sm:w-[280px] text-center' >
            <img
              src={travel}
              alt={proj.Title}
              className='w-full h-[150px] object-cover rounded-lg mb-3'
            />
            <h2 className='text-lg text-white font-bold mb-2'>{proj.Title}</h2>
            <p className='text-gray-300 text-sm'>{proj.Description}</p>

          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className='flex gap-4 mt-4'>
        <button
          onClick={prevProjects}
          disabled={startIndex === 0}
          className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 text-white disabled:opacity-50'
        >
          Previous
        </button>
        <button
          onClick={nextProjects}
          disabled={startIndex + visibleCount >= project.length}
          className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 text-white disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  )
}
