import React, { useState, useEffect } from 'react';

const medicosPorEspecialidad = {
  Dermatologia: ["Florencia Zelarayán", "Rosario Viejobueno", "Virginia Paz Zavalía"],
  Gastroenterologia: ["Patricio Jerez", "Mercedes Depalo"],
  Cardiologia: ["Paula Moreno", "Santiago Anun", "José Martin", "Mariana Gallar"],
  ClinicaMedica: ["Martina Lopez", "Marcos Juarez", "Rodolfo Guzman", "Lorena Macedosa"],
  Oftalmologia: ["Pedro Ruiz", "Máximo Barros", "Belén Zapata"],
  Neumonologia: ["Sofía Gonzalez", "Guadalupe Allende"],
};

const TurnoForm = ({ turnosLength,medicosPorEspecialidad, handleAddTurno, handleEdit, turnoEdit, setTurnoEdit }) => {
  const [especialidad, setEspecialidad] = useState('');
  const [medico, setMedico] = useState('');
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (turnoEdit) {
      console.log('Turno en edición:', turnoEdit);
      setEspecialidad(turnoEdit.especialidad);
      setMedico(turnoEdit.medico);
      setNombre(turnoEdit.nombre);
      setFecha(turnoEdit.fecha);
      setIsEditing(true);
    } else {
      setIsEditing(false);
      setEspecialidad('');
      setMedico('');
      setNombre('');
      setFecha('');
    }
  }, [turnoEdit]);
  

  const handleEspecialidadChange = (event) => {
    console.log('Especialidad seleccionada:', event.target.value);
    setEspecialidad(event.target.value);
    setMedico('');
  };

  const handleMedicoChange = (event) => {
    console.log('Medico seleccionado:', event.target.value);
    setMedico(event.target.value);
  };

  const handleNombreChange = (event) => {
    console.log('Nombre seleccionado:', event.target.value);
    setNombre(event.target.value);
  };

  const handleFechaChange = (event) => {
    console.log('Fecha seleccionada:', event.target.value);
    setFecha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoTurno = {
      id: turnoEdit ? turnoEdit.id : turnosLength+1,
      especialidad,
      medico,
      nombre,
      fecha,
    };
    
    if (isEditing && turnoEdit && turnoEdit.id) {
      //setTurnoEdit((prevTurnos) => prevTurnos.filter((turno) => turno.id !== turnoEdit.id));
      handleEdit(nuevoTurno); 
    } else {
      handleAddTurno(nuevoTurno);
    }
    setEspecialidad('');
    setMedico('');
    setNombre('');
    setFecha('');
    setIsEditing(false);
    setTurnoEdit(null); // Importante: Limpiamos el turno en edición después de guardar los cambios.
  };
  
  const handleCancelEdit = () => {
    if (turnoEdit) {
      setEspecialidad(turnoEdit.especialidad);
      setMedico(turnoEdit.medico);
      setNombre(turnoEdit.nombre);
      setFecha(turnoEdit.fecha);
      setTurnoEdit(null);
    }
    setIsEditing(false);
  };
  

  const medicosOptions = medicosPorEspecialidad[especialidad] || [];

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 form-group">
        <label htmlFor="especialidad" className="form-label">
          Especialidad:
        </label>
        <select
          id="especialidad"
          className="form-select"
          value={especialidad}
          onChange={handleEspecialidadChange}
        >
          <option value="">Seleccionar especialidad</option>
          <option value="Dermatologia">Dermatología</option>
          <option value="Gastroenterologia">Gastroenterología</option>
          <option value="ClinicaMedica">Clinica Médica</option>
          <option value="Cardiologia">Cardiología</option>
          <option value="Oftalmologia">Oftalmología</option>
          <option value="Neumonologia">Neumonología</option>
        </select>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="medico" className="form-label">
          Médico:
        </label>
        <select
          id="medico"
          className="form-select"
          value={medico}
          onChange={handleMedicoChange}
        >
          <option value="">Seleccionar médico</option>
          {medicosOptions.map((medicoOption) => (
            <option key={medicoOption} value={medicoOption}>
              {medicoOption}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="nombre" className="form-label">
          Nombre y Apellido:
        </label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="fecha" className="form-label">
          Fecha del turno:
        </label>
        <input
          type="text"
          id="fecha"
          className="form-control"
          value={fecha}
          onChange={handleFechaChange}
        />
      </div>

      {/* Botones para agregar un nuevo turno o modificar uno existente */}
      {turnoEdit ? (
        <div className='d-flex'>
          <button type="submit" className="btn btn-primary me-2">
            Modificar
          </button>
          <button type="button" className="btn btn-warning" onClick={handleCancelEdit}>
            Cancelar Edición
          </button>
        </div>
      ) : (
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      )}
      </form>
    </div>
  );
};

export default TurnoForm;