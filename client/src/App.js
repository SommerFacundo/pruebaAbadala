import {React,useState,useEffect} from "react";
import { traerJugadores } from './dbFunction';
import { Tabla } from "./tablaJugadores";
import { AnadirJugador } from "./aniadirJugador";
import './App.css';
import { EditarJugador } from "./editarJugador";

function App() {
  const [modifiedTable,setModifiedTable] = useState(0)
  const [jugadores,setJugadores] = useState([])
  useEffect(()=>{
    traerJugadores().then((data)=>{
      setJugadores(data)
    });
    
  },[modifiedTable]);
  return (
    <div>
      <Tabla jugadores={jugadores} setModified={setModifiedTable} modified={modifiedTable}/>
      
      
      
      <EditarJugador setModifiedTable={setModifiedTable} modifiedTable={modifiedTable}/>
      <AnadirJugador setModifiedTable={setModifiedTable} modifiedTable={modifiedTable}/>
    </div>
  );
}

export default App;
