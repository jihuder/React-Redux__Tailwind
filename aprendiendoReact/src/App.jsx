import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("julio");
  const actulizar = ()=> {
    setName();
  }

  return (
    <div className="App">
      <h1>Formulario</h1>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" value={name} onChange={actulizar}></input>

    </div>
  )
}

export default App
