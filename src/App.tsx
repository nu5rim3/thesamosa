import React from 'react'
import './App.css'
import MainSection from './sections/main'
import OrderSection from './sections/order'
import SocialSection from './sections/social'
import Header from './components/Header'
import Footer from './components/Footer'
import LocationSection from './sections/location'
import FreeSection from './sections/free'
import MenuSection from './sections/menu'
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <React.Fragment>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
      />
      <Header />
      <main className="flex-1">
        <MainSection />
        <FreeSection />
        <MenuSection />
        <OrderSection />
        <SocialSection />
        <LocationSection />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App

// 0759187183 - uber
