import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:px-25 space-y-5'>
        <h1 className='text-2xl md:text-5xl font-bold'>
            Why are we here?
        </h1>
        <p>
            As a mechanical engineering student, lots of my undergraduate coursework focused on fluid mechanics, finite element analysis,
            and programming, but I never got a chance to work directly with computational fluid dynamics. So, just like everyone else
            when they graduate, I set out to do it myself.
        </p>
        <p>
            But I knew I needed a way to show people, and what better place than the internet to share things? At this stage, I had 3
            requirements:
        </p>
        <ol className='list-disc list-inside'>
            <li>
                Create a fluid simulation
            </li>
            <li>
                Make it in 3 dimensions
            </li>
            <li>
                Put it on the internet
            </li>
        </ol>
        <p>
            So I set out to learn web development and deployed the first iteration of this site back in 2022. I used Flask and Bootstrap CSS
            and deployed it to AWS Elastic Beanstalk. Unfortunately, Flask is more conducive to API development than a frontend experience,
            but I had something live and on the internet.
        </p>
        <p>
            To address that issue, I reached for Next.js and Tailwind to create version 2 of this site. I taught myself Javascript, React, and
            WebGL, and several headaches later, had <a className='text-blue-500' href='3d-fluid'>3-dimensional fluid simulation on the internet</a>.
            But I caught the itch. I really enjoyed each part of the process that went into building the simulation and wanted more, so I built
            a <a className='text-blue-500' href='fullstack'>fullstack basketball card deck app</a>. I tried to learn as much as I could about
            frontend, and I deployed another Flask API, only this time to AWS EC2 because Elastic Beanstalk takes care of too many details to
            learn about deployments and infrastructure.
        </p>
        <p>
            For this version of my portfolio, I shifted the focus to ease of use, mantainability, and the visual element. I stuck with Next.js and
            Tailwind, but opted for daisyUI to speed up development while improving the user experience. The projects from my old site are now archived
            here to avoid maintenence and to focus on new projects. Lastly, I spent a lot of time, including a redesign of my 3D fluid simulation into
            a 2D fluid simulation, to improve the appearance of this site. Frontend design is really a joy to work on, and this is a portfolio at the
            end of the day.
        </p>
        <p>
            I hope you enjoy your time on my portfolio, and I hope this provides some insight into who I am.
        </p>
    </div>
  )
}

export default About