import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = () => {};

  return (
    <nav className="h-[4rem] bg-white shadow-lg flex items-center justify-around">
      <h1 className="text-xl font-semibold">
        The Cocktails<span className="text-green-500 font-bold">DB</span>
      </h1>
      <div className="nav-links-container">
        <ul className="space-x-5 text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
