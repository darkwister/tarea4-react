import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && apellido && telefono) {
      onAddContact({ nombre, apellido, telefono });
      setNombre('');
      setApellido('');
      setTelefono('');
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactos_fields">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

      <label htmlFor="apellido">Apellido:</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />

      <label htmlFor="telefono">Teléfono:</label>
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

      <button type="submit">Agregar contacto</button>
    </form>
  );
};

export default ContactForm;
