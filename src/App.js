import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import './App.css';

import durgapuja from './components/durgapuja4.jpg';
import diwali2 from './components/diwali3.jpg';
import gujrat from './components/gujrat4.jpg';
import holi from './components/holi3.jpeg.jpeg';

import Home from './home';
import Footer from './footer';
import SignIn from './signIn';
import SignUp from './signUp';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';



function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-content">
                  <div className="image-grid">
                    <div className="image-item">
                      <img src={durgapuja} alt="Durga Puja" />
                    </div>
                    <div className="image-item">
                      <img src={gujrat} alt="Gujarat Festival" />
                    </div>
                    <div className="image-item">
                      <img src={diwali2} alt="Diwali" />
                    </div>
                    <div className="image-item">
                      <img src={holi} alt="Holi" />
                    </div>
                  </div>
                  <div className="text-overlay">
                    <h2>Celebrating the Spirit of India</h2>
                    <p>Discover the vibrant festivals across the land of diversity</p>
                    <button className="explore-btn">Explore Festivals</button>
                  </div>
                </div>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/About-us" element={<AboutUs />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
