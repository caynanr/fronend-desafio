import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../Assets/logo.svg";

import styles from "./Header.module.css";

const Header = ({ button }) => {
  return (
    <header className={styles.header}>
      <Github className={styles.logo} />
      {button ? (
        <Link to="/registrar" className={styles.link}>
          Adicionar novo
        </Link>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
