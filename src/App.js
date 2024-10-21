import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  const [contactos, setContactos] = useState([]);
  const [filteredContactos, setFilteredContactos] = useState([]);

  useEffect(() => {
    cargarContactos();
  }, []);

  const cargarContactos = () => {
    fetch('http://www.raydelto.org/agenda.php')
      .then((response) => response.json())
      .then((data) => {
        setContactos(data);
        setFilteredContactos(data); 
      })
      .catch((error) => {
        console.error('Error al cargar los contactos:', error);
      });
  };

  const registrarContacto = (contacto) => {
    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(contacto),
      header: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Contacto registrado:', data);
        cargarContactos(); 
      })
      .catch((error) => {
        console.error('Error al registrar el contacto:', error);
      });
  };

  const buscarContacto = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredContactos(contactos);
    } else {
      const resultadosFiltrados = contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contacto.apellido.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContactos(resultadosFiltrados);
    }
  };

  return (
    <div className="agenda">
      <section className="contactos">Lista de contactos</section>
      <SearchBar onSearch={buscarContacto} />
      <section className="contactos_content">
        <ContactList contactos={filteredContactos} />
      </section>
      <ContactForm onAddContact={registrarContacto} />
    </div>
  );
};

export default App;
