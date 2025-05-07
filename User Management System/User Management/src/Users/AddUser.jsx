import React, { useState } from 'react';
import axios from "axios";
import './AddUser.css';
import { Link, useNavigate } from "react-router-dom"

const AddUser = () => {

    let navigate = useNavigate();
 
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const onSubmit =async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/");
  };

  return (
    <div className="add-user-container">
      <div className="form-box">
      <div className="animated-logo">
  <div className="animated-logo-icon">👤</div>
</div>
        <h2 className="form-title">Register User</h2>
        <form className="user-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>

          <Link type="submit" className="cancel-button" to="/">
            Cancel
          </Link>

        </form>
      </div>
    </div>
  );
};

export default AddUser;
