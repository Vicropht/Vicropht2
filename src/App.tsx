import './App.scss'
import { Container } from './components/container/Container'
import WinLogo from './assets/win_logo.svg';
import { useState } from 'react';

export default function App() {
  const [isAestethic, setAestethic] = useState(false);

  const handleClick = () => {
    setAestethic(aestethic => !aestethic);
  }

  return (
    <div className={`App ${isAestethic ? "aestethic" : ""}`}>
      <div className='background-effect'>
        {[...Array(200)].map((_, i) =>
          <div key={i} className='circle-container'>
            <div className='circle'></div>
          </div>
        )}
      </div>
      <div>
        <Container isAestethic={isAestethic} />
      </div>
      <div className='win-wrapper'>
        <button title='A E S T E T H I C  M O D E' onClick={handleClick}>
          <img src={WinLogo} width={30}></img>
        </button>
      </div>
    </div>
  )
}
