import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const  Producto = dataBase.define('producto',{
    nombre:{
        type:DataTypes.STRING
    },
    decripcion:{
        type:DataTypes.STRING
    }
})
export {
    Producto
}
