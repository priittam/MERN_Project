import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Login, Navbar, Register, Weather, Home, Error } from './Contents';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="*" element={<Error />} />

      </Routes>
    </>
  );
};

export default App;
