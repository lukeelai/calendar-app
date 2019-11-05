import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <NavLink to="/">
        <h1>Todo Calendar</h1>
      </NavLink>
    </div>
  );
};

export default Header;
