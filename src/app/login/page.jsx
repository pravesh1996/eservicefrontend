"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../css/Login.module.css";
import OtpInput from "./otp-input";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpMessage, setOtpMessage] = useState("OTP sent successfully.");  
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    const regex = /^[0-9]{10}$/;
    if (!regex.test(phoneNumber)) {
      alert("Invalid Phone Number. Please enter a 10-digit number.");
      return;
    }

    console.log("OTP sent to", phoneNumber);
    setShowOtpInput(true); 
  };

  const onOtpSubmit = (otp) => {
    if (otp === "123456") { 
      console.log("Login successful", otp);

      localStorage.setItem("isAuthenticated", "true");
      console.log(
        "isAuthenticated set in localStorage:",
        localStorage.getItem("isAuthenticated")
      );

      setLoading(true);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      alert("Invalid OTP. Please try again.");
    }
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

        {loading ? (
          <div className={styles.spinner}>Loading...</div>
        ) : !showOtpInput ? (
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
            <p>{otpMessage}</p>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
