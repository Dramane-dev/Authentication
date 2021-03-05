const User = require('../models/users.model.js');
const { Sequelize } = require('../config/db.config.js');

// imports functions
const { success, error } = require('../functions/response');
const { emptyField } = require('../functions/emptyField.js');
const { pswdConfirmed } = require('../functions/pswdConfirmed.js');
const { pswdSize } = require('../functions/pswdSize.js');


module.exports = {
    createUser(req, res) {
        const { nom, prenom, email, pswd, pswd2 } = req.body;
        let valueValidate = false;
        const valueNotEmpty = emptyField(nom, prenom, email, pswd, pswd2);
        const passwordConfirmed = pswdConfirmed(pswd, pswd2);
        const goodSizeToPswd = pswdSize(pswd);

        if (!valueNotEmpty) {
            res.status(500).send(error(
                `All of the fields is required !`
            ));
        }

        if (!passwordConfirmed) {
            res.status(500).send(error(
                `Password must be confirmed !`
            ));
        }

        if (!goodSizeToPswd) {
            res.status(500).send(error(
                `Password must have more than 6 characters !`
            ));
        } else {
            valueValidate = true;
        }
        
        if (valueValidate) {
            try {
                const user = new User({
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    pswd: pswd
                });
            
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
}
