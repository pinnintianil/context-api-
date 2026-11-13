import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {
  const { name, count } = useContext(UserContext);
  return (
    <div>
      <h2>Header - Hello {name} - {count}</h2>
    </div>
  );
};
export default Header;