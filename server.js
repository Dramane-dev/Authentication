require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
require('./routes/routes')(app);
require('./routes/users')(app);

// Sequelize 
const db = require('./config/db.config');

app.listen(process.env.PORT || 3030, () => {
    console.log(`Server started on ${process.env.PORT} ...✅`);
    db.authenticate()
     .then(() => { console.log(`Connection to db : ${process.env.DB_NAME} successfuly ✅`)})
     .catch(err => { console.log(`Connection to db : ${process.env.DB_NAME} failed ❌ ${err.message}`) })
});


