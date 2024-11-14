import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import ErrorPage from "./pages/Error";
import AboutSection from "./pages/AboutSection";
import HomeSection from "./Layout/HomeSection";
import ShopSection from "./pages/ShopSection";
import Footer from "./Layout/Footer";
import ProductMoreDetails from "./pages/ProductMoreDetails";
import ServiceSection from "./pages/ServiceSection";
import LoginForm from "./pages/LoginUser";
import SignupForm from "./pages/SignUpUser";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./Layout/About";
import Blog from "./Layout/Blog";
import Contact from "./Layout/Contact";
// import LoginForm from "./pages/Form.jsx/LoginForm";

function App() {
  return (
    <>
    


        <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<LoginForm></LoginForm>}></Route>
          <Route path="/sign" element={<SignupForm></SignupForm>}></Route>
          <Route path="/ForgotPass" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/HomePage" element={<HomeSection></HomeSection>}></Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AllProduct" element={<ShopSection />} />
          <Route path="/ProductSingleView/:id" element={<ProductMoreDetails />} />
          <Route path="/Services" element={<ServiceSection />} />
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
        </>
      )
    }


export default App;
