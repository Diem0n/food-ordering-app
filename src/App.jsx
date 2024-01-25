import { useContext, useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

function App() {
  const [showCart , setShowCart] = useState(false);
  
  const show = ()=> {
    setShowCart(true)
  }
  const hide = ()=> {
    setShowCart(false)
  }
  return (
    <CartProvider>
     {showCart &&  <Cart hide={hide} />}
     
      <Header show={show}/>
      <Meals />
    </CartProvider>
  )
}

export default App
