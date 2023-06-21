import { useState } from 'react';
import './App.css'
import CounterCard from './CounterCard'
import Header from './Header';

function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Header />
      <CounterCard count={count} setCount={setCount}/>
    </>
  )
}

export default App
