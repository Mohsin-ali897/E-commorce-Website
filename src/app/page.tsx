import React from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Store from './component/Store'
import Selling from './component/Selling'
import HeroSection from './component/Hero'
import Browser from './component/Browser'
import Review from './component/Review'
import Footer from './component/Footer'
import Offers from './component/offer'



export default function page() {
  return (
    <>
      <Header />
      <Navbar />
      
        <HeroSection />

        <Store />

      <Selling />
      <Browser />
      <Review />
      <div className='my-12'>
      <Offers/>
      </div>
      <Footer />
    </>
  )
}

