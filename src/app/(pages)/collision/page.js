import React from 'react'
import Collisions from '../../components/simulations/Collisions'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[97%] md:w-1/2'>
            <Collisions name='collision' />
        </div>
    </div>
        
  )
}

export default page