// App.jsx
import { useState, useEffect } from 'react';
import AdoptionForm from './components/AdoptionForm';
import AdoptionList from './components/AdoptionList';
import AvailableList from './components/AvailableList';
import AddDogForm from './components/AddDogForm';
import AddAdopterForm from './components/AddAdopterForm';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [adopters, setAdopters] = useState([]);
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await fetch('http://localhost:3001/dogs');
        const dogsData = await dogsResponse.json();
        setDogs(dogsData);

        const adoptersResponse = await fetch('http://localhost:3001/adopters');
        const adoptersData = await adoptersResponse.json();
        setAdopters(adoptersData);

        const adoptionsResponse = await fetch('http://localhost:3001/adoptions');
        const adoptionsData = await adoptionsResponse.json();
        console.log('Evaluaciones:', adoptionsData);
        setAdoptions(adoptionsData);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAdoptionSubmit = async (dogId, adopterId) => {
    try {
      const response = await fetch('http://localhost:3001/adoptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dogId,
          adopterId,
        }),
      });

      if (response.ok) {
        const newAdoption = await response.json();
        setAdoptions((prevAdoptions) => [...prevAdoptions, newAdoption]);

        // Mostrar una alerta con los datos de la nueva adopción
        alert(`¡Evaluacion Asignada con éxito!\nID: ${newAdoption.id}\nMateria: ${newAdoption.dogId}\nAlumno: ${newAdoption.adopterId}`);
      } else {
        throw new Error('Error al enviar la solicitud de Evaluacion.');
      }
    } catch (error) {
      console.error('Error en la solicitud de Evaluacion:', error.message);
      throw error;
    }
  };

  const handleDogSubmit = (dogName) => {
    
    setDogs([...dogs, { id: dogs.length + 1, name: dogName }]);
  };

  const handleAdopterSubmit = (adopterName) => {
    setAdopters([...adopters, { id: adopters.length + 1, name: adopterName }]);
  };

  return (
    <div className="App">
      <h1>Evaluación intermedia </h1>
      <h2>Tipantiza Nayeli, Anthony Quishpe,Cadena Diego</h2>
      <h1>Lista de Evacualciones programadas</h1>
      <AdoptionList adoptions={adoptions} dogs={dogs} adopters={adopters} />
      <h1>Disponibles para evaluaciones</h1>
      <AvailableList dogs={dogs} adopters={adopters} />
      <h1>Agregar nueva Evaluacion</h1>
      <AddDogForm onDogSubmit={handleDogSubmit} />
      <h1>Agregar Alumno</h1>
      <AddAdopterForm onAdopterSubmit={handleAdopterSubmit} />
      <h1>Agrega la evaluacion para el Alumno</h1>
      <AdoptionForm dogs={dogs} adopters={adopters} onAdoptionSubmit={handleAdoptionSubmit} />
    </div>
  );
};

export default App;
