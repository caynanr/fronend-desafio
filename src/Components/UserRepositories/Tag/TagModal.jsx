import React from "react";
import Input from "../../Forms/Input";
import styles from "./TagModal.module.css";
import { ReactComponent as Search } from "../../../Assets/search.svg";

const TagModal = ({ tags, toogleModal, deleteTag, addTag, index, id }) => {
  const [tagInput, setTagInput] = React.useState("");

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) toogleModal();
  }

  function handleChange({ target }) {
    setTagInput(target.value);
  }

  function handleClick(id) {
    if (tagInput.length >= 1) {
      addTag(id, tagInput.split(","));
      setTagInput("");
      toogleModal();
    } else toogleModal();
  }

  function handleDeleteTag(id, i) {
    deleteTag(id, i);
    tags.splice(i, 1);
  }

  return (
    <div className={styles.modalContainer} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <h1 className="title">
          {tags.length > 0 ? "Editar tags" : "Adicionar tags"}
        </h1>
        <Input
          Img={Search}
          placeholder="Escreva as tags separadas por vírgula."
          value={tagInput}
          handleChange={handleChange}
        />
        <div className={styles.tagsContainer}>
          {tags.length >= 0 &&
            tags.map((tag, i) => (
              <span
                className={styles.tagsModal}
                key={tag}
                onClick={() => {
                  handleDeleteTag(id, i);
                }}
              >
                {tag}
                <p className={styles.btnDelete}></p>
              </span>
            ))}
        </div>

        {/* <section>
        <h2>Sugestões</h2>
      </section> */}
        <button onClick={() => handleClick(id)} className={styles.btnSalvar}>
          Salvar
        </button>
        <button onClick={() => toogleModal()} className={styles.btnCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default TagModal;
