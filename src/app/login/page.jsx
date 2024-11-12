"use client";

import React, { useState } from "react";
import styles from "../css/Login.module.css";
import OtpInput from "./otp-input"; // Adjusted path to match file name

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone validation
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phoneNumber)) {
      alert("Invalid Phone Number. Please enter a 10-digit number.");
      return;
    }

    // Mock API call here
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("login successful", otp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>e-Seva Portal</h2>
        <h3>Government Services at Your Fingertips</h3>
        <h3>All Citizen Services Online!</h3>
        <p>
          Access a wide range of government services, fully integrated into a
          single platform for your convenience. Manage your utility bills,
          applications, and more.
        </p>

        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit}>
            <input
              className={styles.userInput}
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter your phone number"
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
