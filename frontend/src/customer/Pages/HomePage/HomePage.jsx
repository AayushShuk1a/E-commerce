import React from 'react'
import HomeCarousel from '../../components/Caraousel/HomeCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCaraousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>

        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
          
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage
