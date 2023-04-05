const mysql2 = require('mysql2');
const { createTable,addData,fetchData } = require('../Repositories/userDb');

const createfunc = async () => {
    const result = await (createTable());
    return new Promise((resolve) => {
        resolve(result);
    })

}

const insertfunc = async () => {
    const  data = { firstName: "Raja" ,lastName : "Sharma", dateOfBirth :"08/14/2001" , contactNumber : 999911001 }
    const result = await addData(data);
    return new Promise((resolve) => {
        resolve(result);
    })

}

const showfunc = async () => {
    const result = await (fetchData());
    console.log("HIII",result)
    return new Promise((resolve) => {
        resolve(result);
    })

}

module.exports = {
    createfunc,
    insertfunc,
    showfunc,

}


