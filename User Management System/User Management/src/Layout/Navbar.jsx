import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">User Management</h1>
      
      <Link className="add-user-btn" to="/adduser">Add User</Link>
    </nav>
  );
};

export default Navbar;
