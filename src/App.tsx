import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormProvider from './components/FormProvider'
import FormProduct from './components/FormProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey, this is Raul's Store</h1>
      <FormProvider/>
      <FormProduct/>
    </div>
  )
}

export default App
 