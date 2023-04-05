const services = require('../Services/userServices')


const createfunc = async (req, res) => {
    const result = await (services.createfunc())
    res.send(result)
    return result

}

const insertfunc = async (req, res) => {
    const result = await (services.insertfunc())
    res.send(result)
    return result

}

const showfunc = async (req, res) => {
    console.log("HIIIII")
    const result = await (services.showfunc())
    res.send(result)
    return result
}




module.exports = {

    createfunc,
    showfunc,
    insertfunc,

}







