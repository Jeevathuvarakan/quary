import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeWhyChoose from '../components/Home/HomeWhyChoose'
import HomeService from '../components/Home/HomeService'
import HomePoject from '../components/Home/HomeProject'
import HomeContactUs from '../components/Home/HomeContactUs'
import HomeFeedback from '../components/Home/HomeFeedback'

function Home() {
  return (
    <div>
        <HeroBanner/>
        <HomeAboutUs/>
        <HomeWhyChoose/>
        <HomeService/>
        <HomePoject/>
        <HomeContactUs/>
        <HomeFeedback/>
    </div>
  )
}

export default Home