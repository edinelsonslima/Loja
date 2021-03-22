const express = require('express')
const router = express.Router()
const produto = require("./../models/Post");

//Rotas
    //Index Usuario
    router.get('/', (req, res) => {
        produto.findAll().then(function(produto){
            res.render('userIndex',{produto:produto});
        })
    })

module.exports = router
