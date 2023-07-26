import React from 'react';
import TurnoItem from './TurnoItem';

const TurnoList = ({ turnos, setTurnoEdit, handleDelete }) => {
  return (
    <table className="table table-bordered mt-4">
      <thead className='thead-light'>
        <tr>
          <th>Especialidad</th>
          <th>Médico</th>
          <th>Nombre y Apellido</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {turnos.map((turno, index) => (

            <TurnoItem
              key={index}
              turno={turno}
              index={index}
              setTurnoEdit={setTurnoEdit} // Corregimos el nombre de la función
              handleDelete={handleDelete}
            />
        ))}
      </tbody>
    </table>
  );
};

export default TurnoList;