import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <NavLink to="/">
        <h1>League of Legends</h1>
      </NavLink>
    </div>
  );
};

export default Header;
