import React, { useState } from 'react';
import './App.css';
import UserSection from './UserSection'; // Importa el componente de la sección de usuarios

function App() {
  const [events, setEvents] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddEvent = () => {
    if (inputValue.trim() !== '') {
      setEvents([...events, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#usuarios">Usuarios</a></li>
          <li><a href="#crear-usuarios">Crear Usuarios</a></li>
          <li><a href="#sucursales">Sucursales</a></li>
        </ul>
      </nav>
      <h1>Gestor de Eventos Locales</h1>
      <div className="event-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese un evento"
        />
        <button onClick={handleAddEvent}>Agregar Evento</button>
      </div>
      <div className="event-list">
        <h2>Eventos Locales</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event}
              <button onClick={() => handleDeleteEvent(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      {/* Agrega el componente de la sección de usuarios */}
      <UserSection />
    </div>
  );
}

export default App;

