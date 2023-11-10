import React, { useEffect, useState } from "react";
import { editarJugador } from "../dbFunction";

export function EditarJugador({modifiedTable,setModifiedTable}){
    const [datos,setDatos] = useState({
        id_jugador:0,
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
     })
     useEffect(()=>{
        if(datos.edad > 0){
            const response = editarJugador(datos);
            response.then((data)=>{
                console.log(data)
            })

        }
    },[datos]);


    return(
        <div>
        <form>
            Editar
            <br></br>
            <input placeholder="Id" id="id" type="number"></input>
            <input placeholder="Nombre" id="nombre" type="text"></input>
            <input placeholder="POS" id="pos" type="text"></input>
            <input placeholder="Edad" type="number" id="edad"></input>
            <input placeholder="Estatura" type="number" id="est" step={"any"}></input>
            <input placeholder="Peso" type="number" id="p" step={"any"}></input>
            <input placeholder="Nacionalidad" type="text" id="nac"></input>
            <input placeholder="Apariciones" type="number" id="ap"></input>
            <input placeholder="Apariciones como sustituto" id="sub" type="number"></input>
            <input placeholder="Goles" type="number" id="g"></input>
            <input placeholder="Goles Concedidos" type="number" id="GA"></input>
            <input placeholder="Atajadas" type="number" id="a"></input>
            <input placeholder="Faltas cometidas" type="number" id="fc"></input>
            <input placeholder="Faltas sufridas" type="number" id="fs"></input>
            <input placeholder="Tarjetas amarillas" type="number" id="ta"></input>
            <input placeholder="Tarjetas rojas" type="number" id="tr"></input>
            <button onClick={(e)=>{
                e.preventDefault()
                setDatos({
                        id_jugador:document.getElementById("id").value,
                        nombre:document.getElementById("nombre").value,
                        pos:document.getElementById("pos").value,
                        edad:parseInt(document.getElementById("edad").value),
                        est:parseFloat(document.getElementById("est").value),
                        p:parseInt(document.getElementById("p").value),
                        nac:document.getElementById("nac").value,
                        ap:document.getElementById("ap").value,
                        sub:document.getElementById("sub").value,
                        g:document.getElementById("g").value,
                        ga:document.getElementById("GA").value,
                        a:document.getElementById("a").value,
                        fc:document.getElementById("fc").value,
                        fs:document.getElementById("fs").value,
                        ta:document.getElementById("ta").value,
                        tr:document.getElementById("tr").value
            })}}>Editar</button>
        </form>
        </div>


    )
}