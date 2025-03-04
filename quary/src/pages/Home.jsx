import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeWhyChoose from '../components/Home/HomeWhyChoose'

function Home() {
  return (
    <div>
        <HeroBanner/>
        <HomeAboutUs/>
        <HomeWhyChoose/>
    </div>
  )
}

export default Home