
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Common/Home/Home';
import Header from './Common/Header/Header';
import AllServices from './Common/Section2/AllServices/AllServices';
import Contact from './Common/Contact/Contact';
import Footer from './Common/Footer/Footer';
import GoToTop from './Common/GoToTop';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowBigUpIcon } from 'lucide-react';
import Loader from './Common/Loader/Loader';
import Nopage from './Common/Nopage/Nopage';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <GoToTop/>
       <Header/>
       <Loader/>
       <Routes>

         <Route path="/" element={<Home />} />
         <Route path="/services" element={<AllServices/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="*" element={<Nopage/>} />

       </Routes>

      <Footer/>
      <ScrollToTop className='scrolltop' smooth component={<ArrowBigUpIcon/>} />
      
       </BrowserRouter>
    </div>
  );
}

export default App;
