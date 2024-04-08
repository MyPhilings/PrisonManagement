const express = require('express');
const router = express.Router();

const prisonerController = require('../controllers/prisonerController');

//gets all list of prisoners
//http://localhost:4000/prisoner/prisoners
//router.get('/prisoners', prisonerController.prisoners)

////http://localhost:4000/prisoner/
router.get('/prisoners', prisonerController.prisoners)

router.get('/prisoners/:id', prisonerController.prisoner)

router.get('/search/prisoner', prisonerController.searchPrisoner)

router.get('/greet/person', prisonerController.greet)

module.exports = router;