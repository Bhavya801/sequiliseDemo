const { sequelize, connectionSequelize } = require("../Connection/db");
const { Sequelize, DataTypes } = require("sequelize");

const user = sequelize.define("user", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY, //MM/DD/YYYY
    },
    contactNumber: {
        type: DataTypes.INTEGER,
    },
},
    {
        tableName: "sampleTable",
    },
    {
        createdAt: false,
    }
);


module.exports = { user }

