'use client'
import React, { useState, useEffect } from 'react'
import Visualizer from '../simulations/2D-Visualizer'

const Splash = () => {
  const [tip, setTip] = useState(true)
  const [flag, setFlag] = useState(false)
  const [index, setIndex] = useState(-1)

  const text = [
    'Hi, I\'m Dave.', 'Hi, I\'m Dave.',
    'Welcome to my portfolio.', 'Welcome to my portfolio.',
    'Have a question?', 'Have a question?',
    'Let\'s have a conversation.', 'Let\'s have a conversation.'
  
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      const slide = document.getElementById('slide')
      slide.classList.toggle('flex-grow')
      slide.classList.toggle('w-0')
      
      if (index === text.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 2000)
    return () => {clearInterval(interval)}
  }, [index])

  useEffect(() => {
      const blurb = document.getElementById('blurb')
      blurb.classList.toggle('flex-grow')
      blurb.classList.toggle('w-0')

    if (tip === true) {
      const splash = document.getElementById('splash')
      splash.classList.toggle('w-full')
      splash.classList.toggle('w-0')

      const interact = () => {
        const drag = document.getElementById('drag')
        drag.classList.toggle('flex-grow')
        drag.classList.toggle('w-0')
      }
      setTimeout(() => interact(), 1500)
    }
  }, [])

  const handle_interact = (flag) => {
      if (flag === false) {
      const drag = document.getElementById('drag')
      drag.classList.toggle('flex-grow')
      drag.classList.toggle('w-0')
      setFlag(true)
      setTimeout(() => setTip(false), 3000)
      }
  }

  const handle_scroll = () => {
    window.scrollBy({
      top: window.innerHeight + 4 * 0,
      behavior: 'smooth'
    })
  }

  return (
    <div id='hero' className="hero bg-base-200 w-full h-full relative" onMouseDown={() => handle_interact(flag)}>
      <div id='splash' className='absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-all duration-1000 w-0'>
        <Visualizer tag='hero' />
      </div>
      <div className="hero-overlay absolute top-0 left-0"></div>
      {
        tip ? (
        <div className='w-80 md:w-120 h-30 absolute -rotate-10 top-[5%] left-[5%] md:left-[2.5%] flex pointer-events-none md:text-2xl'>
          <div id='drag' className='relative text-nowrap overflow-hidden transition-all duration-500 w-0'>
            <div className='absolute flex flex-row'>
              <div className='text-2xl md:text-3xl text-white animate-pulse'>Click and drag</div>
              <svg className='w-1/4 fill-white animate-pulse' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 442.137"><path d="M498.536 442.137c-31.387-25.229-67.042-47.435-83.064-62.714-5.282-5.036-11.007-12.153-1.664-8.574 25.872 9.909 54.004 27.667 75.003 49.744-2.547-18.498 2.366-41.616 9.997-60.504.939-2.328 3.886-11.918 7.547-15.089 1.358-1.177 2.819-1.472 4.307-.18.849.739 1.28 1.995 1.333 3.707.152 4.983-3.387 19.558-6.693 33.835-4.904 21.183-7.422 37.783-6.766 59.775z"/><path d="M243.828 236.348c4.322-22.157 5.797-44.278 4.95-66.742 45.792 16.983 86.744 47.759 120.988 82.094 41.377 41.487 75.893 91.781 100.677 142.434 7.709 15.756 12.142 22.106 22.781 36.215-19.821-95.783-137.213-251.196-246.698-274.194C232.218 29.162 103.055-53.717 0 40.704c95.353-64.986 210.522-25.748 234.658 113.48-11.685-1.414-23.233-1.219-34.515.824-26.693 4.83-52.462 12.782-72.736 38.719-28.125 35.979-26.324 94.975 19.286 115.587 54.862 24.792 87.927-25.739 97.135-72.966zm-7.016-67.487c.889 23.575-1.128 48.171-6.111 71.196-8.03 37.107-29.726 69.192-65.407 62.82-22.084-3.943-35.695-18.675-40.56-38.116-17.522-70.029 62.617-107.875 112.078-95.9z"/></svg>
            </div>
          </div>
        </div>
        ) : (null)
      }
      <div className="hero-content text-white text-center select-none pointer-events-none w-full">
          <div className="w-full md:w-3/5">
              <div className='flex justify-center w-full'>
                <h1 id='slide' className="text-2xl md:text-5xl font-bold relative h-20 text-nowrap overflow-hidden transition-all duration-1000 w-0">
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center'>&nbsp;{text[index]}</div>
                </h1>
              </div>
              <div className='flex justify-center w-full'>
              <div id='blurb' className="relative overflow-hidden h-30 transition-all delay-1000 duration-1000 w-0">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-xl'>
                  Please check out my resume page to see my professional experience, and visit my project pages for anything that catches your eye.
                </div>
              </div>
              </div>
              <button className="btn btn-neutral btn-circle mt-5 pointer-events-auto animate-bounce" onClick={() => handle_scroll()}>
                <svg className='rotate-180 fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"/></svg>
              </button>
          </div>
      </div>
    </div>
  )
}

export default Splash