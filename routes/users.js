const { Sequelize } = require('sequelize');
const User = require('../models/users.model.js');

module.exports = (app) => {
    // login handle 
    app.get('/login', (req, res) => {
        res.send('login');
    });

    
    app.get('/register', (req, res) => {
        res.send('login');
    });

    // register handle 
    app.post('/login', (req, res, next) => {
        
    });

    app.post('/register', (req, res) => {

    });

    // logout 
    app.get('/logout', (req, res) => {
        res.send('login');
    });
}