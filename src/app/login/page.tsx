// pages/login.js
import React from "react";
import styles from "../css/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <h2>One Software Platform</h2>
          <h3>One Provider</h3>
          <h3>All Business Communications!</h3>
          <p>
            Every business communications function you'll ever need, fully
            integrated on one cloud software platform.
          </p>
        </div>

        <div className={styles.rightSide}>
          <h2>Member Login</h2>
          <p>Please use your Login and Password</p>
          <form className={styles.loginForm}>
            <input className={styles.inputField} type="text" placeholder="admin" />
            <input className={styles.inputField} type="password" placeholder="Password" />
            <button className={styles.submitButton} type="submit">GO</button>
          </form>
          <a className={styles.forgotPasswordLink} href="#">Lost Your Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;