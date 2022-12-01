//const express = require('express');

import express from 'express';
import dataBase from'./database/dataBase.js';
import { crearProducto } from './controllers/productocontroller.js';

const app =express()

app.use('/producto,productoRouter')

try{
 await dataBase.authenticate()
console.log('coneccion exitosa')
}catch(error){
console.log(error)
}

app.listen(3100,()=>{

    console.log('servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})
