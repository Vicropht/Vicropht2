import React, { MouseEventHandler, useEffect } from 'react'
import clawImg from './../../assets/claw.jpg'

function Claw() {
  return (
    <img width="200" src={clawImg} className="claw" alt="claw" />
  )
}

function ArrowLeft() {
  return (
    <span>LEFT</span>
  )
}

function ArrowRight() {
  return (
    <span>RIGHT</span>
  )
}

function GrabButton() {
  return (
    <span>GRAB!</span>
  )
}


export default function Machine() {
  useEffect(() => {
    function handleKeyDown(e: any) {
      switch (e.keyCode) {
        case 37:
          console.log('left')
          break

        case 39:
          console.log('right')
          break

        case 32:
          console.log('space')
          break

        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <div>
      <div className='claw_area'>
        <Claw />
      </div>

      <div className='buttons_area'>
        <div className='flex flex-row gap-12'>
          <ArrowLeft />
          <GrabButton />
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}