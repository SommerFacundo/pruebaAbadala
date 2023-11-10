import {React,useEffect,useState} from "react";
import { traerJugadores,eliminarJugador,editar } from "./dbFunction";

export function Tabla({jugadores,setModified,modified}){
    const [edit,setEdit] = useState(false);


  return(
        <table border={1} style={{textAlign:"center"}}>
          <tr>
            <th>Nombre</th>
            <th>POS</th>
            <th>Edad</th>
            <th>Est</th>
            <th>P</th>
            <th>Nac</th>
            <th>Ap</th>
            <th>SUB</th>
            <th>G</th>
            <th>GA</th>
            <th>A</th>
            <th>FC</th>
            <th>FS</th>
            <th>TA</th>
            <th>TR</th>
          </tr>
          {jugadores.map((e)=>(
            <tr>
                <td value={e.id_jugadores}>{e.nombre}</td>
                <td>{e.pos}</td>
                <td>{e.Edad}</td>
                <td>{e.Est}</td>
                <td>{e.P}</td>
                <td>{e.nac}</td>
                <td>{e.Ap}</td>
                <td>{e.Sub}</td>
                <td>{e.G}</td>
                <td>{e.GA}</td>
                <td>{e.A}</td>
                <td>{e.FC}</td>
                <td>{e.FS}</td>
                <td>{e.TA}</td>
                <td>{e.TR}</td>
                <button onClick={()=>{
                    setModified(modified + 1)
                    eliminarJugador(e.id_jugadores)}}>Eliminar</button>
                    <button onClick={()=>{
                    }}>Editar</button>
            </tr>
          ))}
        
        </table>
  )




}