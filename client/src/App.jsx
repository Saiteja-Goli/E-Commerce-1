import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductListing/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
