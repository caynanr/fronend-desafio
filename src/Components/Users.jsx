import React from "react";
import User from "./User";
import Header from "../Components/Header";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUsers = JSON.parse(window.localStorage.getItem("users"));
    if (getUsers.length) setUsers(getUsers);
  }, []);

  function handleDeleteUser(index) {
    const getUsers = JSON.parse(window.localStorage.getItem("users"));
    getUsers.splice(index, 1);
    setUsers(getUsers);
  }

  React.useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <Header button={true} />
      <ul className={styles.users}>
        {users.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            login={user.login}
            avatar={user.avatar_url}
            company={user.company}
            location={user.location}
            subscriptions={user.subscriptions}
            setUsers={setUsers}
            user={users}
            handleDeleteUser={() => {
              handleDeleteUser(index);
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default Users;
