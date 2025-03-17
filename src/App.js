
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Common/Home/Home';
import Header from './Common/Header/Header';
import AllServices from './Common/Section2/AllServices/AllServices';
import Contact from './Common/Contact/Contact';
import Footer from './Common/Footer/Footer';
import Loader from './Common/Loader/Loader';
import Nopage from './Common/Nopage/Nopage';
import ScrollToTop from './Common/ScrollToTop/ScrollTop';
import Career from './Common/Career/Career';
import Privacy from './Common/Privacy/Privacy';
import Terms from './Common/Terms/Terms';
import MoveToTop from './Common/MoveToTop/MoveToTop';
import Stories from './Common/Section6/Stories';
import RoleDetail from './Common/Career/RoleDetail';
import About from './Common/About/About';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <MoveToTop/>
       <Header/>
       <Loader/>
       <Analytics/>
       <Routes>

         <Route path="/" element={<Home />} />
         <Route path="/services" element={<AllServices/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/career" element={<Career/>} />
         <Route path="/career/:role" element={<RoleDetail/>} />
         <Route path="*" element={<Nopage/>} />
         <Route path="/privacy" element={<Privacy/>} />
         <Route path="/terms" element={<Terms/>} />
         <Route path="/stories" element={<Stories/>} />
         <Route path="/about" element={<About/>} />


       </Routes>

      <Footer/>
      <ScrollToTop/>
      
       </BrowserRouter>
    </div>
  );
}

export default App;
