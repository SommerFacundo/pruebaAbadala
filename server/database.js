import mysql from 'mysql2';
import dotenv from 'dotenv';

/**
 * Configuración para cargar variables de entorno desde el archivo .env
 */
dotenv.config();

/**
 * Pool de conexiones a la base de datos MySQL
 */
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "TP46",
}).promise();


export async function createJugador(nombre,pos,edad,est,p,nac,ap,sub,g,ga,a,fc,fs,ta,tr){
    try{
        const [result] = await pool.query(`INSERT INTO Jugadores(nombre,pos,Edad,Est,P,nac,Ap,Sub,G,GA,A,FC,FS,TA,TR) VALUES 
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[nombre,pos,edad,est,p,nac,ap,sub,g,ga,a,fc,fs,ta,tr]);
        return result;
    }catch(error){ 
        console.log("Ocurrio un error",error);
    }
}
export async function editarJugador(id_jugadores,nombre,pos,edad,est,p,nac,ap,sub,g,ga,a,fc,fs,ta,tr){
    try{
        const [result] = await pool.query(`UPDATE jugadores SET
         nombre = ?,
         pos = ?,
         Edad = ?,
         Est = ?,
         P = ?,
         nac = ?,
         Ap = ?,
         Sub = ?,
         A = ?,
        GA = ?,
        G = ?,
        FC = ?,
        FS = ?,
        TA = ?,
        TR = ?
        
        WHERE id_jugadores = ?
         `,[nombre,pos,edad,est,p,nac,ap,sub,g,ga,a,fc,fs,ta,tr,id_jugadores]);
         return result;
    }catch(e){
        console.log("Es un error: ",e);
    }
}
export async function nacionalidadArgentina(){
    try{
        const [result] = await pool.query(`SELECT * FROM jugadores WHERE nac = 'Argentina'`)
        return result;
    }catch(e){
        console.log("Es un error", e);
    }
}
export async function jugadorPeso(){
    try{
        const [result] = await pool.query(`SELECT * FROM jugadores WHERE peso > 75 AND peso < 80`);
        return result;
    }catch(e){
        console.log("Es un error", e);
    }
}

export async function getJugadorAlto(){
    try{
        const [result] = await pool.query(`SELECT MAX(Est) FROM jugadores`);
        return result;
    }catch(e){
        console.log("Error", e);
    }
}

export async function traerJugadores(){
    try{
        const [result] = await pool.query(`SELECT * FROM jugadores`);
        return result;
    }catch(error){ 
        console.log("Ocurrio un error",e);
    }
}

export async function deleteJugador(id){
    try{
        const [result] = await pool.query(`DELETE FROM jugadores WHERE id_jugadores = ?`,id);
        return result;
    }catch(error){ 
        console.log("Ocurrio un error",error);
    }
}



