const express = require('express')
const router = express.Router()
//const bone = require("./../models/bone")
const Post = require("./../models/Post");

//Rotas
    //Recebe os Input Text do form bone no Admin e Guarda no db Loja table bone
    router.post('/bone', (req, res) => {
            Post.create({
                imagemBone: req.body.imagemBone,
                marcaBone: req.body.tituloBone,
                descricaoBone: req.body.descricaoBone,
                unidadesBone: req.body.unidadesBone
            }).then(function(){
                res.redirect('/admin');
            }).catch(function(erro){
                res.send("Houve um erro "+erro);
            })
    })

module.exports = router