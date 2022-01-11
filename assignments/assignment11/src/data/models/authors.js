const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the model Author');
    sequelize.define(
        "Authors", //Name of this model
        {
            //properties of his model
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            name: DataTypes.STRING,
            photograph: DataTypes.STRING(5000),
            biography: DataTypes.STRING(50000)
        }
    );
} 