const UserController = require('../Controllers/createUser.controller.js');
const findUserController = require('../Controllers/findUser.controller.js');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('home page');
        res.send('Welcom to my Authentication Back End');
    });
    
    // Login page
    app.get('/login', (req, res) => {
        console.log('login page');
        res.send('Login');
    });
    
    // Register page
    app.post('/register', UserController.createUser);

    // Find all user 
    app.get('/users', findUserController.findAllUsers);

    // Find user by id 
    app.get('/user/:id', findUserController.findUserById);
}
