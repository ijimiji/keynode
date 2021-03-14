const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

const mongo = require('./mongo.js');

mongo.mongoMigration();

// app.use('/api/', router);
app.get('/api/users/', mongo.getUsers);
app.get('/api/users/:id', mongo.getUserById);
app.post('/api/users/', mongo.postUser);
app.put('/api/users/:id', mongo.updateUser);
app.delete('/api/users/:id', mongo.deleteUser);


const server = app.listen(3000, function() {
    console.log('Keynode backend running!');
  });