const express = require('express')
const multer = require('multer')
const router = express.Router()


//CONFIG DOS LOCAL E NOMES DOS ARQUIVOS
//Logo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images")
    },
    filename: function (req, file, cb) {
        cb(null, "slide1.png")
    }
})

//Config Multer
const upload = multer({ storage })


//Imgagens recebidas do Admin
//Logo
router.post('/upload', upload.single('slide1'), (req, res) => {
    console.log('files', req.files)
})


module.exports = router;