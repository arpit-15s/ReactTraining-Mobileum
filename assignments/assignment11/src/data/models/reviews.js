const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the model Review');
    sequelize.define(
        "Reviews", //Name of this model
        {
            //properties of his model
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            book_name: DataTypes.STRING,
            review: DataTypes.STRING(50000)
        }
    );
} 