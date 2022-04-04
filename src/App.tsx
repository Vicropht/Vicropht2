import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App stars twinkling clouds">
      <Sidebar />
      <div className='Coin-view'>
        <p className="insert-coin-text pointer">Insert coin</p>

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

const hidden = true;

export default App
