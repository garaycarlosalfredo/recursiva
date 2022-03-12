const express = require('express')
const router = express.Router()
const fileontroller = require('../controllers/fileController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads')
    },/*
    filename: (req, file,cb)=>{
        const {originalname}= file
        cb(null, originalname)
        
    }*/
    filename: (req, file,cb)=>{
        //const {originalname}= file
        cb(null, 'socios.csv')
        
    }
})

const upload = multer({storage})

router.post('/', 
    upload.single('file'),
    //auth,
    /*[
        check('file','El archivo no puede estar vacío').not().isEmpty()
    ],*/
    fileontroller.select    
)

router.get('/',
fileontroller.findAll
)

router.get('/p1',
    fileontroller.totalPeople
)

router.get('/p2',
    fileontroller.avgRacingFanAge
)

router.get('/p3',
fileontroller.findTop100
)

router.get('/p4',
fileontroller.findRiverNames
)

router.get('/p5',
fileontroller.resumeTeams
)

module.exports = router
