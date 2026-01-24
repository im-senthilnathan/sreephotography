import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Packages from './sections/Packages'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
      <FloatingChat />
    </>
  )
}

export default App
