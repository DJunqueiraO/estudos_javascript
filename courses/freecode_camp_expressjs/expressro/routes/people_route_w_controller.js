const router = require('express').Router();
const people = require('../../methodsap/people');
const personController = require('../controllers/person_controller');

router.route('/')
    .get(personController.getAll)
    .post(personController.post)
    .put(personController.put)
    .delete(personController.delete)
router.route('/:id')
    .get(personController.get)
    .delete(personController.deleteById)
router.route('/postman')
    .post(personController.postToPostman)

module.exports = router