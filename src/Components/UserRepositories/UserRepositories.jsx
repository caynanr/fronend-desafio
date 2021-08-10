import React from "react";
import { useParams } from "react-router";
import UserProfile from "./UserProfile";
import UserAbout from "./UserAbout";
// import UserHighlights from "./UserHighlights";
import Repositorie from "./Repositorie";
import Header from "../Header";
import styles from "./UserRepositories.module.css";
import Input from "../Forms/Input";

import { ReactComponent as Search } from "../../Assets/search.svg";
import { ReactComponent as Filter } from "../../Assets/filter_list.svg";

const UserRepositories = () => {
  const [user, setUser] = React.useState({});
  const [repositories, setRepositories] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchTag, setSearchTag] = React.useState("");

  const { id } = useParams();

  React.useEffect(() => {
    setFilter(repositories);
  }, [repositories]);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const json = await response.json();
      setUser(json);
    }
    getUser();
  }, [id]);

  const saveOnLocalStorage = React.useCallback(() => {
    window.localStorage.setItem(`${id}`, JSON.stringify(repositories));
  }, [repositories, id]);

  React.useEffect(() => {
    async function getRepo() {
      const response = await fetch(user.repos_url);
      const json = await response.json();
      const data = json.map((i) => {
        return { ...i, ...{ tags: [] } };
      });

      setRepositories(data);
      // setFilter(data);
    }
    if (repositories && !repositories.length)
      setRepositories(JSON.parse(window.localStorage.getItem(`${id}`)));
    else if (repositories === null) getRepo();
    else saveOnLocalStorage();
  }, [user, repositories, id, saveOnLocalStorage]);

  function handleSearch({ target }) {
    setSearch(target.value);
    if (target.value.length >= 1) {
      const arraySearch = filter.filter(function (repo) {
        if (repo.name.includes(target.value)) return true;
        else return false;
      });
      setFilter(arraySearch);
    } else return setFilter(repositories);
  }

  function handleSearchTag({ target }) {
    setSearchTag(target.value);
    if (target.value.length >= 1) {
      setFilter(
        repositories.filter(({ tags }) => {
          return tags.find((tag) => tag === target.value);
        })
      );
    } else return setFilter(repositories);
  }

  function addTag(i, tag) {
    const tags = repositories[i].tags;
    repositories[i].tags = [...tags, ...tag];
    setRepositories([...repositories]);
  }

  function deleteTag(index, i) {
    repositories[index].tags.splice(i, 1);
    setRepositories([...repositories]);
  }

  return (
    <>
      <Header />
      <section className={styles.main}>
        <aside className={styles.profile}>
          <UserProfile user={user} />
          <UserAbout user={user} />
          {/* <UserHighlights user={user} /> */}
        </aside>
        <div className={styles.container}>
          <div className={styles.inputs}>
            <Input
              Img={Search}
              placeholder="Buscar um repositório"
              value={search}
              handleChange={handleSearch}
            />

            <Input
              Img={Filter}
              placeholder="Buscar por tag"
              value={searchTag}
              handleChange={handleSearchTag}
            />
          </div>
          <ul>
            {filter &&
              filter.map((repo, index) => (
                <Repositorie
                  key={repo.id}
                  {...repo}
                  index={index}
                  deleteTag={deleteTag}
                  addTag={addTag}
                />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default UserRepositories;
