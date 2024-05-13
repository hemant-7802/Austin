import React, { useEffect } from 'react'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import WebFont from "webfontloader"
import ProductDetails from './components/product/ProductDetails'
import Product from './components/product/Products'

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  })

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/product/:id' Component={ProductDetails} />
        <Route path='/products' Component={Product} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
