import Link from 'next/link';
import styles from '../css/food.module.css'; 

const Food = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Food Service</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Link href="/restaurants" legacyBehavior>
            <a className={styles.cardLink}>
              <h2>Nearby Restaurants</h2>
              <p>Find top-rated restaurants near you and order delicious food.</p>
            </a>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/special-offers" legacyBehavior>
            <a className={styles.cardLink}>
              <h2>Special Offers</h2>
              <p>Get exclusive discounts and special offers on your favorite meals.</p>
            </a>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/fast-delivery" legacyBehavior>
            <a className={styles.cardLink}>
              <h2>Fast Delivery</h2>
              <p>Enjoy fast delivery from local restaurants directly to your location.</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
