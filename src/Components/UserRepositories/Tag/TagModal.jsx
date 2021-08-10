import React from "react";
import Input from "../../Forms/Input";
import styles from "./TagModal.module.css";
import { ReactComponent as Search } from "../../../Assets/search.svg";

const TagModal = ({ tags, toogleModal, deleteTag, addTag, index }) => {
  const [tagInput, setTagInput] = React.useState("");

  function handleChange({ target }) {
    setTagInput(target.value);
  }

  function handleClick(index) {
    if (tagInput.length >= 1) {
      addTag(index, tagInput.split(","));
      setTagInput("");
      toogleModal();
    } else toogleModal();
  }

  function handleDeleteTag(index, i) {
    deleteTag(index, i);
    tags.splice(i, 1);
  }

  return (
    <div className={styles.modalContainer}>
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
                  handleDeleteTag(index, i);
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
        <button onClick={() => handleClick(index)} className={styles.btnSalvar}>
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
