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
            Mounted a four-stroke engine to a bicycle and registered it as a street-legal moped.
          </div>
          <div className="timeline-end mb-10 md:text-end hover:scale-150 hover:z-10 transition transition-all duration-150 ease-in-out">
            <Image src='/bike.jpg' width={1000} height={1000} alt='motorized bicycle' className='rounded-sm shadow-xl' />
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
            Created electromechanical system that automatically sorted colored blocks. Wrote algorithms in C and used Arduino to control DC and stepper motors using color, IR, and Hall Effect sensor feedback.
          </div>
          <div className="timeline-start mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/mech/full-picture.jpg' width={1000} height={1000} alt='conveyor' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black">Portfolio V1</div>
            Deployed CI/CD Flask API to AWS Elastic Beanstalk to serve static webpages. Used python for backend and HTML/Bootstrap CSS for frontend.
          </div>
          <div className="timeline-end mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/fullstack/api/splash.png' width={1000} height={1000} alt='motorized bicycle' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">Portfolio V2</div>
            Developed project portfolio using using NextJS and Tailwind CSS. Used the environment as a sandbox for future projects.
          </div>
          <div className="timeline-start mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/timeline/portfolio-v2.png' width={1000} height={1000} alt='conveyor' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">Fullstack Basketball Card App</div>
            Created fullstack app allowing users to save virtual basketball card decks. Used Portfolio V2 environment to develop interface in support of backend comprised of CI/CD Flask API and MSSQL database deployed via Amazon Linux 2 and AWS RDS, respectively.
          </div>
          <div className="timeline-end mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/fullstack/front/creating.png' width={1000} height={1000} alt='motorized bicycle' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">3-D Fluid Simulation</div>
            Used <i>Real Time Fluid Dynamics for Games,</i> by Jos Stam, to create 20x20x30 3-D Eulerian fluid simulation for Portfolio V2. Written in JavaScript and WebGL. 
          </div>
          <div className="timeline-start mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/timeline/fluid.png' width={1000} height={1000} alt='conveyor' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black">2-D Fluid Simulation</div>
            Converted RGB pixel data from beach picture into initial conditions for 2-D fluid simulation used as portfolio background. Written in JavaScript and WebGL.
          </div>
          <div className="timeline-end mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/timeline/fluid-2d.png' width={1000} height={1000} alt='motorized bicycle' className='rounded-sm shadow-xl' />
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
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black">Portfolio V3</div>
            Remade portfolio using NextJS, daisyUI, and Tailwind CSS. Focused on usability, archived old projects, and had fun.
          </div>
          <div className="timeline-start mb-10 md:text-end hover:scale-200 hover:z-10 transition transition-all duration-300 ease-in-out">
            <Image src='/timeline/portfolio-v3.png' width={1000} height={1000} alt='conveyor' className='rounded-sm shadow-xl' />
          </div>
          <hr />
        </li>

      </ul>
    </div>
  )
}

export default Timeline