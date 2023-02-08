const mongoose = require('mongoose');

require('dotenv').config({path: '.env'});

const conexionDB = async() =>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_MONGO);
        console.log('MongoDB conectada');
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = conexionDB;