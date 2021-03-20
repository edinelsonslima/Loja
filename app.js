//Carregando modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    //const mysql = require('mysql2')
    const app = express()

//Modulos da Pasta Routes
    const admin = require("./routes/admin")
    const user = require("./routes/user")
    const recebeLogo = require("./routes/recebeLogo")
    const recebeSlide1= require("./routes/recebeSlide1")
    const recebeSlide2 = require("./routes/recebeSlide2")
    const recebeSlide3 = require("./routes/recebeSlide3")
    const produtosAlterar = require("./routes/produtosAlterar")

//configs
    //Pasta Static
        app.use('/public', express.static(__dirname + '/public'))
    //Template Engine
        app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
        app.set('view engine', 'handlebars')

    //Body Parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        
//Routes
    //tamplates
        app.use('/user', user)
        app.use('/admin', admin)
    //Recebendo imagens
        app.use('/recebeLogo', recebeLogo)
        app.use('/recebeSlide1', recebeSlide1)
        app.use('/recebeSlide2', recebeSlide2)
        app.use('/recebeSlide3', recebeSlide3)
    //Descrição dos Produtos
        app.use('/produtosAlterar', produtosAlterar)

//Criando servidor http://localhost:8080/
app.listen(8080, function () {
    console.log("Servidor rodando!")
})