import React from 'react'
import Skills from '../../components/Skills'
import Professional from '../../components/Professional'
import Timeline from '../../components/Timeline'

const page = () => {
  return (
    <div className='flex flex-col mx-2 mt-10 space-y-10 md:flex-row md:mx-30 md:justify-evenly'>
      <div className='flex flex-col space-y-10 md:w-1/2'>
        <div className='w-full'>
          <Skills />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl'>Professional Experience</h1>
          <Professional />
        </div>
      </div>
      <div className='md:w-1/4'>
        <h1 className='text-2xl'>Project Timeline</h1>
        <Timeline />
      </div>
    </div>
  )
}

export default page