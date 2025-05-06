import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/getUsers");
      setUsers(result.data); // ✅ This updates the UI with backend data
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="home">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          ) :
          
          (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn-v'>View</button>
                    <button className='btn-e'>Edit</button>
                    <button className='btn-d'>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;


