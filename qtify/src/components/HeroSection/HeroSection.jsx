import React from 'react';
import styles from './HeroSection.module.css'; // Import the corresponding CSS file

function  Hero () {
  return (
    <div className={styles.hero}>
        <div>
          <h1>100 Thounsand Songs, ad-free </h1>
          <h1>Over Thounsands podcast episodes </h1>

        </div>
        <div>
          <img src={require ("../../assets/hero-headphones.png")} width ={112} alt="headphones"/>
        </div>


    </div>
  );
};

export default Hero;
