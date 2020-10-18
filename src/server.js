// Definición del Servidor

const express = require('express')
const cors = require('cors')
const entriesRouter = require('./routes/entries')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/entries', entriesRouter)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Medium APIv1'
  })
})

module.exports = app

/*
Cada que quiera crear un endpoint nuevo el proceso es:
1.-asegurarnos de tener nuestro modelo(acceso a datos), si no existe crearlo
2.- Crear el o los casos de uso necesarios para la acción
3.- crear nuestro endpoint y conectarlo al o los casos de uso correspondientes
*/
