//Carregando modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const mysql = require('mysql2')
    const app = express()

//Modulos da Pasta Routes
    const admin = require("./routes/admin")
    const user = require("./routes/user")
    const recebeLogo = require("./routes/recebeLogo")
    const recebeSlide1= require("./routes/recebeSlide1")
    const recebeSlide2 = require("./routes/recebeSlide2")
    const recebeSlide3 = require("./routes/recebeSlide3")

//Config teste MySQL
/*const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'loja'
});
con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

//COMANDO SELECT * FROM
con.query('SELECT * FROM bone;', ( rows) => {
        console.log('id: ',rows, '\n\n')
})
*/
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
    app.use('/recebeLogo', recebeLogo)
    app.use('/recebeSlide1', recebeSlide1)
    app.use('/recebeSlide2', recebeSlide2)
    app.use('/recebeSlide3', recebeSlide3)
//Outros
app.listen(8080, function () {
    console.log("Servidor rodando!")
})