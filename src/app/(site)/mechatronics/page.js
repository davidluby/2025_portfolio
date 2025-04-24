import React from 'react'

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly w-[97%] res:w-5/6 -mt-5">
        <div className="tile w-[300px] h-[500px] mt-5">
          <iframe className="rounded-md w-full h-full shadow-xl" src="https://www.youtube.com/embed/XdCFYtW8jBc" title="v3" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="tile w-[300px] h-[500px] mt-5">
          <iframe className="rounded-md w-full h-full shadow-xl" src="https://www.youtube.com/embed/--vCE5AsHIY" title="v2" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="tile w-[300px] h-[500px] mt-5">
          <iframe className="rounded-md w-full h-full shadow-xl" src="https://www.youtube.com/embed/8P3UF1Z6qRs" title="v1" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default page