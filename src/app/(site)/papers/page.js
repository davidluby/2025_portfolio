import React from 'react'
import PDF from '@/app/components/ui/PDF'

const page = () => {
  const papers = [
    ['/papers/dLuby_603_project2.pdf', 0], ['/papers/dLuby_project1.pdf', 1], ['/papers/scammon_connor_luby_2b.pdf', 2], ['/papers/luby_ME627_report.pdf', 3]
  ]

  const panel = 'space-y-5 px-2 py-10 md:w-3/4 md:px-0'
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className={panel}>
        <PDF id='pdfs' paths={papers} />
      </div>
    </div>
  )
}

export default page