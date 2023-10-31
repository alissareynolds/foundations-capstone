require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {SERVER_PORT} = process.env;
const {seed , getAnimals, getFavorites} = require('./controller.js');


app.use(express.json());
app.use(cors());

app.post('/seed', seed);


app.get("/api/animals", getAnimals);
app.get("/api/users/1/favorites", getFavorites);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));