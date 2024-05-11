import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navbar/Navbar';
import CustomerRouters from './Routes/CustomerRouters';

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <Routes>
          <Route path="/*" element={<CustomerRouters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
