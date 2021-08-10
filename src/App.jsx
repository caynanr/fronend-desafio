import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserRegister from "./Components/UserRegister";
import UserRepositories from "./Components/UserRepositories/UserRepositories";
import Users from "./Components/Users";
import NotFound from "./Helper/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" end element={<UserRegister />} />
            <Route path="usuarios/" element={<Users />} />
            <Route path="/registrar/:id" element={<UserRegister />} />
            <Route path="usuario/:id" element={<UserRepositories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
