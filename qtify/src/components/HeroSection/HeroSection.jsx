import React from 'react';
import styles from './HeroSection.module.css'; // Import the corresponding CSS file

function  Hero () {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over Thousands podcast episodes</h1>
      </div>
      <div>
        <img src={require("../../assets/hero-headphones.png")} width={112} height={112} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;
