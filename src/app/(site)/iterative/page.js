import React from 'react'
import Carousel from '@/app/components/ui/Carousel'

const page = () => {
    const iterative_paths = [
        '/iterative/iterative_bg.jpg', '/iterative/jg1.jpg', '/iterative/jg2.jpg', '/iterative/jg3.jpg', '/iterative/sor1.jpg', '/iterative/sor2.jpg', '/iterative/iterative_algo.jpg'
    ]
  return (
    <div>
        <Carousel id='iterative' paths={iterative_paths} />
    </div>
  )
}

export default page