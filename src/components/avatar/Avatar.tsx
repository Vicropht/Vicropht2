import React, { Component, useReducer } from 'react'
import './Avatar.scss'
import AvatarPic from '../../assets/avatars/avatar.jpg';
import AestethicPic from '../../assets/avatars/aestethic-avatar.jpg';
import { Modes } from '../../modes.enum';

type Props = { currentMode: Modes };

export function Avatar(props: Props) {
  const setAvatar = () => {
    switch (props.currentMode) {
      case Modes.aestethic:
        return <img src={AestethicPic} />;
        
        default:
        return <img src={AvatarPic} />;
    }
  }

  return (
    <div className={`${props.currentMode} profile-pic`}>
      {setAvatar()}
    </div>
  )
}

export default Avatar;