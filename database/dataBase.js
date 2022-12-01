import {Sequelize}from "sequelize";
//una conexion 

const dataBase = new Sequelize('crudfullstack','root','',{
    host:'localhost',
    dialect:'mysql'
});
export default dataBase

