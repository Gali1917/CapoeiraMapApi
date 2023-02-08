const express = require('express');
const router = express.Router();
const pinController = require('../controllers/pinController')

router.get('/pin/', pinController.obtenerPin);
router.put('/pin/:id', pinController.actualizarPin);
router.get('/pin/:id', pinController.obtenerPinId);
router.delete('/pin/:id', pinController.eliminarPin);

router.post('/pin/', pinController.crearPin);

module.exports = router;