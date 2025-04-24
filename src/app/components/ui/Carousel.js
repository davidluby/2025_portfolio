'use client'
import React, { useState, useEffect } from 'react'

const Carousel = ({ id, paths }) => {
  const [picture, setPicture] = useState(0)

  const handle_click = (value) => {
    console.log(picture, paths.length)
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

  return (
    <div id={id} className="carousel w-full rounded-lg shadow-xl">
      {paths.map((path) => {
        return (
          <div key={path} className="carousel-item relative w-full">
            <img src={path} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <div onClick={() => handle_click(-1)} className="pointer-events-auto btn btn-circle btn-xl text-black bg-info animate-pulse hover:scale-110 transition transition-all ease-in-out duration-300">❮</div>
              <div onClick={() => handle_click(1)} className="pointer-events-auto btn btn-circle btn-xl text-black bg-info animate-pulse hover:scale-110 transition transition-all ease-in-out duration-300">❯</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Carousel