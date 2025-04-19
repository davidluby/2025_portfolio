'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/ui/Navbar'
import Splash from '../components/ui/Splash'
import Timeline from '../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col h-screen w-full'>
        <Navbar />
        <Splash />
      </div>
      <p className='text-5xl font-bold my-25'>Project Timeline</p>
      <div className='min-h-screen flex flex-col items-center justify-center w-full md:px-50 md:mb-50 bg-base-200 overflow-hidden'>
        <Timeline />
      </div>
      <div className='w-full h-screen overflow-hidden relative'>
        <Image src='/golf.JPG' alt='Golf Background' fill={true} />
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl text-center'>Thanks for visiting. Please feel free to connect with me on LinkedIn.</p>
      </div>
    </div>
  )
}

export default page