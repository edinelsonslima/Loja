const express = require('express')
const router = express.Router()

//Rotas
    //Index Usuario
    router.get('/', (req, res) => {
        res.render('userIndex');
    })

module.exports = router
