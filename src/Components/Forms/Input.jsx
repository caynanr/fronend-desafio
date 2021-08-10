import React from "react";
import styles from "./Input.module.css";

const Input = ({ placeholder, value, Img, handleChange, className }) => {
  return (
    <div className={styles.input}>
      <Img />
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
