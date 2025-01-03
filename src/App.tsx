// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutOffice from './components/AboutOffice/AboutOffice'
import AboutUs from './components/AboutUs/AboutUs'
import ClientReviewsSection from './components/ClientReviewsSection/ClientReviewsSection'
import Footer from './components/Footer/Footer'

import Header from './components/Header/Header'
import { LandingCarousel } from './components/LandingCarousel/LandingCarousel'
import { slides } from './components/LandingCarousel/slidesData'
import PracticeAreasSection from './components/PracticeAreasSection/PracticeAreasSection'
import ProfileSection from './components/ProfileSection/ProfileSection'
import WppFloatingButton from './components/WppFloatingButton/WppFloatingButton'
function App() {

  return (
    <div>
      <Header/>
      <LandingCarousel 
        slides={slides} 
        moreLink="#practice-cards-container"
      />
      <PracticeAreasSection/>
      <AboutUs/>
      <ProfileSection/>
      <AboutOffice/>
      <ClientReviewsSection/> 
      <Footer/>
      <WppFloatingButton />
    </div>

  )
}

export default App
