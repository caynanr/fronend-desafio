import React from "react";
import styles from "./Tag.module.css";
import TagModal from "./TagModal";

const Tag = ({ tags, addTag, deleteTag, index }) => {
  const [tagList, setTagList] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    setTagList([...tags]);
  }, [tags]);

  function toogleModal() {
    setModal(!modal);
  }

  // function deleteTag(i) {
  //   tagList.splice(i, 1);
  //   setTagList([...tagList]);
  // }

  // function addTag(tag) {
  //   setTagList([...tagList, ...tag]);
  //   toogleModal();
  // }

  return (
    <>
      {tagList.map((t, i) => (
        <li className={styles.tag}>{t}</li>
      ))}
      {tagList.length >= 1 ? (
        <button onClick={toogleModal} className={styles.btnTag}>
          Editar tags <span className={styles.btnEdit}></span>
        </button>
      ) : (
        <button onClick={toogleModal} className={styles.btnTag}>
          Adicionar tags <span className={styles.btnAdd}></span>
        </button>
      )}
      {modal && (
        <TagModal
          tags={tagList}
          toogleModal={toogleModal}
          setTagList={setTagList}
          deleteTag={deleteTag}
          addTag={addTag}
          index={index}
        />
      )}
    </>
  );
};

export default Tag;
