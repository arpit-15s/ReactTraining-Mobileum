const {Sequelize}=require('sequelize');


//create a connection

const username='postgres';
const password='A@rpit79';
const dbName='Book-Data';
const host='localhost';
const dialect='postgres'; //which data base you are using. query will be generated accordingly

const sequelize = new Sequelize(dbName,username,password,{
    host,
    dialect,
});



module.exports={
    Sequelize,
    sequelize
};