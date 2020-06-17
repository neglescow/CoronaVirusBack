const Sequelize = require('sequelize')

module.exports = (sequelize, Sequelize) =>{
    const Paciente = sequelize.define(//define = cria a tabela
        'paciente',{
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING
            },
            endereco: {
                type: Sequelize.STRING
            },
            telefone: {
                type: Sequelize.STRING
            },
            peso: {
                type: Sequelize.DOUBLE
            },
            altura: {
                type: Sequelize.DOUBLE
            },
            idade: {
                type: Sequelize.INTEGER
            },
            prob_saude: {
                type: Sequelize.STRING
            },
            obesidade: {
                type: Sequelize.STRING
            },
            idoso: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false //tempo de criação, "eu não quero guardar o tempo de criação desse objeto"
        }
    )

    return Paciente
}