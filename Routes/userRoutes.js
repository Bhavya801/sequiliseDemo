const { createfunc ,showfunc , insertfunc} = require('../Controller/userController')

const express = require('express')
const router = express.Router() 

router.get('/form/create',createfunc)

router.post('/form/insert',insertfunc)

router.get('/form/show',showfunc)


module.exports = router
