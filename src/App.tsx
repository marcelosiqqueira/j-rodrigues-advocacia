// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header'
import { LandingCarousel } from './components/LandingCarousel/LandingCarousel'
import { slides } from './components/LandingCarousel/slidesData'
function App() {

  return (
    <div>
      <Header></Header>
      <LandingCarousel 
        slides={slides} 
        whatsappLink="https://wa.me/seunumero"
        moreLink="#vejamais"
      />
    </div>
    
    
  )
}

export default App
