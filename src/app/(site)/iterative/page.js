import React from 'react'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
    const iterative = [
        '/iterative/iterative_bg.jpg'
    ]

    const jacobi = [
      '/iterative/jg1.jpg', '/iterative/jg2.jpg', '/iterative/jg3.jpg'
    ]

    const sor = [
      '/iterative/sor1.jpg', '/iterative/sor2.jpg'
    ]

    const algo = [
      '/iterative/iterative_algo.jpg'
    ]

    const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
    const header= 'text-3xl font-bold'
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className={panel}>
        <h1 className={header}>Iterative Methods</h1>
        <img src={iterative} className='w-full rounded-lg shadow-xl' />
      </div>
      <div className={panel}>
        <h1 className={header}>Jacobi and Gauss-Seidel</h1>
        <Carousel id='jacobi-gauss' paths={jacobi} />
      </div>
      <div className={panel}>
        <h1 className={header}>Successive Overrelaxation</h1>
        <Carousel id='sor' paths={sor} />
      </div>
      <div className={panel}>
        <h1 className={header}>Iterative Algorithms</h1>
        <img src={algo} className='w-full rounded-lg shadow-xl' />
      </div>
    </div>
  )
}

export default page