const headers = new Headers(); headers.append('pragma', 'no-cache');
headers.append('cache-control', 'no-cache');


export async function traerJugadores(){
    try{
        const response = await fetch("http://localhost:8080/traerjugadores",{headers});
        const data = await response.json();
        return data;
    }catch(e){
    }
}
export async function editarJugador(datos){
    try{
        const response = await fetch("http://localhost:8080/editarJugador",{
            method: "POST",
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Error:" ,error);
    }
}
export async function eliminarJugador(id){
    console.log(id)
    try{
        const response = await fetch(`http://localhost:8080/eliminar/${id}`,{
            method:"POST"
        });
        const data = await response.json();
        return data;
    }catch(e){
        console.log("Error al eliminar usuario",e);
    }
}

export async function anadirJugadores(datos){
    try{
        const response = await fetch("http://localhost:8080/anadirJugadores",{
            method : "POST",
            body : JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        return data
    }catch(e){
        console.log("Error:",e);
    }
}

export async function jugadorMasAlto(){
    try{
        const response = await fetch("http://localhost:8080/jugadorMasAlto",{headers})
        const data = await response.json();
        return data
    }catch(e){
        console.log("Error:",e);
    }
}
export async function jugadoresArg(){
    try{
        const response = await fetch("http://localhost:8080/nacionalidadArgentina",{headers})
        const data = await response.json();
        return data
    }catch(e){
        console.log("Error:",e);
    }
}

export async function jugadoresPesos(){
    try{
        const response = await fetch("http://localhost:8080/jugadorPeso",{headers})
        const data = await response.json();
        return data
    }catch(e){
        console.log("Error:",e);
    }
}

