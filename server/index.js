require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {SERVER_PORT} = process.env;
const {seed , getAnimals, getFavorites, saveFavorites, deleteFavorites, getProfile} = require('./controller.js');


app.use(express.json());
app.use(cors());

app.post('/seed', seed);


app.get("/api/animals", getAnimals);
app.get("/api/users/:id/favorites", getFavorites);
app.post("/api/user/:id/favorites", saveFavorites);
app.delete("/api/user/:id/favorites/:animalId", deleteFavorites);
app.get("/api/animals/:id", getProfile);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));