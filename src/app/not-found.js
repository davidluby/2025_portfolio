import React from 'react'
import "./globals.css";
import Navbar from './components/ui/Navbar';

const NotFound = () => {
  const header= 'text-3xl font-bold'
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen space-y-5 text-center'>
      <h1 className='text-3xl font-bold'>404 - Page not found.</h1>
      <p className='text-xl'>
        Apologies for the inconvenience. You may have a link to my old portfolio (this version was published 4/28/25).
      </p>
      <a href="/" className='btn btn-success w-3/4 md:w-1/5 text-xl'>Return Home</a>
    </div>

    </div>
  )
}

export default NotFound