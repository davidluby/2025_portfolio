import React from 'react'
import Three_Simulator from '@/app/components/simulations/3D-Simulator'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
    const euler = [
        '/fluids/fluid1.jpg', '/fluids/fluid2.jpg', '/fluids/fluid3.jpg', '/fluids/fluid4.jpg'
    ]

    const algo = [
        '/fluids/fluidAlgo1.jpg', '/fluids/fluidAlgo2.jpg', '/fluids/fluidAlgo3.jpg', '/fluids/fluidAlgo4.jpg', '/fluids/fluidAlgo5.jpg'
    ]
  return (
    <div>
        <Three_Simulator name='3d' />
        <Carousel id='3d-euler' paths={euler} />
        <Carousel id='3d-algo' paths={algo} />
    </div>
  )
}

export default page