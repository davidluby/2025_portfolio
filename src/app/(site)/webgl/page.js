import React from 'react'
import GL_Triangle from '@/app/components/simulations/GL_Triangle'
import GL_Box from '@/app/components/simulations/GL_Box'
import GL_Mesh from '@/app/components/simulations/GL_Mesh'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
  const webGL_paths = [
    '/webgl/mesh1.jpg', '/webgl/mesh2.jpg', '/webgl/mesh3.jpg', '/webgl/webgl1.jpg', '/webgl/webgl2.jpg'
  ]
  return (
    <div className='flex flex-col w-1/5'>
        <GL_Triangle name='triangle' />
        <GL_Box name='box' />
        <GL_Mesh name='mesh' />
        <Carousel id='webGL' paths={webGL_paths} />
    </div>
  )
}

export default page