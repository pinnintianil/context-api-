import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Username = () => {
  const { name, count, increaseCount } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};
export default Username;