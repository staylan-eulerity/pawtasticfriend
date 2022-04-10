import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Pets from './pages/pets/Pets';
import Contact from './pages/contact/Contact';

// Styles
import './App.css';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;