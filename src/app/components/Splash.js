'use client'
import React, { useState } from 'react'
import Visualizer from './Visualizer'

const Splash = () => {
  const [tip, setTip] = useState(true)
  return (
    <div id='hero' className="hero bg-base-200 w-full h-full relative" onClick={() => setTip(false)}>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Visualizer tag='hero' />
      </div>
      <div className="hero-overlay select-none pointer-events-none absolute top-0 left-0"></div>
      {
        tip ? (
        <div className='absolute top-[2.5%] left-[2.5%] text-2xl flex flex-row'>
          <p className='text-success'>Click and drag to play with fluid sim</p>
          <svg className='w-40 fill-success' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 442.137"><path d="M498.536 442.137c-31.387-25.229-67.042-47.435-83.064-62.714-5.282-5.036-11.007-12.153-1.664-8.574 25.872 9.909 54.004 27.667 75.003 49.744-2.547-18.498 2.366-41.616 9.997-60.504.939-2.328 3.886-11.918 7.547-15.089 1.358-1.177 2.819-1.472 4.307-.18.849.739 1.28 1.995 1.333 3.707.152 4.983-3.387 19.558-6.693 33.835-4.904 21.183-7.422 37.783-6.766 59.775z"/><path d="M243.828 236.348c4.322-22.157 5.797-44.278 4.95-66.742 45.792 16.983 86.744 47.759 120.988 82.094 41.377 41.487 75.893 91.781 100.677 142.434 7.709 15.756 12.142 22.106 22.781 36.215-19.821-95.783-137.213-251.196-246.698-274.194C232.218 29.162 103.055-53.717 0 40.704c95.353-64.986 210.522-25.748 234.658 113.48-11.685-1.414-23.233-1.219-34.515.824-26.693 4.83-52.462 12.782-72.736 38.719-28.125 35.979-26.324 94.975 19.286 115.587 54.862 24.792 87.927-25.739 97.135-72.966zm-7.016-67.487c.889 23.575-1.128 48.171-6.111 71.196-8.03 37.107-29.726 69.192-65.407 62.82-22.084-3.943-35.695-18.675-40.56-38.116-17.522-70.029 62.617-107.875 112.078-95.9z"/></svg>
        </div>
        ) : (null)
      }
      <div className="hero-content text-neutral-content text-center pointer-events-none">
          <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold select-none">Hi. I'm Dave</h1>
              <p className="mb-5 select-none">
                  Thanks for visiting my portfolio. Please check out my resume page to see my professional experience, and visit my project pages for anything that catches your eye.
              </p>
              <button className="btn btn-primary pointer-events-auto">Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Splash