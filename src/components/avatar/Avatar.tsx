import React, { Component, useReducer } from 'react'
import './Avatar.scss'
import PrimaryAvatar from '../../assets/avatars/avatar-0.jpg';

type Props = {}

type State = {};

export class Avatar extends Component<Props, State> {
  state = {};

  componentDidUpdate() {

  }

  render() {
    let avatarPath = PrimaryAvatar;

    return (
      <div className='profile-pic'>
        <img src={avatarPath} key={avatarPath} width={300} height={600} />
      </div>
    )
  }
}

export default Avatar