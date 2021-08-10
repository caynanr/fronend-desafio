import React from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.css";
import { ReactComponent as TrashIcon } from "../Assets/trash.svg";

const User = ({
  key,
  name,
  login,
  avatar,
  company,
  location,
  subscriptions,
  setUsers,
  user,
  handleDeleteUser,
}) => {
  return (
    <li className={styles.user}>
      <div className={styles.profile}>
        <div className={styles.name}>
          <img src={avatar} alt={name} />
          <div>
            <Link
              to={`/usuario/${login}`}
              className={`${styles.titleUser} title`}
            >
              {name}
            </Link>
            <p>@{login}</p>
          </div>
        </div>
        <div className={styles.details}>
          {company && <span className={styles.company}>{company}</span>}
          {location && <span className={styles.location}>{location}</span>}
        </div>
      </div>
      <button className={styles.buttonDelete} onClick={handleDeleteUser}>
        {<TrashIcon />}
      </button>
    </li>
  );
};

export default User;
