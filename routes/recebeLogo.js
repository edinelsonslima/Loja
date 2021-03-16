const express = require('express')
const router = express.Router()
const { request } = require('https')
const multer = require('multer')
const { parse } = require('qs')
const { config } = require('process')




//CONFIG DOS LOCAL E NOMES DOS ARQUIVOS
    //Logo
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "public/images")
            },
            filename: function (req, file, cb) {
                cb(null, "logo.png")
            }
        })

//Config Multer
const upload = multer({ storage })


//Imgagens recebidas do Admin
    //Logo
        router.post('/upload', upload.single('logo'), (req, res) => {
            console.log('files', req.files)
                })


module.exports = router;