import React from "react";
import styles from "./UserProfile.module.css";

const UserProfile = ({ user }) => {
  return (
    <div className={styles.cardProfile}>
      <div className={styles.picProfile}>
        <img src={user.avatar_url} alt={user.name} />
      </div>
      <div className={styles.names}>
        <h1 className="title">{user.name}</h1>
        <p>@{user.login}</p>
      </div>
      <div className={styles.infos}>
        <p>
          Seguidores: <span>{user.followers}</span>
        </p>
        <p>
          Seguindo: <span>{user.following}</span>
        </p>
        <p>
          Favoritos: <span>{user.followers}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
