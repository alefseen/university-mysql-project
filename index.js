const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const app = express();
const jwt  = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(cors());
app.set('db', require('./models/index.js'));


  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static("app/public"));
//app.set('baseUrl', '/api');
//apiPost(app, db);
//apiAuthor(app, db);
app.use('/api',require('./router'));
db.sequelize.sync({alter:false}).then(() => {
  app.listen(8080, () => console.log("App listening on port 8080!"));
}); 