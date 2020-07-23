const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./app/models')

db.sequelize.sync({force: true}).then(() => {  // Função deve ser comentada após primeira inicalização
    console.log('Drop and re-sync db.')
})

// Rota simples
app.get('/', (req, res) => {
    res.send('Bem vindo à aplicação')
})




// Rotas
require('./app/routes/av.routes')(app)

// Definindo porta e listen para requisições
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})