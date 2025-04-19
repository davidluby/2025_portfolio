import React from 'react'
import Profile from '@/app/components/ui/Profile'
import Skills from '../../components/ui/Skills'
import Professional from '../../components/ui/Professional'
import Timeline from '../../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col mx-2 mt-10 space-y-10 md:flex-row md:mx-20 md:justify-evenly'>
      <div className='flex flex-col space-y-25 md:w-1/3'>
        <Profile />
        <div className='w-full'>
          <Skills />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl'>Professional Experience</h1>
          <Professional />
        </div>
      </div>
      <div className='md:w-2/5'>
        <Timeline />
      </div>
    </div>
  )
}

export default page