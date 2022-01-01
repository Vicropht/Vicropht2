import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import clawImg from './../../assets/claw.jpg'

function Claw() {
  const [left, setLeft] = useState(0);
  const fn = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);

    switch (event.key) {
      case 'ArrowLeft':
        setLeft((prevLeft) => prevLeft + 10)
        console.log(left)
        break

      case 'ArrowRight':
        setLeft((prevLeft) => prevLeft - 10)
        break

      case ' ':
        break

      default:
        break
    }
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div tabIndex={0} style={{ left }} onKeyDown={fn}>
      <img width="200" src={clawImg} className="claw" alt="claw" />
    </div>
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