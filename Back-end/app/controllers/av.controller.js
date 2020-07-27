const db = require('../models')
const Av = db.avenidas
const Op = db.Sequelize.Op

// Cadastra avenidas
exports.create = (req, res) => {
    // Validando requisição
    if (!req.body.nome || !req.body.extensao) {
        res.status(400).send('Conteúdo não pode estar vazio')
        return
    }
    // Registrando avenida
    const avenida = {
        nome: req.body.nome,
        extensao: req.body.extensao,
        ciclofaixa: req.body.ciclofaixa,
        extciclo: req.body.extciclo,
        porcentagem: ((req.body.extciclo / req.body.extensao) * 100).toFixed(2)
    }
    // Salvando no db
    Av.create(avenida).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send('Erro ao cadastrar: ' + err)
    })
}

// Procura avenidas
exports.findAll = (req, res) => {
    const nome = req.query.nome
    let condition = nome ? {nome: {[Op.like]: `%${nome}%`}}: null
    
    Av.findAll({where: condition}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro ao buscar avenidas'
        })
    })
}

// Busca por ID
exports.findById = (req, res) => {
    const id = req.params.id
    //let condition = {id: {[Op.eq]: id}}
    
    Av.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro ao buscar avenidas'
        })
    })
}

// Deleta por ID
exports.delete = (req, res) => {
    const id = req.params.id

    Av.destroy({where: {id: id}}).then(num => {
        if (num == 1) {
            res.send('Avenida deletada!')
        } else {
            res.send('Avenida não foi deletada ou não foi encontrada!')
        }
    }).catch(err => {
        res.send(`Erro: ${err}`)
    })
}

// Atualiza por ID
exports.update = (req, res) => {
    const id = req.params.id
    let avenida_up = {
        nome: req.body.nome,
        extensao: req.body.extensao,
        ciclofaixa: req.body.ciclofaixa,
        extciclo: req.body.extciclo,
        porcentagem: ((req.body.extciclo / req.body.extensao) * 100).toFixed(2)
    }

    Av.update(avenida_up, {where: {id: id}}).then(num => {
        if (num = 1) {
            res.send('Avenida atualizada')
        } else {
            res.send('Avenida não atualizada')
        }
    }).catch(err => {
        res.status(500).send(`Erro ao atualizar: ${err}`)
    })
}
