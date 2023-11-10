import {React,useState,useEffect} from "react";
import { Tabla } from "./componentes/tablaJugadores";
import { AnadirJugador } from "./componentes/aniadirJugador";
import './App.css';
import { JugadorPeso } from "./componentes/jugadorPesosMayores";
import { ModalMostrar } from "./componentes/modalMostrarJugador";
import { JugadoresArg } from "./componentes/jugadoresArg";
import { JugadorMasAlto } from "./componentes/jugadorMasAlto";
function App() {
  const [modifiedTable,setModifiedTable] = useState(0);
  const [show,setShow] = useState("");
  return (
    <div>
      <Tabla setModified={setModifiedTable} modified={modifiedTable}/>  
        <button className="btnOpc" onClick={()=>setShow("pesos")}>Pesos 75-80kg</button>
      <button className="btnOpc" onClick={()=>setShow("anadir")}>Añadir jugador</button>
      <button className="btnOpc" onClick={()=>setShow("arg")}>Nacionalidad Arg</button>
      <button className="btnOpc" onClick={()=>setShow("jugadorAlto")}>Jugador mas alto</button>

      {show == "anadir" &&
      <ModalMostrar show={show} setShow={setShow} children={<AnadirJugador modifiedTable={modifiedTable} setModifiedTable={setModifiedTable}/>}/>
      }
      {show == "pesos" &&
      <ModalMostrar  show={show} setShow={setShow}children={<JugadorPeso/>}/>

      }
      {show == "arg" &&
          <ModalMostrar  show={show} setShow={setShow} children={<JugadoresArg/>}/>

      }
      {show == "jugadorAlto" &&
        <ModalMostrar  show={show} setShow={setShow} children={<JugadorMasAlto/>}/>
      }
    </div>
  );
}

export default App;
