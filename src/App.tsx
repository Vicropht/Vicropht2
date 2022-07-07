import './App.scss'
import { Container } from './components/container/Container'
import WinLogo from './assets/win-logo.png';
import { useState } from 'react';
import { Modes } from './modes.enum';

export default function App() {
  const [currentMode, setMode] = useState(Modes.default);

  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    setMode(previousMode => previousMode !== Modes.aestethic ? button.name as Modes : Modes.default);
  }

  // TODO: Add 'broken' mode when clicking too many time

  return (
    <div className={`App ${currentMode}`}>
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
        <button title='A E S T E T H I C  M O D E' name={`${Modes.aestethic}`} onClick={modeHandler}>
          <img src={WinLogo} width={30}></img>
        </button>
      </div>
    </div>
  )
}
