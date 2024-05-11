import React from 'react'
import Navigation from '../customer/components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/produtDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'

const CustomerRouters = () => {
  return (
    <div>
      <Navigation/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:lavalOne/:lavalTwo/:lavalThre' element={<Product/>}/> 
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

      
        {/* <Product/> */}

        {/* <ProductDetails/> */}

        {/* <Cart/> */}

        {/* <Checkout/> */}
        {/* <Order/> */}

        {/* <OrderDetails/> */}


      <div>
      <div className='bg-black'>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default CustomerRouters
