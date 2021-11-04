import { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import arcadeCoin from './arcade-coin.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Coin-view'>
        <p className="insert-coin-text">Under construction</p>
        <span className="material-icons-outlined icon">construction</span>

        <div className="socials">
          <SocialIcon url="https://twitter.com/CristophVictor" />
          <SocialIcon url="https://github.com/Vicropht" />
          <SocialIcon url="mailto:vicropht@protonmail.com" />
          <SocialIcon url="https://www.linkedin.com/in/vicropht/" />
        </div>
      </div>
      {/* <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}
    </div>
  )
}

export default App
