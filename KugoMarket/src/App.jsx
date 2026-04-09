// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/index';
import Home from './Pages/Home/Home';
import Basket from './Pages/Basket/Basket';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Корзина" element={<Basket />} />
      </Routes>
    </>
  );
};

export default App;