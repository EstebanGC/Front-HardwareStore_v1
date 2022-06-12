import { useState } from 'react'
import './App.css'
import FormProvider from './components/FormProvider'
import FormProduct from './components/FormProduct'
import FormBill from './components/FormBill'
import FormReceipt from './components/FormReceipt'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './components/FormLogIn'
import FormSignIn from './components/FormSignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <div className="App">
      <h1>Hey, this is Raul's Store</h1>
      <hr></hr>
      <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/hardwarestore/signin" element={<FormSignIn/>}/>
      <Route path="/hardwarestore/provider" element={<FormProvider/>}/>
      <Route path="/hardwarestore/product" element={<FormProduct/>}/>
      <Route path="/hardwarestore/bill" element={<FormBill/>}/>
      <Route path="/hardwarestore/receipt" element={<FormReceipt/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
 