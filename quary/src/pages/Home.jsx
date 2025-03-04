import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeWhyChoose from '../components/Home/HomeWhyChoose'
import HomeService from '../components/Home/HomeService'
import HomePoject from '../components/Home/HomeProject'

function Home() {
  return (
    <div>
        <HeroBanner/>
        <HomeAboutUs/>
        <HomeWhyChoose/>
        <HomeService/>
        <HomePoject/>
    </div>
  )
}

export default Home