import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
