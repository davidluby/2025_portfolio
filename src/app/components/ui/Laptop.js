import React from 'react'

const Laptop = ({ photo }) => {
  return (
    <div className='lg:scale-110 hover:scale-125 transition transition-all duration-500'>
        <div className="relative mx-auto border-gray-400 bg-gray-400 border-[4px] rounded-t-xl h-[172px] max-w-[301px] lg:h-[294px] lg:max-w-[512px]">
            <div className="border-8 border-black rounded-lg overflow-hidden h-[156px] lg:h-[278px] bg-white">
                <img src={photo} className="h-[156px] lg:h-[278px] w-full rounded-lg hover:scale-150 transition transition-all duration-500" alt="" />
            </div>
        </div>
        <div className="relative mx-auto bg-gray-400 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] lg:h-[21px] lg:min-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] lg:w-[96px] lg:h-[8px] bg-gray-300"></div>
        </div>
    </div>
  )
}

export default Laptop