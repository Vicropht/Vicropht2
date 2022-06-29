import React, { Component, useReducer } from 'react'
import './Avatar.scss'
import AvatarPic from '../../assets/avatars/avatar.jpg';
import AestethicPic from '../../assets/avatars/aestethic-avatar.jpg';

type Props = { isAestethic: boolean };

export function Avatar(props: Props) {
  return (
    <div className={`${props.isAestethic ? "aesthetic-effect-crt" : ""} profile-pic`}>
      {
        !props.isAestethic ?
          <img src={AvatarPic} /> :
          <img src={AestethicPic} />
      }
    </div>
  )
}

export default Avatar;