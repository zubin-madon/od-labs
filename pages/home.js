import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'

function Home() {
  return (
    <div className='parent relative'>
    <Fragment>
          <video
            src={"/videos/transition-a.mp4"}
            autoPlay
            muted
            className="object-contain lg:object-cover h-screen w-screen absolute rotate-90 lg:rotate-0 z-0"
          />
         
         
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1920 1080"
            className="object-cover h-screen w-screen absolute z-10 opacity-0 rotate-90 lg:rotate-0"
          >
            <image
              width="1920"
              height="1080"
              xlinkHref="/images/transition-a-hidden.png"
              className='rotate-90 lg:rotate-0 opacity-0'
            ></image>
            <a href="/hologram">
              <rect
                x="454"
                y="383"
                fill="fff"
                opacity="10"
                width="1062"
                height="490"
    
              >
              </rect>
            </a>
          </svg>
        
      </Fragment>
      </div>
  )
}

export default Home