const { user } = require("../Model/model");

const createTable = user.sync().then(() => {
    console.log('Table created successfully!')
}).catch((error) => {
    console.error('Unable to create table : ', error)
})


const addData = (data) => {
    user.create(data).then((res) => {
        console.log('Data added successfully! ', res)
    }).catch((error) => {
        console.error('Unable to add data : ', error)
    });
} 

const fetchData = async(req,res)=> {
   
    return new Promise((resolve) => {
        user.findAll().then((res) => {
            resolve(res)
            console.log('Table Data ',res)
        }, 
        ).catch((error) => {
            console.error('Cannot show data ', error)
        })
        
    })
};


module.exports = {createTable,addData,fetchData}