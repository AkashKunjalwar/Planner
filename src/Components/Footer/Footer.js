import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright <span>&copy;</span> PlanMyDay {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
