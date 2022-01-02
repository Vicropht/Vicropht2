import { SocialIcon } from 'react-social-icons'
import arcadeCoin from './assets/arcade-coin.svg'
import './App.css'
import Machine from "./machine/Machine"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='Coin-view'>
        <p className="insert-coin-text pointer">Insert coin</p>
        <Link to="/machine">
          <img src={arcadeCoin} className="coin" alt="coin" />
        </Link>

        <div className="socials">
          <SocialIcon url="https://twitter.com/CristophVictor" />
          <SocialIcon url="https://github.com/Vicropht" />
          <SocialIcon url="mailto:vicropht@protonmail.com" />
          <SocialIcon url="https://www.linkedin.com/in/vicropht/" />
        </div>
      </div>

      <Switch>
        <Route path="machine">
          <Machine />
        </Route>
      </Switch>
    </div>

  )
}

export default App
