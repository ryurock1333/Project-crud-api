import "./App.css";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import CreateUsers from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="Create" element={<CreateUsers />} />
        <Route path="Update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
