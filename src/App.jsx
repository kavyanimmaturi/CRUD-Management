import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch users. Please try again.");
        setLoading(false);
      })
  }, []);

  const addUser = (user) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, { ...data, id: users.length + 1 }]);
        alert("User added Successfully!");
        navigate("/")
      });
  };

  const updateUser = (id, updatedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
        alert("User updated successfully");
        navigate("/");
      });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((u) => u.id !== id));
      alert("User deleted successfully");
    });
  };

  if (loading) return <h2 className='loader'>Loading....</h2>;
  return (
    <div className='container'>
      <h2 className='title'>User Management</h2>
      <nav>
        <Link to="/" className='links'>User List</Link> | <Link to="/add-user" className='links add'>Add User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserList users={users} deleteUser={deleteUser} />} />
        <Route path="/add-user" element={<AddUser addUser={addUser} />} />
        <Route path="/edit-user/:id" element={<EditUser users={users} updateUser={updateUser} />} />
      </Routes>
    </div>
  )
}

export default App
