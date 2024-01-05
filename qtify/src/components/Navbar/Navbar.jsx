import React from 'react';
import {ReactComponent as QtifyLogo} from "../../assets/qtify-logo.svg"
import {ReactComponent as QtifyText} from "../../assets/q-tify.svg"
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from "./Navbar.module.css"

function Navbar  ()  {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <QtifyLogo className={styles.QtifyLogo} />
        <QtifyText className={styles.QtifyText} />
      </div>
      <Search placeholder={"Search an album of your choice"} /> 
      <Button>Give Feedback</Button> 
    </nav>
  );
};

export default Navbar;
