import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from '../../components/About';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';
import HomePage from "../../components/HomePage"
import Navbar from '../../components/Navbar';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import Testimonials from '../../components/Testimonials';
function Home() {
    return (
       <BrowserRouter>
           <Navbar/>
          <HomePage/>
          <Portfolio/>
         <About/>
         <Resume/>
         <Testimonials/>
         <Contacts/>
         <Footer/>
        
         </BrowserRouter>   
    )
}

export default Home;
