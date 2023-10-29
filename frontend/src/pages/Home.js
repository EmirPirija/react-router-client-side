import React from 'react';
import styles from './Home.module.css';

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <h1 className={styles.homepageTitle}>Welcome to Our App</h1>
      <p className={styles.homepageDescription}>
        Explore our amazing features and events. Get started now!
      </p>
    </div>
  );
}

export default HomePage;
