import React from 'react'
import Splash from './components/Splash'
import Profile from './components/Profile'
import Projects from './components/Projects'

export default function page() {
  return (
    <div className='absolute left-0 top-0 min-h-screen w-full z-[-1]'>
      <Splash />
      <div className='flex flex-row items-center justify-evenly h-screen'>
        <Profile />
        <Projects />
      </div>
    </div>
  )
}