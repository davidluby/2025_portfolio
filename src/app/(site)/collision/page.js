import React from 'react'
import Collisions from '../../components/simulations/Collisions'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
  const momentum_paths = [
    '/collision/collision1.jpg', '/collision/collision2.jpg'
  ]

  const algorithm_paths = [
    '/collision/collisionAlgo1.jpg', '/collision/collisionAlgo2.jpg'
  ]

  const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
  const header= 'text-3xl font-bold'
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className={panel}>
        <h1 className={header}>2 Dimensional Collision Simulation</h1>
        <Collisions name='collision' />
      </div>
      <div className={panel}>
        <h1 className={header}>Conservation of Momentum Formulation</h1>
        <Carousel id='momentum' paths={momentum_paths} />
      </div>
      <div className={panel}>
        <h1 className={header}>Collision Algorithm</h1>
        <Carousel id='collision-algo' paths={algorithm_paths} />
      </div>
    </div>
        
  )
}

export default page