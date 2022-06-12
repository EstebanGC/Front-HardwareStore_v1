import { useState } from 'react'
import './App.css'
import FormProvider from './components/FormProvider'
import FormProduct from './components/FormProduct'
import FormBill from './components/FormBill'
import FormReceipt from './components/FormReceipt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey, this is Raul's Store</h1>
      <FormProvider/>
      <FormProduct/>
      <FormBill/>
      <FormReceipt/>
    </div>
  )
}

export default App
 