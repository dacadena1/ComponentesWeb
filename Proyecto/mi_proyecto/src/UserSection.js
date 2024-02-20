import React, { useState } from 'react';

function UserSection() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddUser = () => {
    if (inputValue.trim() !== '') {
      setUsers([...users, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-section">
      <div className="user-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese un usuario"
        />
        <button onClick={handleAddUser}>Agregar Usuario</button>
      </div>
      <div className="user-list">
        <h2>Usuarios</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => handleDeleteUser(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserSection;
