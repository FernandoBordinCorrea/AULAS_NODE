const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

/*try {

    sequelize.authenticate()
    console.log('Conenctado com sucesso')

} catch (error) {
    console.log('nao foi possivel conectar', error)
}*/

module.exports = sequelize