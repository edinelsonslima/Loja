//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const admin = require("./routes/admin")
const user = require("./routes/user")
const app = express()

//configs
    //Pasta Static
        app.use('/public', express.static(__dirname + '/public'))
    //Template Engine
        app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
        app.set('view engine', 'handlebars')

    //Body Parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

//Routes
    app.use('/user', user)
    app.use('/admin', admin)

//Outros
app.listen(8080, function () {
    console.log("Servidor rodando!")
})