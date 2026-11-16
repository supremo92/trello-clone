import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Taskboard</h1>
          <p>
            New project goes here
          </p>
        </div>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li>
            <button
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </li>
          <li>
            <button
              className=""
              onClick={() => alert('Button clicked!')}
            >
              Alert
            </button>
          </li>
          <li>
          <button
            className="counter"
            onClick={() => {
              fetch('/api/')
                .then((res) => res.json())
                .then((data) => setName(data.name))
            }}
            aria-label='get name'
          >
            Name from API is: {name}
          </button>
          </li>
        </ul>


      </section>

     

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
