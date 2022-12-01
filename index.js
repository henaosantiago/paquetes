//const express = require('express');

import express from 'express';
import dataBase from'./database/dataBase.js';
const app =express()

try{
 await dataBase.authenticate()
console.log('coneccion exitosa')
}catch(error){
console.log(error)
}

app.listen(3100,()=>{

    console.log('servidor corriendo en el puerto 3100')

})
