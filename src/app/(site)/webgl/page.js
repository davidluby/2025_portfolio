import React from 'react'
import GL_Triangle from '@/app/components/simulations/GL_Triangle'
import GL_Box from '@/app/components/simulations/GL_Box'
import GL_Mesh from '@/app/components/simulations/GL_Mesh'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
  const webGL_paths = [
    '/webgl/webgl1.jpg', '/webgl/webgl2.jpg'
  ]

  const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
  const header= 'text-3xl font-bold'

  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className={panel}>
        <h1 className={header}>WebGL Demonstrations</h1>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <GL_Triangle name='triangle' />
          <GL_Box name='box' />
          <GL_Mesh name='mesh' />
        </div>
      </div>
      <div className={panel}>
        <h1 className={header}>Graphics Basics</h1>
        <Carousel id='webGL' paths={webGL_paths} />
      </div>
    </div>
  )
}

export default page