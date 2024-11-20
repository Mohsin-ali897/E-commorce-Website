import React from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Store from './component/Store'
import Selling from './component/Selling'
import HeroSection from './component/Hero'
import Browser from './component/Browser'
import Review from './component/Review'
import Hero2 from './component/Hero2'
import Footer from './component/Footer'



export default function page() {
  return (
    <>
      <Header />
      <Navbar />
      
      <div className='hidden md:block'>
        <HeroSection />
      </div>

    <div className='md:hidden'>
      <Hero2 />
    </div>

      <div className='mt-[350px] md:mt-[200px]'>
        <Store />
      </div>
      <Selling />
      <Browser />
      <Review />
      <Footer />
    </>
  )
}

