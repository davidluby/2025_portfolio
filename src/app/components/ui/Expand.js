import React from 'react'

const Expand = ({ id, duration, height, content}) => {
  return (
    <div id='blurb' className="relative overflow-hidden transition-all duration-1000 w-0 h-20">
        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center'>
            Please check out my resume page to see my professional experience, and visit my project pages for anything that catches your eye.
        </p>
    </div>
  )
}

export default Expand