import React from 'react'
import Splash from './components/Splash'
import Profile from './components/Profile'

export default function page() {
  return (
    <div className='absolute left-0 top-0 min-h-screen w-full z-[-1]'>
      <Splash />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Profile />
      </div>
    </div>
  )
}
