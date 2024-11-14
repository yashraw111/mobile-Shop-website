import React from 'react'
import Homepage from '../pages/Homepage'
import WeRepairs from '../pages/WeRepairs'
import OurServices from '../pages/OurServices'
import Header from './Header'
import Footer from './Footer'
import ProductSectionForHome from '../pages/productSectionForHome'
const HomeSection = () => {
  return (
    <>
    <Header/>
   <Homepage></Homepage> 
   <WeRepairs></WeRepairs>
   <OurServices></OurServices>
   <ProductSectionForHome></ProductSectionForHome>
   {/* <CarImageGallery></CarImageGallery> */}
   <Footer></Footer>
    </>
  )
}

export default HomeSection