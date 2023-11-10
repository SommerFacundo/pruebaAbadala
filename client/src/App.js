import {React,useState,useEffect} from "react";
import { Tabla } from "./componentes/tablaJugadores";
import { AnadirJugador } from "./componentes/aniadirJugador";
import './App.css';
import { JugadorPeso } from "./componentes/jugadorPesosMayores";
function App() {
  const [modifiedTable,setModifiedTable] = useState(0);

  return (
    <div>
      <Tabla setModified={setModifiedTable} modified={modifiedTable}/>
      
    
      <JugadorPeso/>
      <AnadirJugador setModifiedTable={setModifiedTable} modifiedTable={modifiedTable}/>
    </div>
  );
}

export default App;
