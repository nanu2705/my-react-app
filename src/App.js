
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


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       
       <Header/>
       <Loader/>
       <Routes>

         <Route path="/" element={<Home />} />
         <Route path="/services" element={<AllServices/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/career" element={<Career/>} />
         <Route path="*" element={<Nopage/>} />

       </Routes>

      <Footer/>
      <ScrollToTop/>
      
       </BrowserRouter>
    </div>
  );
}

export default App;
