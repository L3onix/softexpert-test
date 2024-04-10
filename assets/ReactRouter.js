import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';

export default function ReactRouter() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
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
