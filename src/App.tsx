import { useState } from 'react';
import './App.scss'
import { Container } from './components/container/Container'
import { Menu } from './components/menu/Menu'
import { Modes } from './modes.enum'

export default function App() {
  const [currentMode, setMode] = useState(Modes.default);

  const changeMode = (mode: Modes) => {
    setMode(mode);
  }

  return (
    <div className={`App ${currentMode}`}>
      <div className='background-effect'>
        {[...Array(200)].map((_, i) =>
          <div key={i} className='circle-container'>
            <div className='circle'></div>
          </div>
        )}
      </div>
      <Menu changeMode={changeMode} />
      <div>
        <Container currentMode={currentMode} />
      </div>
    </div>
  )
}
