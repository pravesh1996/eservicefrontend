// pages/login.js
import React from "react";
import styles from "../css/Login.module.css";

const Login = () => {
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
        <form>
          <div className={styles.userBox}>
            <input className={styles.userInput} type="text" required />
            <label>User ID</label>
          </div>
          <div className={styles.userBox}>
            <input className={styles.userInput} type="password" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
        <a className={styles.forgotPasswordLink} href="#">Forgot Your Password?</a>
      </div>
    </div>
  );
};

export default Login;
