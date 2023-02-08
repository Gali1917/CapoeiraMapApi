const { Schema, model } = require('mongoose');

const PinSchema = new Schema({
    nombreGrupo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: false
    },
    imagen:{
        type: String,
        required: true
    },
    latitud:{
        type: Number,
        required: true
    },
    longitud:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    horario:{
        type: String,
        required: true
    },
    dia:{
        type: String,
        required: true
    },
    costo:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    }
})

module.exports = model('Pin', PinSchema);