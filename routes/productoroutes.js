import express from 'express'
import { crearProducto } from '../controllers/productocontroller.js'

const productoRouter= express.Router()

productoRouter.post('/',crearProducto)

export{
    productoRouter
}