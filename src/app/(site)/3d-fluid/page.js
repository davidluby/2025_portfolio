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

    const mesh = [
      '/fluids/mesh1.jpg', 'fluids/mesh2.jpg', '/fluids/mesh3.jpg'
    ]

    const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
    const header= 'text-3xl font-bold'
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className={panel}>
        <h1 className={header}>3 Dimensional Fluid Simulation</h1>
        <p>
          This fluid simulation is an adaptation of Jos Stam&apos;s
          <a href='https://graphics.cs.cmu.edu/nsp/course/15-464/Spring11/papers/StamFluidforGames.pdf' rel="noopener noreferrer" target="_blank" className='text-blue-500'><i> Real-Time Fluid Dynamics for Games </i></a>
          for JavaScript in 3 dimensions. The solver models an Eulerian fluid using a discrete approximation of a modified Navier-Stokes formulation.
        </p>
        <p>
          A major limitation of the simulation is the platform it lives on. Brower-based applications are not
          conducive to simulations like this. For the 20x20x30 simulation shown (12,000 elements), 144,000
          polygons need to be drawn, corresponding to 432,000 coordinates, 1,296,000 coordinate components,
          and 1,728,000 RGBA values for each coordinate. And that is without consideration of the expense
          required by the algorithm itself. It is prohibitively expensive, resulting in moderate performance
          even at a low resolution.
        </p>
        <Three_Simulator name='3d' />
      </div>
      <div className={panel}>
        <h1 className={header}>Derivation of the Euler Equations</h1>
        <Carousel id='3d-euler' paths={euler} />
      </div>
      <div className={panel}>
        <h1 className={header}>Simulation Algorithm</h1>
        <Carousel id='3d-algo' paths={algo} />
      </div>
      <div className={panel}>
        <h1 className={header}>Mesh Generation Algorithm</h1>
        <Carousel id='3d-mesh' paths={mesh} />
      </div>
    </div>
  )
}

export default page