// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//Endpoint
//routes
//Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    //HTTP CODE STATUS: 200
    res.status(200).json(explorer1)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`POST Explorers V1 API ${new Date()}`)
    //Agregar la lógica para guardar
    console.log(req.body) //parametros del request
    res.status(201).json({message: "Creado exitosamente"})

})

//Sirve para actualizar
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`PUT Explorers V1 API ${new Date()}`)
    //Agregar la lógica para ACTUALIZAR
    console.log(req.body)
    console.log(req.params.id)
    res.status(200).json({message: "Actualizado exitosamente"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`DELETE Explorers V1 API ${new Date()}`)
    //Agregar la lógica para ELIMINAR el registro enviado
    res.status(200).json({message: "Eliminado exitosamente"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})