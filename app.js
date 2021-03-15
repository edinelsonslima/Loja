//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const user = require("./routes/user")


//configs
    //Pasta Static
        app.use(express.static('uploads/images'))
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
const PORT = 8081
app.listen(PORT, function() {
    console.log("Servidor rodando!")
})