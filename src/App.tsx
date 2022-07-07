import './App.scss'
import { Container } from './components/container/Container'
import WinLogo from './assets/win-logo.png';
import { useState } from 'react';
import { Modes } from './modes.enum';

export default function App() {
  const [currentMode, setMode] = useState(Modes.default);

  const toggleAestethic = () => {
    setMode(() => Modes.aestethic);
  }

  return (
    <div className={`App ${currentMode === Modes.aestethic ? "aestethic" : ""}`}>
      <div className='background-effect'>
        {[...Array(200)].map((_, i) =>
          <div key={i} className='circle-container'>
            <div className='circle'></div>
          </div>
        )}
      </div>
      <div>
        <Container currentMode={currentMode} />
      </div>
      <div className='win-wrapper'>
        <button title='A E S T E T H I C  M O D E' onClick={toggleAestethic}>
          <img src={WinLogo} width={30}></img>
        </button>
      </div>
    </div>
  )
}
