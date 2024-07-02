// src/components/InstagramPage.jsx
import React from 'react';
import ProductForm from './ProductForm';
import '../App.css';
const InstagramPage = () => {
  return (
    <div>
      <h1>Welcome to the Instagram Landing Page</h1>
      <ProductForm source="instagram" />
    </div>
  );
};

export default InstagramPage;
