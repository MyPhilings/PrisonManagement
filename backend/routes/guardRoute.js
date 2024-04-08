const express = require('express');
const router = express.Router();

const guardController = require('../controllers/guardController');

router.get('/all', guardController.all)

router.get('/guards/:id', guardController.guards)

router.get('/guards', guardController.guard)

router.get('/delete', guardController.delete)

module.exports = router;