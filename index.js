const express = require('express');
const conexionDB = require('./config/db');
const cors = require('cors');

const app = express();

conexionDB();

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/pin'));

app.listen(5005, () =>{
    console.log("Servidor corriendo en 5005");
})