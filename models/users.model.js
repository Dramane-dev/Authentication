const { Sequelize } = require('sequelize');
const db = require('../config/db.config.js');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        notNull: true
    },
    nom: {
        type: Sequelize.STRING
    },
    prenom: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        notNull: true
    },
    pswd: {
        type: Sequelize.STRING,
        notNull: true
    }
});

module.exports = User;
