const router = require('express').Router();
const people = require('../../methodsap/people');
const personController = require('../controllers/person_controller');

router.get('/', personController.getAll)

router.get('/:id', personController.get)

router.post('/', personController.post)

router.put('/', personController.put)

router.delete('/:id', personController.deleteById)

router.delete('/', personController.delete)

module.exports = router