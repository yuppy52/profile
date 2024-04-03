import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home } from './Home';
import { Product } from './Product';
import { Contact } from './Contact';
import Admin from './Admin';

function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1 className='text-2xl ml-10'>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
