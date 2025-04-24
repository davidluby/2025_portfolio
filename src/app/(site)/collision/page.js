import React from 'react'
import Collisions from '../../components/simulations/Collisions'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
  const collision_paths = [
    '/collision/collision1.jpg', '/collision/collision2.jpg', '/collision/collisionAlgo1.jpg', '/collision/collisionAlgo2.jpg'
  ]

  return (
    <div className='flex flex-col items-center space-y-20'>
        <div className='w-[97%] md:w-1/2'>
            <Collisions name='collision' />
        </div>
        <div className='w-1/2'>
          <Carousel id='collisions' paths={collision_paths} />
        </div>
    </div>
        
  )
}

export default page