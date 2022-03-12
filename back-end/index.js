const express = require('express')
const cors = require('cors')

//Crear servidor
const app = express();

//Habilitar el cors
app.use(cors())

//Habilitar express.json
app.use(express.json({extends: true}))

//Configuro el puerto de la app
const PORT = process.env.PORT || 4000 //Puerto en variable de entorno o 4000

//Definir la página principal
app.get('/',(req,res)=>{
    res.send('Hola mundo')
    }
)

//Rutas utilizadas 
app.use('/api/file',require('./routes/file'))

//Arrancar la app
app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
    }
)