import express from "express"
import cookieParser from "cookie-parser"
import { traerJugadores, createJugador, deleteJugador, editarJugador,jugadorPeso,getJugadorAlto,nacionalidadArgentina } from "./database.js"
import cors from 'cors';

import * as http from 'http';
const app = express();
app.use(cors(
    {origin: true,
    credentials: true,}
    ));
app.use(express.json())
app.use(cookieParser())


app.get("/traerjugadores/",async (req,res)=>{
    try{
        const jugadores = await traerJugadores();
        console.log(jugadores)
        res.status(200).send(jugadores)
    }catch(e){
        console.log("Ocurrio un error",e);
    }
})
app.get("/nacionalidadArgentina/",async(req,res)=>{
    try{
        const nacArg = await nacionalidadArgentina();
        res.status(200).send(nacArg);
    }catch(e){
        console.log(e)
    }
});
app.get("/jugadorPeso/",async(req,res)=>{
    try{
        const peso = await jugadorPeso();
        res.status(200).send(peso);
    }catch(e){
        console.log(e)
    }
});
app.get("/jugadorMasAlto/",async(req,res)=>{
    try{
        const alto = await getJugadorAlto();
        res.status(200).send(alto);
    }catch(e){
        console.log(e)
    }
});
app.post("/anadirJugadores/",async(req,res)=>{
    console.log(req.body)
    try{
        const jugadores = await createJugador(req.body.nombre,
        req.body.pos,
        req.body.edad,
        req.body.est,
        req.body.p,
        req.body.nac,
        req.body.ap,
        req.body.sub,
        req.body.g,
        req.body.ga,
        req.body.a,
        req.body.fc,
        req.body.fs,
        req.body.ta,
        req.body.tr
        );
        res.status(200).send(jugadores)
    }catch(e){
        console.log("Error:",e);
    }
});
app.post("/editarJugador/",async(req,res)=>{
    console.log(req.body)
    try{
        const jugadores = await editarJugador(
        req.body.id_jugadores,   
        req.body.nombre,
        req.body.pos,
        req.body.edad,
        req.body.est,
        req.body.p,
        req.body.nac,
        req.body.ap,
        req.body.sub,
        req.body.g,
        req.body.ga,
        req.body.a,
        req.body.fc,
        req.body.fs,
        req.body.ta,
        req.body.tr
        );
        res.status(200).send(jugadores)
    }catch(e){
        console.log("Error:",e);
    }
});
app.post("/eliminar/:id",async(req,res)=>{
    try{
        const jugadores = await deleteJugador(req.params.id);
        res.status(200).send(jugadores)
    }catch(e){
        console.log("Error al eliminar",e);
    }
});


http.createServer(app).listen(8080, () => {
    console.log("Server running on port 8080 (HTTP)");
  });