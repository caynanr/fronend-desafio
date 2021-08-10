import React from "react";
import styles from "./NotFound.module.css";
import { ReactComponent as Background } from "../Assets/bg.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.background}>
      <Background />
      <h1 className={styles.mensagem}>Error: 404 - Página não encontrada.</h1>
      <Link to="/" className={styles.home}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
