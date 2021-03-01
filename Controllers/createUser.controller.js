const User = require('../models/users.model.js');
const { Sequelize } = require('../config/db.config.js');

// imports functions
const { success, error } = require('../functions/response');
const { validation } = require('../functions/registration.validation.js');


module.exports = {
    // Create user
    createUser(req, res) {
        const body = req.body;
        if (body.nom == '' || body.prenom == '' || body.email == '' || body.pswd == '' || body.pswd2 == '') {
            res.status(400).send(error({
                message: 'All of the field is required to create an account'
            }));
        }
        
        // validation(body);

        try {
            const user = new User({
                nom: body.nom,
                prenom: body.prenom,
                email: body.email,
                pswd: body.pswd
            });
            
            // validation(user);

            user.save()
             .then(user => res.send(success(user)))
             .catch(err => { 
                 if (err.message.includes('Validation error')) {
                    res.send(`${user.nom} cannot be created ${user.email} already exist ❌ !`);
                 } else {
                    res.status(500).send(`The user ${user.nom} cannot be created ❌ ! Error : ${err}`);
                 }
             });
        } catch (err) {
            res.send(error(err));
        }
    }
}