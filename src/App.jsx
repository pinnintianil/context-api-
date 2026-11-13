import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./context/Header";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [name, setName] = useState("Anil");
  const [count, setCount] = useState(100);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <UserContext.Provider value={{ name, count, increaseCount, setName }}>
        <Header />
        <h3>App</h3>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
};
export default App;