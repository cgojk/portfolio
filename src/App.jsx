import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Footer from './pages/Footer';

import Home from "./pages/home";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
            <Route path="/" element={<Home />} />
         
      </Routes>
    </BrowserRouter>
  );
}