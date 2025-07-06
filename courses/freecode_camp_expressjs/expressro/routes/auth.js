const router = require('express').Router();
const people = require('../../methodsap/people');

router.post('/login', (request, response) => {
    const person = people.matchNamePassword(request?.body)
    if(person) {
        return response
            .status(200)
            .send(person)
    }
    return response
        .status(404)
        .send({success: false, msg: 'Person not found'})
})

module.exports = router