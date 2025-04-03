import React from 'react'
import Visualizer from './Visualizer'

const Splash = () => {
  return (
    <div id='hero' className="hero bg-base-200 w-full h-full relative">
      <div className='absolute top-0 left-0 w-full h-full'>
        <Visualizer tag='hero' />
      </div>
      <div className="hero-overlay select-none pointer-events-none absolute top-0 left-0"></div>
      <div className="hero-content text-neutral-content text-center pointer-events-none">
          <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold select-none">Hello there</h1>
              <p className="mb-5 select-none">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary pointer-events-auto">Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Splash