import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import './App.css'
import { Container } from './components/container/Container'

function App() {
  return (
    <div className="App">
      <Container />
      <div className='Coin-view'>
        <div className="socials">
          <SocialIcon url="https://twitter.com/CristophVictor" />
          <SocialIcon url="https://github.com/Vicropht" />
          <SocialIcon url="mailto:vicropht@protonmail.com" />
          <SocialIcon url="https://www.linkedin.com/in/vicropht/" />
        </div>
      </div>
    </div>
  )
}

export default App
