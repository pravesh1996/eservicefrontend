"use client";  // Enable client-side rendering

import { useState } from 'react';
import styles from '../css/washroom.module.css';  // Import the CSS module

const WashroomService = () => {
  const [washroomCount, setWashroomCount] = useState('');  // Count for washroom access
  const [toiletCount, setToiletCount] = useState('');  // Count for toilet access
  const [error, setError] = useState('');

  const handlePayment = () => {
    const totalWashroom = parseInt(washroomCount) || 0;
    const totalToilet = parseInt(toiletCount) || 0;
    if (totalWashroom === 0 && totalToilet === 0) {
      setError('Please select at least one person for washroom or toilet.');
      return;
    }
    setError('');

    // Redirect to Razorpay payment link with total amount
    window.location.href = `https://razorpay.me/@praveshrajpoot`;
  };

  const handleInputChange = (e: any, setter: any) => {
    const value = e.target.value;
    // Only set the value if it's a valid number or empty
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  const calculateTotal = () => {
    const washroomCharge = (parseInt(washroomCount) || 0) * 10;
    const toiletCharge = (parseInt(toiletCount) || 0) * 5;
    return washroomCharge + toiletCharge;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Washroom Services</h1>
      <p className={styles.subtitle}>
        Enter the number of people accessing the washroom or toilet services.
        Each person will be charged ₹10 for Washroom and ₹5 for Toilet.
      </p>

       {/* Toilet Selection Section */}
       <div className={styles.inputGroup}>
        <label className={styles.label}>
          Toilet:
          <input
            type="number"
            value={toiletCount}
            min="0"
            onChange={(e) => handleInputChange(e, setToiletCount)}
            className={styles.input}
            placeholder="Enter number of people for toilet"
          />
        </label>
      </div>
      
      {/* Washroom Selection Section */}
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Washroom/Bath:
          <input
            type="number"
            value={washroomCount}
            min="0"
            onChange={(e) => handleInputChange(e, setWashroomCount)}
            className={styles.input}
            placeholder="Enter number of people for washroom"
          />
        </label>
      </div>

     

      {error && <p className={styles.error}>{error}</p>}

      {/* Show Total Amount */}
      <div className={styles.totalContainer}>
        <h3 className={styles.totalText}>Total Amount: ₹{calculateTotal()}</h3>
      </div>

      <button
        onClick={handlePayment}
        className={styles.button}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default WashroomService;
