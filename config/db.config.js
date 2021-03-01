require('dotenv').config();
const { Sequelize } = require('sequelize');
// Connection to my db 
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});