// src/components/YoutubePage.jsx
import React from 'react';
import ProductForm from './ProductForm';
import '../App.css';

const YoutubePage = () => {
  return (
    <div>
      <h1>Welcome to the YouTube Landing Page</h1>
      <ProductForm source="youtube" />
    </div>
  );
};

export default YoutubePage;
