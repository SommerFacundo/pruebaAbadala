import {React,useEffect,useState} from "react";
import { traerJugadores,eliminarJugador, editarJugador } from "../dbFunction";
import { ModalUpdate } from "./modalUpdateJugador";
import "./styles.css/tablaJugadores.css"
export function Tabla({setModified,modified}){
    const [edit,setEdit] = useState(false);
    const [jugadores,setJugadores] = useState([])
    const [showUpdate,setShowUpdate] = useState(false)

  const deletePlayer = (id)=>{
    eliminarJugador(id).then((data)=>{
      setModified(modified + 1)

    })
  }

    const [datosModif, setDatosModified] = useState(
      {
        id_jugadores:0,
        nombre:"",
        pos:"",
        edad:0,
        est:0,
        p:0,
        nac:"",
        ap:0,
        sub:0,
        g:0,
        ga:0,
        a:0,
        fc:0,
        fs:0,
        ta:0,
        tr:0
      }
      )
      useEffect(()=>{
        editarJugador(datosModif).then((data)=>{setModified(modified +1)});
      },[datosModif])
  useEffect(()=>{
      traerJugadores().then((data)=>{
        setJugadores(data)
      });
  },[modified]);
  useEffect(()=>{
    console.log(datosModif)
  },[datosModif])

  return(
    <>
    <div className="containerTabla">
        <table style={{textAlign:"center"}}>
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
                <button onClick={()=>{
                    deletePlayer(e.id_jugadores);
                    }} className="btnTableDelete">Eliminar</button>
                    <button onClick={()=>{
                      setDatosModified(
                        {
                          id_jugadores:e.id_jugadores,
                          nombre:e.nombre,
                          pos:e.pos,
                          edad:e.Edad,
                          est:e.Est,
                          p:e.P,
                          nac:e.nac,
                          ap:e.Ap,
                          sub:e.Sub,
                          g:e.G,
                          ga:e.GA,
                          a:e.A,
                          fc:e.FC,
                          fs:e.FS,
                          ta:e.TA,
                          tr:e.TR
                        }
                      );
                      setShowUpdate(true)
                    }} className="btnTableEdit">Editar</button>
            </tr>
          ))}

        </table>
          {showUpdate &&
          <ModalUpdate datosModif={datosModif} setDatosModified={setDatosModified} setShowUpdate={setShowUpdate} showUpdate={showUpdate}/>
          
          }
    
    </div>
    </>
        
  )




}