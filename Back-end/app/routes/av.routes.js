module.exports = app => {
    const avenidas = require('../controllers/av.controller')
    var router = require('express').Router()

    // Cadastra avenida
    router.post('/', avenidas.create)

    // Retorna as avenidas
    router.get('/', avenidas.findAll)

    // Acha por ID
    router.get('/:id', avenidas.findById)

    // Deleta
    router.delete('/:id', avenidas.delete)

    //Atualizar
    router.put('/:id', avenidas.update)

    app.use('/api/avenidas', router)
}