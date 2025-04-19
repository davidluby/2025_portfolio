'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Timeline_Element = ({ content }) => {
  useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
      }
  
      const callbackFunction = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          const timeline_slide = document.getElementById(content.title)
          timeline_slide.classList.toggle('translate-y-25')
          timeline_slide.classList.toggle('opacity-0')
          observer.unobserve(timeline_slide_parent)
        }
      }
  
      const observer = new IntersectionObserver(callbackFunction, options)
      const timeline_slide_parent = document.getElementById(content.title + '-parent')
      observer.observe(timeline_slide_parent)
    }, [])

  return (
    <li id={content.title + '-parent'}>
      <hr />
      <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
      </div>
      <div className="timeline-start text-start md:text-end">
        <time className="font-mono italic">{content.year}</time>
        <div className="text-lg font-black">{content.title}</div>
        {content.text}
      </div>
      <div id={content.title} className="timeline-end relative w-19/20 md:w-full h-50 md:h-100 rounded-sm shadow-xl overflow-hidden tansition transition-all duration-750 translate-y-25 opacity-0">
        {
        content.link !== null ?
        <Link href={content.link}>
          <Image src={content.src} fill={true} alt={content.title} className='hover:scale-125 transition transition-all duration-1000 ease-in-out' />
        </Link> 
        : <Image src={content.src} fill={true} alt={content.title} className='hover:scale-125 transition transition-all duration-1000 ease-in-out' />
        }
      </div>
      <hr />
    </li>
  )
}

export default Timeline_Element