import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>
);
