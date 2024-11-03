import React from 'react'
import './App.css'
import MainSection from './sections/main'
import OrderSection from './sections/order'
import SocialSection from './sections/social'
import Header from './components/Header'
import Footer from './components/Footer'
import LocationSection from './sections/location'

function App() {

  return (
    <React.Fragment>
      <Header />
      <main className="flex-1">
        <MainSection />
        <OrderSection />
        <SocialSection />
        <LocationSection />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
