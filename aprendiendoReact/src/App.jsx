import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("julio");
  const [lastName, setApellido]= useState("Arenas");
  const actulizar = (e)=> {
    const valor = e.target.value;
    setName(valor);
    console.log(name);
  }
  const actualizarApellido= (e)=>{
    const apellido= e.target.value;
    setApellido(apellido);
  }
  
  const guardarClick = ()=>{
    console.log(name);
  }

  return (
    <div className="App">
      <h1>Formulario</h1>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" value={name} onChange={actulizar}></input>
      <input type="text" id="apellido" name="apellido" value={lastName} onChange={actualizarApellido}></input>
      <button onClick={guardarClick}>Guardar</button>

    </div>
  )
}

export default App
