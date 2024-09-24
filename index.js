const express=require("express");
const usuariosRutas=require("./rutas/rutasUsuarios");
const productosRutas=require("./rutas/rutasProductos");

const app=express();
app.use(express.urlencoded({extended:true})); //vann antes de entrar a las rutas
app.use(express.json()); //van junatas
app.use("/",usuariosRutas);
app.use("/",productosRutas);


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});