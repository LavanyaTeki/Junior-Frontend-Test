import React from "react";
//import User from "./components/user";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import UserList from "./pages/Userlist/UserList";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <UserList />
      </Router>
    </>
  );
}

export default App;
