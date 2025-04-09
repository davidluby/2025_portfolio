'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Collisions from '../simulations/Collisions'

const Projects = () => {
  const [picture, setPicture] = useState(0)

  const handle_click = (input) => {
    if (picture === 3) {
      if (input === 1) {
        setPicture(0)
      } else {
        setPicture(picture + input)
      }
    } else if (index === 0) {
      if (input === -1) {
        setPicture(3)
      } else {
        setPicture(picture + input)
      }
    } else {
      setPicture(picture + input)
    }
  }

  useEffect(() => {
    const carousel = document.getElementById('project-carousel')
    carousel.scrollTo(picture * carousel.clientWidth, 0)
  }, [picture])

  return (
    <div>
      <div id='project-carousel' className="carousel w-full rounded-lg shadow-lg">
        <div className="carousel-item w-full relative">
          <div className='w-full h-full z-10'>
            <Collisions name='collisions' />
          </div>
          <Image className='absolute w-full h-full' src='/fullstack_old/parquet.jpg' alt='Parquet' width='1000' height='1000' />
        </div>
        <div className="carousel-item w-full">
          <Image className='w-full' src='/bike.jpg' alt='Motorized Bicycle' width='1000' height='1000' />
        </div>
        <div className="carousel-item w-full relative overflow-hidden">
          <Image src='/mech/arduino.jpg' alt='Arduino' width='1000' height='1000' />
        </div>
        <div className="carousel-item w-full">
          <Image className='w-full' src='/fullstack_old/system.png' alt='Fullstack' width='1920' height='1080' />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <button className="btn btn-secondary btn-circle" onClick={() => handle_click(-1)}>{'<'}</button>
        <button className="btn btn-secondary btn-circle" onClick={() => handle_click(1)}>{'>'}</button>
    </div>
  </div>
  )
}

export default Projects