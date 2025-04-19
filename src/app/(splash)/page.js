'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/ui/Navbar'
import Splash from '../components/ui/Splash'
import Timeline from '../components/ui/Timeline'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col h-dvh w-full'>
        <Navbar />
        <Splash />
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center w-full pt-25 md:p-25 bg-base-200 overflow-hidden'>
        <Timeline />
      </div>
      <div className='w-full h-screen overflow-hidden relative'>
        <Image src='/golf.JPG' alt='Golf Background' fill={true} />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-10'>
          <p className='text-white font-bold text-5xl text-center'>Thanks for stopping by.</p>
          <Link href='https://www.linkedin.com/in/david-luby/' rel="noopener noreferrer" target="_blank" className='btn bg-[#0967C2] text-white border-[#0059b3] hover:brightness-125'>
            <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
            Find me on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page