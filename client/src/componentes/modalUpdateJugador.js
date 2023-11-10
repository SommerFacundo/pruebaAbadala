import React from "react";
import "./styles.css/modalUpdateJugador.css"
import { editarJugador } from "../dbFunction";
export function ModalUpdate({ datosModif,setShowUpdate,showUpdate,setDatosModified}) {
    const handleUpdate = ()=>{
        let inputs = document.querySelectorAll(".modalUpdate  input");
        let inputsArray = [];
        
        inputs.forEach((e)=>{
            inputsArray.push(e.value)
        })
        setDatosModified({
            id_jugadores:inputsArray[0],
            nombre:inputsArray[1],
            pos:inputsArray[2],
            edad:inputsArray[3],
            est:inputsArray[4],
            p:inputsArray[5],
            nac:inputsArray[6],
            ap:inputsArray[7],
            sub:inputsArray[8],
            g:inputsArray[9],
            ga:inputsArray[10],
            a:inputsArray[11],
            fc:inputsArray[12],
            fs:inputsArray[13],
            ta:inputsArray[14],
            tr:inputsArray[15]
          })
          console.log(inputsArray)
    }
    console.log(datosModif)

    return (
        <div className="containerModal">
            <div className="modalUpdate">

                <label className="containerInputUpdate">
                    ID:
                    <input disabled readOnly defaultValue={datosModif.id_jugadores} type="number" min="1" ></input>
                </label>
                <label>
                    Nombre:
                    <input defaultValue={datosModif.nombre} type="text"></input>
                </label>
                <label>
                    Posicion:
                    <input defaultValue={datosModif.pos} type="text"></input>
                </label>
                <label>
                    Edad:
                    <input defaultValue={datosModif.edad} type="number" step={"any"}></input>
                </label>
                <label>
                    Estatura:
                    <input defaultValue={datosModif.est} type="number" step={"any"}></input>
                </label>
                <label>
                    Peso:
                    <input defaultValue={datosModif.p} type="number" step={"any"}></input>
                </label>
              
                <label>
                    Nacionalidad:
                    <input defaultValue={datosModif.nac} type="text"></input>
                </label>

                <label>
                    Apariciones:
                    <input defaultValue={datosModif.ap} type="number" min="1"></input>
                </label>

                <label>
                    A.Sustituto:
                    <input defaultValue={datosModif.sub} type="number" min="1"></input>              
                </label>       
                
                <label>
                    Goles:
                    <input defaultValue={datosModif.g} type="number" min="1"></input>               
                    
                </label>

                <label>
                    Goles concedidos:
                 <input defaultValue={datosModif.ga} type="number" min="1"></input>
                    
                </label>       
                
                <label>
                    Atajadas:
                    <input defaultValue={datosModif.a} type="number"></input>               
                    
                </label>

                <label>
                    Faltas cometidas:
                    <input defaultValue={datosModif.fc} type="number" min="1"></input>
                    
                </label>
                <label>
                    Faltas sufridas:
                    <input defaultValue={datosModif.fs} type="number" min="1"></input>               
                    
                </label>
                <label>
                   Tarjetas amarillas:
                    <input defaultValue={datosModif.ta} type="number" min="1"></input>               
                    
                </label>
                <label>
                    Tarjeta Rojas
                    <input defaultValue={datosModif.tr} type="number" min="1"></input>               
                    
                </label>
   
                <button onClick={()=>{
                    handleUpdate();
                }}>Aplicar</button>
                <button  onClick={()=>{setShowUpdate(false)}} className="btnModalUpdateCerrar">X</button>
            </div>


        </div>
    )

}