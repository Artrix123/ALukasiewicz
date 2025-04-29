import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'
import Button from './components/Button'
import ProductList from './components/ProductList'
import Przyklad from './components/Przykład'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name={"Artur"} role={"Uczeń"} />
      <Button />
      <ProductList />
      <Przyklad isActive={true} isDisabled={false} />
    </>
  )
}

export default App;