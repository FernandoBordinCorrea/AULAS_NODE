const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '123321', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate()
    console.log('Conenctado com sucesso')
} catch (error) {
    console.log(`nao foi possivel conectar: ${error}`)
}

module.exports = sequelize