import React from 'react';

const ContactList = ({ contactos }) => {
  return (
    <ul>
      {contactos.map((contacto, index) => (
        <li key={index}>
          {contacto.nombre} {contacto.apellido} | {contacto.telefono}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
