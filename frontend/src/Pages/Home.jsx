import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Parts/HeroSection'
import Features from '../Parts/Features'


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Features/>
      <Footer />
    </div>
  )
}
