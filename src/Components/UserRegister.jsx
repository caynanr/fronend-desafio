import React from "react";
import styles from "./UserRegister.module.css";
import { useNavigate } from "react-router";
import Input from "./Forms/Input";
import Button from "./Forms/Button";
import { ReactComponent as AccountCircle } from "../Assets/account_circle.svg";
import { ReactComponent as Background } from "../Assets/bg.svg";
import { ReactComponent as Github } from "../Assets/logo_home.svg";
import Error from "../Helper/Error";
import { Link, useParams } from "react-router-dom";

const UserRegister = () => {
  const [userName, setUserName] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    const getUsers = JSON.parse(window.localStorage.getItem("users"));
    if (getUsers !== null) setUsers(getUsers);
    else return null;
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const json = await response.json();
    if (response.ok === false) {
      setError("Usuário não encontrado");
    } else if (response.ok) {
      setUsers([...users, json]);
      navigate("/usuarios");
    } else return null;
  }

  function handleChange({ target }) {
    setUserName(target.value);
  }

  return (
    <div className={styles.register}>
      <div className={styles.form}>
        <div className={styles.titles}>
          {id === "true" && (
            <Link to="/usuarios" className={styles.arrowBack}></Link>
          )}
          {/* <Github className={styles.logo} /> */}
          <p className={styles.logobg}></p>
          <h1 className="title">Buscar Usuário</h1>
          <p className={styles.subtitle}>
            Crie sua conta através do seu usuário do GitHub.
          </p>
        </div>

        <form className={styles.formGroup} onSubmit={handleSubmit}>
          <Input
            Img={AccountCircle}
            placeholder="username"
            value={userName}
            setUserName={setUserName}
            handleChange={handleChange}
          />
          {error && <Error error={error} />}
          <Button>Cadastrar</Button>
          <p className={styles.termos}>
            Termos de <span>política</span> e <span>privacidade</span>{" "}
          </p>
        </form>
      </div>
      <div className={styles.bg}>
        <Background />
        <p>
          Gerencie e adicione <b>tags</b> ao seus <b>repositórios</b> favoritos.
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
