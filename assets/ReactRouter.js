import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductTypes from './pages/ProductTypes';

export default function ReactRouter() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productTypes" element={<ProductTypes />} />
        </Routes>
      </ChakraProvider>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>
);
