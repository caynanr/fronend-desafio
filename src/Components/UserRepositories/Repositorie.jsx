import React from "react";
import styles from "./Repositorie.module.css";
import Tag from "./Tag/Tag";

const Repositorie = ({
  name,
  html_url,
  description,
  language,
  updated_at,
  created_at,
  tags,
  stargazers_count,
  addTag,
  deleteTag,
  index,
}) => {
  function calcDate(data) {
    const now = new Date();
    const dataUpdate = Date.parse(data) / (24 * 60 * 60 * 1000);
    const today = now.getTime() / (24 * 60 * 60 * 1000);
    return (today - dataUpdate).toFixed();
  }

  return (
    <li className={styles.repositorie}>
      <h1 className={`${styles.titleRepositorie} title`}>
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h1>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags}>
        {
          <Tag
            tags={tags}
            deleteTag={deleteTag}
            addTag={addTag}
            index={index}
          />
        }
      </ul>

      <div className={styles.info}>
        <p className={styles.language}>{language}</p>
        <p className={styles.update}>{`Atualidado a ${calcDate(
          created_at
        )} dias atrás`}</p>
        <p className={styles.stars}>{stargazers_count}</p>
      </div>
    </li>
  );
};

export default Repositorie;
