import React from 'react'
import Profile from '@/app/components/ui/Profile'
import Skills from '../../components/ui/Skills'
import Professional from '../../components/ui/Professional'
import Timeline from '../../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col mx-2 mt-10 space-y-10 md:flex-row md:mx-25 md:justify-between'>
      <div className='flex flex-col space-y-25 md:w-6/20'>
        <Profile />
        <div className='w-full'>
          <Skills />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl'>Professional Experience</h1>
          <Professional />
        </div>
      </div>
      <div className='md:w-7/12'>
        <Timeline />
      </div>
    </div>
  )
}

export default page