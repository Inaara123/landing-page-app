// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductFormPage from './components/ProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instagram" element={<ProductFormPage platform="instagram" />} />
        <Route path="/google" element={<ProductFormPage platform="google" />} />
        <Route path="/facebook" element={<ProductFormPage platform="facebook" />} />
        <Route path="/youtube" element={<ProductFormPage platform="youtube" />} />
      </Routes>
    </Router>
  );
}

export default App;
