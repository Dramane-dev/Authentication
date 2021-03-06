//const { success } = require('../functions/response.js');
const User = require('../models/users.model.js');
const { success, error } = require('../validationFunctions/response.js');

module.exports = {
    // Find all user
    findAllUsers(req, res) {
        User.findAll()
         .then(users => res.send(success(users)))
         .catch(err => res.status(400).send(error({
             message: `User not found ... ❌ Error : ${err}`
         })));
    },

    // Find user by id 
    findUserById(req, res) {
        const id = req.params.id; 

        User.findByPk(id)
         .then(user => res.send(success(user)))
         .catch(err => res.status(400).send(error({
             message: err
         })));
    }
}