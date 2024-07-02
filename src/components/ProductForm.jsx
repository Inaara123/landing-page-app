import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ProductFormPage = ({ platform }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [problem, setProblem] = useState('');
  const [token, setToken] = useState('');
  const [redeemMessage, setRedeemMessage] = useState('');

  const generateCoupon = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/generate-coupon', { source: platform });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error generating coupon:', error);
    }
  };

  const redeemCoupon = async () => {
    try { 
      const response = await axios.post('http://localhost:3000/api/redeem-coupon', { token });
      if (response.data.success) {
        setRedeemMessage('Coupon redeemed successfully!');
      } else {
        setRedeemMessage('Failed to redeem coupon. It might be invalid or already redeemed.');
      }
    } catch (error) {
      setRedeemMessage('An error occurred while redeeming the coupon.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to your backend
  };

  return (
    <div>
      <h1>{`Welcome to the ${platform} Product Form`}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Problem:
          <select value={problem} onChange={(e) => setProblem(e.target.value)} required>
            <option value="" disabled>Select a problem</option>
            <option value="problem1">Problem 1</option>
            <option value="problem2">Problem 2</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={generateCoupon}>Generate Coupon</button>
        <p>Your coupon code: {token}</p>
        <br />
        <label>
          Redeem Coupon:
          <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
        </label>
        <button type="button" onClick={redeemCoupon}>Redeem</button>
        <p>{redeemMessage}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductFormPage;
