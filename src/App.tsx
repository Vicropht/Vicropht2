import './App.scss'
import { Container } from './components/container/Container'

function App() {
  return (
    <div className="App">
      <div className='background-effect'>
        {[...Array(200)].map((_, i) =>
          <div key={i} className='circle-container'>
            <div className='circle'></div>
          </div>
        )}
      </div>
      <div>
        <Container />
      </div>
    </div>
  )
}

export default App
