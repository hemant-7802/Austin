import React, { useEffect } from 'react'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import WebFont from "webfontloader"

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
