import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import clawImg from './../../assets/claw.jpg'
import './Machine.css'

export function Claw() {
  const [left, setLeft] = useState(window.innerWidth / 2);
  const [top, setTop] = useState(0);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft':
        setLeft((prevLeft) => prevLeft <= 0 ? prevLeft : prevLeft - 10)
        break

      case 'ArrowRight':
        setLeft((prevLeft) => prevLeft >= window.innerWidth ? prevLeft : prevLeft + 10)
        break

      case ' ':
        break

      default:
        break
    }
  }, [])

  return (
    <div tabIndex={0} style={{ left: left, top: top, position: 'absolute' }} onKeyDown={handleKeyDown}>
      <img width="200" src={clawImg} className="claw" alt="claw" />
    </div>
  )
}

// For now, only the keyboard will work
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
      <div className='machine'>
        <div className='claw'>
          <Claw />
        </div>

        <div className='machine-prizes'></div>

        <div className='machine-panel flex justify-center'>
          <div className='buttons-area'>
            <div className='flex flex-row gap-12'>
              {/* <ArrowLeft />
            <GrabButton />
            <ArrowRight /> */}
              <img width={100} src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42234/joystick-emoji-clipart-md.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}