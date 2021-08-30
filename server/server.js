require('./config/config')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/', function (req, res) {
  res.send('get usuario')
})
app.get('/usuario', function (req, res) {
    res.send('get usuario')
  })

  app.post('/usuario', function (req, res) {
    let body = req.body

    if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        });
    } else {
        res.json({
            persona : body
        })
    }

  })  

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id
    })
  })

app.delete('/usuario', function (req, res) {
    res.send('delete usuario')
  })
 
app.listen(3000, () =>{
    console
    .log('Escuchando en el puerte 3000')
})