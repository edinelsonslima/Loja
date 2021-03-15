const express = require('express')
const multer = require('multer')
//const { config } = require('process')
const router = express.Router()

//CONFIG DOS LOCAL E NOMES DOS ARQUIVOS
    //Logo
    const logo = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/images")
        },
        filename: function (req, file, cb) {
            cb(null, "logo")
        }
    })
//Config Multer
        const upload = multer({ logo })

//Imgagens recebidas do Admin
    //Logo
        router.post('/upload', upload.single('logo'), (req, res) => {
             res.send("Enviado com Sucesso!!!");
        })

router.get('/', (req, res) => {
    res.render('userIndex');
})

module.exports = router