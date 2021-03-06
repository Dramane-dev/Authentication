const User = require('../models/users.model.js');

exports.userExist = user => {
    User.findOne({ 
        where: {
            email: user.email
        }
    })
     .then(res => {
         if (res) {
            const email = res.email;
            if (user.email !== email) {
                console.log(user.email);
                console.log(email);
                return true;
            }
            return false;
         }
     })
     .catch(err => console.log(err));
}