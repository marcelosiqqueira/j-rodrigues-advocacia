// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'

import Header from './components/Header/Header'
import { LandingCarousel } from './components/LandingCarousel/LandingCarousel'
import { slides } from './components/LandingCarousel/slidesData'
import PracticeAreasSection from './components/PracticeAreasSection/PracticeAreasSection'
function App() {

  return (
    <div>
      <Header/>
      <LandingCarousel 
        slides={slides} 
        whatsappLink="https://wa.me/seunumero"
        moreLink="#vejamais"
      />
      <PracticeAreasSection/>
      <AboutUs/>
    </div>
    
    
  )
}

export default App
