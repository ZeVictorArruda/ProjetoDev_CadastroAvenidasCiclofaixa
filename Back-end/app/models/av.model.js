module.exports = (sequelize, Sequelize) => {
    const Av = sequelize.define('avenidas', {
        nome: {type: Sequelize.STRING},
        extensao: {type: Sequelize.FLOAT},
        ciclofaixa: {type: Sequelize.BOOLEAN, defaultValue: false},
        extciclo: {type: Sequelize.FLOAT, defaultValue: 0.0},
        porcentagem: {type: Sequelize.FLOAT}
    })
    return Av
}
