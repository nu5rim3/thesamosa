import React from 'react'
import './App.css'
import MainSection from './sections/main'
import OrderSection from './sections/order'
import SocialSection from './sections/social'
import Header from './components/Header'
import Footer from './components/Footer'
import LocationSection from './sections/location'
import FreeSection from './sections/free'

function App() {

  return (
    <React.Fragment>
      <Header />
      <main className="flex-1">
        <MainSection />
        <FreeSection />
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
