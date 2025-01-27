import React from 'react';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from "./Navbar.module.css"



function Navbar  ({ searchData })  {
  return (
    <nav className={styles.navbar}>
      <a href='/'>
      <div className="logo-container">
        <img src={require("../../assets/logo.png")} width={67} alt="Qtify" />
      </div>
      </a>
      
      <Search placeholder={"Search an album of your choice"}
      searchData={searchData}
      /> 
      <Button>Give Feedback</Button> 
    </nav>
  );
};

export default Navbar;
