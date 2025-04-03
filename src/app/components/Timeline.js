import React from 'react'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">Motorized Bicycle</div>
            Back in college, I wanted a moped to get to class faster, but I had no money to buy one. The solution: put a four-stroke engine on a bicycle, and make it street legal.
          </div>
          <div className="timeline-end mb-10 md:text-end">
            <Image src='/bike.jpg' width={1000} height={1000} alt='motorized bicycle' />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black">Color-Sorting Conveyor</div>
            I created an electromechanical system that automatically sorted different colored blocks. I wrote algorithms in C and used an Arduino to capture inputs from color, IR, and hall effect sensors for control over DC and stepper motors.
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <Image src='/mech/full-picture.jpg' width={1000} height={1000} alt='conveyor' />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">Portfolio #1</div>
            Back in college, I wanted a moped to get to class faster, but I had no money to buy one. The solution: put a four-stroke engine on a bicycle, and make it street legal.
          </div>
          <div className="timeline-end mb-10 md:text-end">
            <Image src='/bike.jpg' width={1000} height={1000} alt='motorized bicycle' />
          </div>
          <hr />
        </li>
      </ul>
    </div>
  )
}

export default Timeline