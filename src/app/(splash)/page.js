import React from 'react'
import Navbar from '../components/Navbar'
import Splash from '../components/Splash'
import Profile from '../components/Profile'
import Projects from '../components/Projects'

const page = () => {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <Splash />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly h-screen'>
        <Profile />
        <Projects />
      </div>
    </div>
  )
}

export default page