import React from "react"
import "./styles.css/modalMostrar.css"
export function ModalMostrar({datos,children,show,setShow}){

    return(
        <div className="containerModalMostrar">
            <div className="modalMostrar">
            {children}
            
            <button  onClick={()=>{setShow("")}} className="btnModalUpdateCerrar">X</button>
        </div>
            </div>

    )
}