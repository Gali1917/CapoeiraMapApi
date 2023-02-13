const Pin = require("../models/Pin");


exports.crearPin = async (req, res) => {
    try {
        let pin;
        pin = new Pin(req.body);
        await pin.save();
        console.log(pin);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
    console.log(req.body);
}

exports.obtenerPin = async (req, res) => {
    try {
        const pin = await Pin.find();
        res.json(pin);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
}

exports.actualizarPin = async (req, res) => {
    try {
        const { nombreGrupo, telefono, imagen, latitud, longitud, descripcion, horario, dia, costo, tipo} = req.body;
        let pin = await Pin.findById(req.params.id);
        if (!pin) {
            res.status(404).json({ msg: 'No existe el pin' })
        }
        pin.nombreGrupo = nombreGrupo;
        pin.telefono = telefono;
        pin.imagen = imagen;
        pin.latitud = latitud;
        pin.longitud = longitud;
        pin.descripcion = descripcion;
        pin.horario = horario;
        pin.dia = dia;
        pin.costo = costo;
        pin.tipo = tipo;

        pin = await Pin.findOneAndUpdate({ _id: req.params.id }, pin, { new: true })
        res.json(pin);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
}

exports.obtenerPinId = async (req, res) => {
    try {
        let pin = await Pin.findById(req.params.id);
        if (!pin) {
            res.status(404).json({ msg: 'No existe el pin' })
        }
        res.json(pin);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
}

exports.eliminarPin = async (req, res) => {
    try {
        let pin = await Pin.findById(req.params.id);
        if (!pin) {
            res.status(404).json({ msg: 'No existe el pin' })
        }
        await Pin.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'pin eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
}