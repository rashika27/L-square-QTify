import React from 'react';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from "./Navbar.module.css"
import { Link } from '@mui/material'


function Navbar  ({ searchData })  {
  return (
    <nav className={styles.navbar}>
      <Link to ='/'/>
      <img src={require ("../../assets/logo.png")} width ={67} alt="Qtify"/>
      
      
      <Search placeholder={"Search an album of your choice"}
      searchData={searchData}
      /> 
      <Button>Give Feedback</Button> 
    </nav>
  );
};

export default Navbar;
