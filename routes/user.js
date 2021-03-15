const express = require('express')
const multer = require('multer')
//const { config } = require('process')
const router = express.Router()

//CONFIG DOS LOCAL E NOMES DOS ARQUIVOS
    //Logo
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "public/images")
        },
        filename: function (req, file, cb) {
            cb(null, "loo.png")
        }
    })


//Config Multer
const upload = multer({ storage })


//Imgagens recebidas do Admin
    //Logo
router.post('/upload', upload.single('logo'), (req, res) => {
    console.log("Logo Enviado para o Back End")
        })

router.post('/upload', upload.single('Slide1'), (req, res) => {
    console.log("Slide1 Enviado para o Back End")
})


router.get('/', (req, res) => {
    res.render('userIndex');
})

module.exports = router
