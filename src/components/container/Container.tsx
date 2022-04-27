import React, { Component } from 'react'
import './Container.scss'
import Avatar from '../avatar/Avatar'

type Props = {}

type State = {}

export class Container extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='wrapper'>
        <h1 className='title'>Vicropht</h1>

        <Avatar />

        <div className='socials'>
          <a href="https://twitter.com/CristophVictor">Twitter</a>
          <a href="https://github.com/Vicropht" >GitHub</a>
          <a href="mailto:vicropht@protonmail.com" >Contact</a>
          <a href="https://www.linkedin.com/in/vicropht/" >LinkedIn</a>
        </div>
      </div>
    )
  }
}

export default Container