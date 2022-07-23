import React, { Component, ReactElement, useState } from 'react'
import './Container.scss'
import Avatar from '../avatar/Avatar'
import { Modes } from '../../modes.enum'

export function Container({ currentMode }: { currentMode: Modes }): ReactElement {
  return (
    <div className='container-center'>
      <div className={`wrapper ${currentMode}`}>
        <h1 className={`title ${currentMode}`} data-glitch="V I C R O P H T">V I C R O P H T</h1>
        <a className='discord' href='https://discord.com/users/355435413705326597'>[root]#6722</a>

        <Avatar currentMode={currentMode} />

        <div className='socials'>
          <a href="https://twitter.com/CristophVictor">Twitter</a>
          <a href="https://github.com/Vicropht">GitHub</a>
          <a href="mailto:vicropht@protonmail.com">Contact</a>
          <a href="https://www.linkedin.com/in/vicropht/">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
