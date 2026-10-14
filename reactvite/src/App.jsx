import React, { useState } from "react";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("registration")}>Registration</button>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>

      {page === "login" && <Login />}
      {page === "registration" && <Registration />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;