"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './css/home.module.css';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login'); 
    }
  }, [router]);

  const handleLogout = () => {
    // Clear the session (remove authentication data)
    sessionStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <span className={styles.username}>Welcome Back, Pravesh</span>
        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      </header>
      <h1 className={styles.title}>Welcome to Service Selection</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Link href="/washroom" className={styles.cardLink}>
            <h2>Washroom Service</h2>
            <p>Access clean and hygienic washrooms at your convenience.</p>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/food" className={styles.cardLink}>
            <h2>Food Service</h2>
            <p>Order food from nearby restaurants with just a few clicks.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Home;
