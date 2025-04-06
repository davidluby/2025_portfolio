import "../globals.css";
import React from 'react'
import Footer from '../components/Footer'


export const metadata = {
  title: "Portfolio",
  description: "This is the project potfolio for David Luby",
};


const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className='bg-base-200'>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default layout
