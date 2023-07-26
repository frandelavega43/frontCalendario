import React from 'react';

const TurnoItem = ({ turno, setTurnoEdit, handleDelete }) => {
  return (
    <tr className='registro'>
      <td>{turno.especialidad}</td>
      <td>{turno.medico}</td>
      <td>{turno.nombre}</td>
      <td>{turno.fecha}</td>
      <td>
        <button onClick={() => setTurnoEdit(turno)} className="btn btn-primary me-2">
          Editar
        </button>
        <button onClick={() => handleDelete(turno)} className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TurnoItem;
