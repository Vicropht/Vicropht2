import './App.scss'
import { Container } from './components/container/Container'

function App() {
  return (
    <div className="App">
      {[...Array(200)].map((_, i) =>
        <div key={i} className='circle-container'>
          <div className='circle'></div>
        </div>
      )}
      <body>
        <Container />
      </body>
    </div>
  )
}

export default App
