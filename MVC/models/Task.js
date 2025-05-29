const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: false,
    },
    description: {
        type: DataTypes.STRING,
        required: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: false,
    }
})

module.exports = Task