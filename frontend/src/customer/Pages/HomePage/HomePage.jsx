import React from 'react'
import HomeCarousel from '../../components/Caraousel/HomeCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCaraousel/HomeSectionCarousel'
import { mens_kurta } from '../../../assets/ecommerce-products-data/Men/men_kurta'
import { mensPantsPage1 } from '../../../assets/ecommerce-products-data/pants/men_page1'
import { mensShoesPage1 } from '../../../assets/ecommerce-products-data/shoes'
import { sareePage1 } from '../../../assets/ecommerce-products-data/Saree/page1'
import { gounsPage1 } from '../../../assets/ecommerce-products-data/Gouns/gouns'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'
import ProductDetails from '../../components/produtDetails/ProductDetails'

const HomePage = () => {
  return (
    <div>
        {/* <HomeCarousel/>

        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
          
          <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
          <HomeSectionCarousel data={mensPantsPage1} sectionName="Men's Pants"/>
          <HomeSectionCarousel data={mensShoesPage1} sectionName="Men's Shoes"/>
          <HomeSectionCarousel data={sareePage1} sectionName="Women's Saree"/>
          <HomeSectionCarousel data={gounsPage1} sectionName="Women's Gouns"/>
        </div>

        <div className='bg-black'>
        <Footer/>
        </div> */}

        {/* <Product/> */}

        <ProductDetails/>

        
    </div>
  )
}

export default HomePage
