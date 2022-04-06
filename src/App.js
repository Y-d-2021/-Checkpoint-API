import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavbarC from "./Components/Navbar/NavbarC";
import User from "./Components/User";
import Details from "./Components/UserList/Details";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <h3>------------  Checkpoint API (Youssef) ------------</h3>
      <h4>------------ List of USer ------------</h4>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
