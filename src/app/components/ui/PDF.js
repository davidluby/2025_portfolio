'use client'
import React, { useState, useEffect } from 'react'

const PDF = ({ id, paths }) => {
  const [picture, setPicture] = useState(0)

  const handle_click = (value) => {
    if (picture === paths.length - 1) {
      if (value === 1) {
        setPicture(0)
      } else {
        setPicture(picture + value)
      }
    } else if (picture === 0) {
      if (value === -1) {
        setPicture(paths.length - 1)
      } else {
        setPicture(picture + value)
      }
    } else {
      setPicture(picture + value)
    }
  }

  useEffect(() => {
    const carousel = document.getElementById(id)
    carousel.scrollTo(picture * carousel.clientWidth, 0)
  }, [picture])

  const titles = [
    'Heat Sink Simulation', 'Heat Transfer of a Slab Simulation', 'Propulsion Systems', 'Linkage Kinematics'
  ]
  const header= 'text-3xl font-bold mb-5'
  return (
    <div id={id} className="carousel overflow-hidden w-screen md:w-full">
      {paths.map((path) => {
        return (
          <div key={path[0]} className='carousel-item flex-col w-full'>
            <h1 className={header}>{titles[path[1]]}</h1>
            <div className="relative w-full flex-col items-center">
              <iframe src={path[0]} width="100%" height="800px" className='rounded-lg'/>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
                <div onClick={() => handle_click(-1)} className="pointer-events-auto btn btn-circle btn-sm text-black bg-info animate-pulse hover:scale-110 transition transition-all ease-in-out duration-300">❮</div>
                <div onClick={() => handle_click(1)} className="pointer-events-auto btn btn-circle btn-sm text-black bg-info animate-pulse hover:scale-110 transition transition-all ease-in-out duration-300">❯</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PDF