import React from 'react'
import Navbar from '../components/ui/Navbar'
import Splash from '../components/ui/Splash'
import Profile from '../components/ui/Profile'
import Timeline from '../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col items-center space-y-50 mb-50'>
      <div className='flex flex-col h-screen w-full'>
        <Navbar />
        <Splash />
      </div>
      <div className='min-h-screen flex flex-col space-y-20 items-center md:flex-row md:justify-evenly'>
        <div className='w-[97%] md:w-full'>
          <Profile />
        </div>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center md:w-1/2'>
        <Timeline />
      </div>
    </div>
  )
}

export default page