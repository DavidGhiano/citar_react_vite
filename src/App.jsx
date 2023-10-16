/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";
import { useEffect, useState } from "react";

function App() {
  //useStates
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //useEffect

  useEffect(() => {
     const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
     }

     obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  //funciones
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((p) => p.id !== id);
    setPacientes(pacientesActualizados);
  };
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
