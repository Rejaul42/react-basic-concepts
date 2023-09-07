import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Person></Person>
      <Student name='Sakib' grate='7' score='85'></Student>
      <Student name='Ananto' grate='6' score='90'></Student>
      <Student name='Ariv' grate='5' score='95'></Student>
    </>
  )
}

function Person() {
  const info = {
    name: 'Sakib',
    age: 7
  };
  const age = 15;
  return <h3>I am {info.name} my age is : {age + info.age}</h3>
}

function Student({name='', grate=0, score=0}) {
  return (
    <div className='student'>
      <h3>My name is {name}</h3>
      <p>My grate is: {grate} </p>
      <p>My score is: {score}</p>
    </div>
  )
}

export default App
