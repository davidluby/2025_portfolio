import React from 'react'
import Link from 'next/link'

const Profile = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src='../../../headshot.jpg' alt="Head shot picture" className='w-full' />
      </figure>
      <div className="card-body">
        <div className='flex flex-col'>
          <div className='flex flex-row justify-start space-x-3'>
              <h2 className="card-title">David Luby</h2>
              <Link href='https://www.linkedin.com/in/david-luby/' rel="noopener noreferrer" target="_blank" className='hover:brightness-125'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077b5"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z"/></svg>
              </Link>
              <Link href='https://github.com/davidluby' rel="noopener noreferrer" target="_blank" className='hover:brightness-175'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
              </Link>
          </div>
          <p className='font-bold'>University of New Hampshire, 2022</p>
          <p className='font-bold italic'>BS, Mechanical Engineering</p>
        </div>
        <div className="card-actions text-black">
          <div className="badge badge-outline bg-success">Mechanical Engineer</div>
          <div className="badge badge-outline bg-success">Fullstack Developer</div>
          <div className="badge badge-outline bg-error">Bad Golfer</div>
        </div>
      </div>
    </div>
  )
}

export default Profile