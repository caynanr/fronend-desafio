import React from "react";
import styles from "./UserAbout.module.css";

const UserAbout = ({ user }) => {
  return (
    <div className={styles.cardAbout}>
      <h1 className="title">Sobre</h1>
      <p className={styles.bio}>{user.bio}</p>
      <ul>
        <li className={styles.company}>{user.company}</li>
        <li className={styles.location}>{user.location}</li>
        <li className={styles.blog}>{user.blog}</li>
      </ul>
    </div>
  );
};

export default UserAbout;
