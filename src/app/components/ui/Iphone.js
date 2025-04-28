import React from 'react'

const Iphone = ({ photo }) => {
  return (
    <div className='scale-75 hover:scale-110 transition transition-all duration-500'>
      <div className="relative mx-auto border-gray-400 bg-gray-400 border-[4px] rounded-[2rem] h-[600px] w-[337px] shadow-xl">
          <div className="w-[148px] h-[25px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-400 absolute -start-[7px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-400 absolute -start-[7px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-400 absolute -end-[7px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[1.75rem] overflow-hidden w-[329] h-[592px] border-[10px] border-black">
              <img src={photo} className='w-full h-full'></img>
          </div>
      </div>
    </div>
  )
}

export default Iphone