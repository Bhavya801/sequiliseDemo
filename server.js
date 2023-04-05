const userRoute = require('E:\\INVESTWELL\\Mini Projects\\sampleForm\\server\\Routes\\userRoutes');

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Body Parser 
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 5001;


app.use("/",userRoute);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})





