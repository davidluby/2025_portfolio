'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/app/components/ui/Carousel'
import Laptop from '@/app/components/ui/Laptop'
import Iphone from '@/app/components/ui/Iphone'

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

    const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
    const header= 'text-3xl font-bold'

  return (
    <div className='flex flex-col items-center'>
        <div className='relative w-full h-200 md:h-screen'>
            <Image src='/fullstack/background.jpg' fill={true} priority={true} alt='marcus smart background' className='absolute object-cover brightness-40' />
            <h1 className={`${header} absolute top-0 left-0 lg:top-10 lg:left-1/8 text-gray-300`}>Basketball Cards App</h1>
            <div className='relative top-1/16 lg:top-1/2 transform lg:-translate-y-1/2 flex flex-col lg:flex-row lg:justify-evenly lg:items-center'>
                <Laptop photo='/fullstack/front/creating.png' />
                <Iphone photo='/fullstack/front/mobile.PNG' />
            </div>
        </div>
        <div className={`${panel} pt-10`}>
            <h1 className={header}>The App</h1>
            <p>
                The app allowed users to create a starting five of virtual basketball cards with their favorite players.
                Saved decks were shared globally for other users to view, copy, and edit. It was supported on desktop
                and mobile browsers.

            </p>
            <Carousel id='the-app' paths={app_paths} />
        </div>
        <div className={panel}>
            <h1 className={header}>The System</h1>
            <p>
                Four user actions on the frontend made calls to API endpoints, including searching for a card, saving a deck,
                loading saved decks, and deleting a deck. The search endpoint received the player name entered into the search
                bar and returned the player&apos;s data scraped from www.basketballreference.com. Clicking save used local
                state management to call the API&apos;s create or update endpoints depending on if the saved deck was new or
                preexisting. Two more user actions called API endpoints that loaded or deleted decks from the database.
            </p>
            <div className='flex justify-center'>
                <img src='/fullstack/system-diagram.jpg' className='rounded-lg shadow-xl'></img>
            </div>
        </div>
        <div className={panel}>
            <h1 className={header}>The Details</h1>
            <p>
                Local Git repositories for the frontend and backend fed CI/CD pipelines to Netlify and AWS deployments,
                respectively. Netlify has a simple, batteries-included CI/CD system, automatically triggering builds
                whenever local commits are pushed to a remote repository. AWS is a little more complex.
            </p>
            <p>
                To set up a similar process for the backend, the local repository fed into AWS CodePipeline and CodeDeploy
                to initiate builds on an Amazon Linux 2 instance. CodePipeline watches remote GitHub repositories for
                pushes and stores the code in an S3 bucket. CodeDeploy watches the bucket and, in this case, used an
                appspec.yml file to manage the deployment.
            </p>
            <Carousel id='aws' paths={aws_paths} />
        </div>
        <div className={panel}>
            <p>
                The MSSQL database was deployed manually via AWS RDS. Below are pictures of the database setup, some
                artifacts of the DNS and SSL, as well as the Apache server and a look at how it was debugged on the
                Linux instance.
            </p>
            <Carousel id='details' paths={details_paths} />
        </div>
    </div>
  )
}

export default page