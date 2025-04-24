import React from 'react'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
    const app_paths = [
        '/fullstack/front/splash.PNG', '/fullstack/front/searched.png', '/fullstack/front/creating.png',
        '/fullstack/front/saving.png', '/fullstack/front/saved.png', '/fullstack/front/editing.png'
    ]

    const aws_paths = [
        '/fullstack/aws/ci-cd.png', '/fullstack/aws/ec2.png', '/fullstack/aws/db.png'
    ]

    const details_paths = [
        '/fullstack/mssql.png', '/fullstack/aws/dns.png', '/fullstack/api/ssl.png', '/fullstack/api/ec2.png', '/fullstack/api/debug.png', '/fullstack/api/splash.png'
    ]

  return (
    <div className='flex flex-col items-center space-y-20'>
        <div className='w-7/8'>
            <h1 className='text-3xl'>The App</h1>
            <p>The app itself was accessed on my old portfolio, a NextJS deployment to Netlify.</p>
            <Carousel id='the-app' paths={app_paths} />
        </div>
        <div className='w-7/8'>
            <h1 className='text-3xl'>It was responsive for mobile devices, too!</h1>
            <p>Responsiveness designed using Tailwind CSS and JS.</p>
            <img src='/fullstack/front/mobile.PNG' className='rounded-lg shadow-xl'></img>
        </div>
        <div className='w-7/8'>
            <h1 className='text-3xl'>The System</h1>
            <p>User interface to API to BBall REF or Database retuned JSON.</p>
            <img src='/fullstack/system-diagram.jpg' className='rounded-lg shadow-xl'></img>
        </div>
        <div className='w-7/8'>
            <h1 className='text-3xl'>The Details</h1>
            <p>Local Git repositories for backend and frontend. CI/CD for API to EC2 by CodePipeline listener and CodeDeploy manager. CI/CD for frontend by Netlify listener and batteries-included deployments. MSSQL database a manual deployment.</p>
            <Carousel id='aws' paths={aws_paths} />
        </div>
        <div className='w-7/8'>
            <p>Database, DNS, SSL, Apache, Linux Debugging.</p>
            <Carousel id='details' paths={details_paths} />
        </div>
    </div>
  )
}

export default page