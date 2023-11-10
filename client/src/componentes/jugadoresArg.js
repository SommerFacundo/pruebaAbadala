import React, { useEffect, useState } from "react";
import { jugadoresArg } from "../dbFunction";
export function JugadoresArg(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        jugadoresArg().then((data)=>setData(data));
    },[])
    return(
        <div>
        <div className="containerTabla">
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
          {data.map((e)=>(
            <tr className="trJugadores">
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

            </tr>
          ))}

        </table>


            </div>
        </div>
    )

}
