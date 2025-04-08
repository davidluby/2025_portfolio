import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='w-1/3'><div className="carousel w-full rounded-lg shadow-md">
    <div id="item1" className="carousel-item w-full">
      <Image className='w-full' src='/bike.jpg' alt='Motorized Bicycle' width='1000' height='1000' />
    </div>
    <div id="item2" className="carousel-item w-full">
      <Image className='w-full' src='/mech/arduino.jpg' alt='Arduino' width='1000' height='1000' />
    </div>
    <div id="item3" className="carousel-item w-full relative overflow-hidden">
      <Image className='scale-425' src='/timeline/fluid.png' alt='Fluid' layout={'fill'} objectFit={'contain'}/>
    </div>
    <div id="item4" className="carousel-item w-full">
      <Image className='w-full' src='/fullstack_old/system.png' alt='Fullstack' width='1920' height='1080' />
    </div>
  </div>
  <div className="flex w-full justify-center gap-2 py-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
  </div></div>
  )
}

export default Projects