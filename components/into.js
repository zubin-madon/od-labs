import React from 'react'
import { Fragment } from 'react'

function Intro() {
  return (
    <Fragment>
          <video
            src={"/videos/home.mp4"}
            autoPlay
            loop
            muted
            className="object-contain lg:object-cover h-screen w-screen absolute rotate-90 xl:rotate-0"
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
              xlinkHref="/images/home-hidden.png"
              className='rotate-90 lg:rotate-0'
            ></image>
            <a href="/home">
              <rect
                x="516"
                y="437"
                fill="#fff"
                opacity="0"
                width="393"
                height="243"
              ></rect>
            </a>
          </svg>
        
      </Fragment>
  )
}

export default Intro