require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {SERVER_PORT} = process.env;


app.use(express.json());
app.use(cors());

app.post('/seed', seed);

const { getAnimals } = require('./controller')

app.get("/api/animals", getAnimals);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));