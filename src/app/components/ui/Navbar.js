'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Theme from './Theme'

const Navbar = () => {
    useEffect(() => {
        const nav = document.getElementById('navbar-slide')
        nav.classList.toggle('-translate-y-30')
    }, [])
  return (
    <div id='navbar-slide' className="navbar bg-base-300 shadow-xl p-0 h-0 transition transition-all duration-500 ease-in-out -translate-y-30 z-10 relative">
        <div className="navbar-start h-full w-full">
            <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow rounded-t-none">
                    <li><a href='resume'>Resume</a></li>
                    <li><a href='fullstack'>Fullstack Application</a></li>
                    <li><a href='mechatronics'>Mechatronics</a></li>
                    <li>
                        <div>Simulations</div>
                        <ul className="p-2">
                            <li><a href='3d-fluid'>3D Fluid Simulation</a></li>
                            <li><a href='2d-fluid'>2D Fluid Simulation</a></li>
                            <li><a href='collision'>Collision Simulation</a></li>
                            <li><a href='webgl'>WebGL</a></li>
                            <li><a href='iterative'>Iterative Methods</a></li>
                        </ul>
                    </li>
                    <li><a href='papers'>Papers</a></li>
                </ul>
            </div>
            <Link href='/' className="btn btn-ghost text-xl h-full rounded-none">davidluby.com</Link>
            <div className="lg:hidden navbar-end menu menu-horizontal space-x-3 h-full flex-grow">
                <a href='https://www.linkedin.com/in/david-luby/' rel="noopener noreferrer" target="_blank" className='hover:brightness-125'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077b5"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z"/></svg>
                </a>
                <a href='https://github.com/davidluby' rel="noopener noreferrer" target="_blank" className='hover:brightness-175'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                </a>
            </div>
            <div className="hidden lg:flex shrink-0 h-full">
                <ul className="menu menu-horizontal p-0">
                    <li><a className='rounded-none h-full flex items-center' href='resume'>Resume</a></li>
                    <li><a className='rounded-none h-full flex items-center' href='fullstack'>Fullstack Application</a></li>
                    <li><a className='rounded-none h-full flex items-center' href='mechatronics'>Mechatronics</a></li>
                    <li className='h-full m-0'>
                        <details className='h-full m-0'>
                            <summary className='rounded-none flex items-center h-full m-0'>Simulations</summary>
                            <ul className="p-2 w-3xs -translate-y-4 bg-base-300 shadow-none rounded-t-none">
                                <li><a href='3d-fluid'>3D Fluid Simulation</a></li>
                                <li><a href='2d-fluid'>2D Fluid Simulation</a></li>
                                <li><a href='collision'>Collision Simulation</a></li>
                                <li><a href='webgl'>WebGL</a></li>
                                <li><a href='iterative'>Iterative Methods</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className='rounded-none h-full flex items-center' href='papers'>Papers</a></li>
                </ul>
            </div>
        </div>
        <div className="hidden lg:flex navbar-end menu menu-horizontal space-x-3 h-full">
            <a href='https://www.linkedin.com/in/david-luby/' rel="noopener noreferrer" target="_blank" className='hover:brightness-125'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077b5"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z"/></svg>
            </a>
            <a href='https://github.com/davidluby' rel="noopener noreferrer" target="_blank" className='hover:brightness-175'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
            </a>
            <Theme />
        </div>
    </div>
  )
}

export default Navbar