import './App.scss'
import { Container } from './components/container/Container'
import WinLogo from './assets/win-logo.png';
import CoffeeIcon from './assets/coffee.png';
import MenuClosed from './assets/menu_icon.svg'
import MenuOpen from './assets/menu-open.svg'
import { useState } from 'react';
import { Modes } from './modes.enum';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMode, setMode] = useState(Modes.default);

  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    setMode(previousMode => previousMode !== Modes.aestethic ? button.name as Modes : Modes.default);
  }

  // TODO: Add 'broken' mode when clicking too many times
  const toggleModeMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }

  const toggleAestethic = () => {
    setMode(() => Modes.aestethic);
  }

  const toggleComfy = () => {
    setMode(() => Modes.comfy);
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
      <div>
        <Container currentMode={currentMode} />
      </div>
      <nav role="navigation">
        <div id='menuWrapper'>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className='menu-item'>
        <button title='A E S T E T H I C  M O D E' onClick={toggleAestethic}>
          <img src={WinLogo} width={30}></img>
        </button>
      </div>
      <div className='menu-item'>
        <button title='comfy mode' onClick={toggleComfy}>
          <img src={CoffeeIcon} width={30}></img>
        </button>
      </div>
    </div>
  )
}
