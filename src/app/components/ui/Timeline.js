import React from 'react'
import Image from 'next/image'
import Timeline_Right from './Timeline_Right'
import Timeline_Left from './Timeline_Left'

const Timeline = () => {
  const bike = {
    year: '2020',
    title: 'Motorized Bicycle',
    text: 'Mounted a four-stroke engine to a bicycle and registered it as a street-legal moped.',
    src: '/bike.jpg',
    link: null
  }
  const mech = {
    year: '2022',
    title: 'Color-Sorting Conveyor',
    text: 'Created electromechanical system that automatically sorted colored blocks. Wrote algorithms in C and used Arduino to control DC and stepper motors using color, IR, and Hall Effect sensor feedback.',
    src: '/mech/full-picture.jpg',
    link: 'mechatronics'
  }
  const v1 = {
    year: '2022',
    title: 'Portfolio V1',
    text: 'Deployed CI/CD Flask API to AWS Elastic Beanstalk to serve static webpages. Used python for backend and HTML/Bootstrap CSS for frontend.',
    src: '/fullstack/api/splash.png',
    link: null
  }
  const v2 = {
    year: '2023',
    title: 'Portfolio V2',
    text: 'Developed project portfolio using using NextJS and Tailwind CSS. Used the environment as a sandbox for future projects.',
    src: '/timeline/portfolio-v2.png',
    link: null
  }
  const decks = {
    year: '2023',
    title: 'Fullstack Basketball Card App',
    text: 'Created fullstack app allowing users to save virtual basketball card decks. Used Portfolio V2 environment to develop interface in support of backend comprised of CI/CD Flask API and MSSQL database deployed via Amazon Linux 2 and AWS RDS, respectively.',
    src: '/fullstack/front/creating.png',
    link: 'fullstack'
  }
  const collision = {
    year: '2023',
    title: '2-D Collision Simulation',
    text: 'Discretized conservation of momentum realtionship to develop 2-D collision simulation.',
    src: '/timeline/collision.png',
    link: 'collision'
  }
  const three = {
    year: '2023',
    title: '3-D Fluid Simulation',
    text: 'Used Real Time Fluid Dynamics for Games, by Jos Stam, to create 20x20x30 3-D Eulerian fluid simulation for Portfolio V2. Written in JavaScript and WebGL.',
    src: '/timeline/fluid.png',
    link: '3d-fluid'
  }
  const two = {
    year: '2025',
    title: '2-D Fluid Simulation',
    text: 'Converted RGB pixel data from beach photograph into initial conditions for 2-D fluid simulation used as portfolio background. Written in JavaScript and WebGL.',
    src: '/timeline/fluid-2d.png',
    link: '2d-fluid'
  }
  const v3 = {
    year: '2025',
    title: 'Portfolio V3',
    text: 'Remade portfolio using NextJS, daisyUI, and Tailwind CSS. Focused on usability, archived old projects, and had fun.',
    src: '/timeline/portfolio-v3.png',
    link: ''
  }


  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <Timeline_Left content={v3} />
        <Timeline_Right content={two} />
        <Timeline_Left content={decks} />
        <Timeline_Right content={three} />
        <Timeline_Left content={collision} />
        <Timeline_Right content={v2} />
        <Timeline_Left content={v1} />
        <Timeline_Right content={mech} />
        <Timeline_Left content={bike} />

      </ul>
    </div>
  )
}

export default Timeline