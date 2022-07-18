import React from 'react'
import {
  layer,
  logo,
  logoIcon,
  logoFillContainer,
  logoFill,
  logoFillAnimated
} from './Loading.module.css'

type LoadingProps = {
  progress?: number
  scale?: number
}

const Loading = (props: LoadingProps) => {
  
  const {
    progress,
    scale = .5
  } = props

  return (
    <div className={layer}>
      <div className={logo} style={{ transform: `scale(${scale})`}}>
        <svg width="200px" height="118px" className={logoIcon} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M 133.872 0 H 0 V 118 L 5.76344 100.334 C 8.94113 100.334 14.1517 97.9245 16.8451 95.6596 C 19.5385 93.3946 22.8489 87.6689 24.4891 82.6336 L 30.1261 65.3291 L 51.3981 0.0282144 L 81.2937 0.0389849 L 51.5331 91.3983 C 49.5461 97.4258 45.0575 104.106 40.6471 107.742 C 36.2367 111.377 28.7583 114.873 21.2512 116.437 C 14.0706 117.932 8.17252 117.997 0.987932 118 L 0.0548851 118 L 98.1276 118 L 81.1697 68.3023 L 92.4467 35.1304 L 107.551 82.0975 L 133.872 0 Z M 163.634 0 L 200 118 V 0 H 163.634 Z M 171.404 118 L 145.199 35.1176 L 116.975 118 H 171.404 Z" />
            </g>
        </svg>
        <div className={logoFillContainer}>
          {progress === undefined ? (
              <div className={logoFillAnimated} />
            ) : (
              <div className={logoFill} style={{transform: `translateX(${-192 + 192 / 100 * progress}px`}}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Loading