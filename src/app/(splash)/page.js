import React from 'react'
import Navbar from '../components/ui/Navbar'
import Splash from '../components/ui/Splash'
import Profile from '../components/ui/Profile'
import Timeline from '../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col h-screen w-full'>
        <Navbar />
        <Splash />
      </div>
      <div className='min-h-screen flex flex-col items-center md:flex-row md:justify-evenly w-full bg-neutral'>
        <div className='w-[97%] md:w-1/4'>
          <Profile />
        </div>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center w-full md:p-75 bg-base-200'>
        <Timeline />
      </div>
    </div>
  )
}

export default page