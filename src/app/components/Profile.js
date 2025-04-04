import React from 'react'
import Image from 'next/image'
import Headshot from '../../../public/headshot.jpg'

const Profile = () => {
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <Image src={Headshot} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile