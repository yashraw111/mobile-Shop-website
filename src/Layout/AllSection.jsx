import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from '../pages/Error';
import AboutSection from '../pages/AboutSection';
import ShopSection from '../pages/ShopSection';
import ProductMoreDetails from '../pages/ProductMoreDetails';
import ServiceSection from '../pages/ServiceSection';
import HomeSection from './HomeSection';


const AllSection = () => {
  return (
    <>
     <Router>
        <Header></Header>
        <Routes>
          {/* <Route path="/" element={<LoginForm></LoginForm>}></Route> */}
          <Route path="/" element={<HomeSection></HomeSection>}></Route>

          <Route path="*" element={<ErrorPage />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/AllProduct" element={<ShopSection />} />
          <Route path="/ProductSingleView/:id" element={<ProductMoreDetails />} />
          <Route path="/Services" element={<ServiceSection />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default AllSection