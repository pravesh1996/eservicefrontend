import Link from 'next/link';
import styles from './css/home.module.css'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Service Selection</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Link href="/washroom" legacyBehavior>
            <a className={styles.cardLink}>
              <h2>Washroom Service</h2>
              <p>Access clean and hygienic washrooms at your convenience.</p>
            </a>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/food" legacyBehavior>
            <a className={styles.cardLink}>
              <h2>Food Service</h2>
              <p>Order food from nearby restaurants with just a few clicks.</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
