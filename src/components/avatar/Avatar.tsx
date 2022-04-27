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

    function getRandomAvatar() {
      // max = 2, min = 0
      const randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      import(`../../assets/avatars/avatar-${randomNum}.jpg`).then((a) => {
        console.log(a);

        avatarPath = a;
      });
    }

    return (
      <div className='profile-pic'>
        <img src={avatarPath} key={avatarPath} onClick={() => getRandomAvatar()} width={300} height={600} />
      </div>
    )
  }
}

export default Avatar