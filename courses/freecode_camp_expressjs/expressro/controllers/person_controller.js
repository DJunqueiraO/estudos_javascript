const people = require('../../methodsap/people');

class PersonController {
    getAll = (_, response) => {
        return response
            .status(200)
            .json(people.getPeople())
    }

    get = (request, response) => {
        const person = people.getPerson(request?.params.id)
        if(person) {
            return response
                .status(200)
                .send(person)
        }
        return response
            .status(404)
            .send({success: false, msg: 'Person not found'})
    }

    post = (request, response) => {
        const body = request.body
        if(!body) {
            return response
                .status(400)
                .json({success: false, msg: 'Body is required'})
        } 
        if(!body.name) {
            return response
                .status(400)
                .json({success: false, msg: 'Name is required'})
        }
        return response
            .status(201)
            .send(people.addPerson(body))
    }

    put = (request, response) => {
        const body = request.body
        if(!body) {
            return response
                .status(400)
                .json({success: false, msg: 'Body is required'})
        } 
        if(!body.name) {
            return response
                .status(400)
                .json({success: false, msg: 'Name is required'})
        }
        if(!body.id) {
            return response
                .status(400)
                .json({success: false, msg: 'Id is required'})
        }
        const putResult = people.putPerson(body)
        if(putResult) {
            return response
                .status(200)
                .send(putResult)
        }
        return response
            .status(404)
            .send({success: false, msg: 'Person not found'})
    }

    deleteById = (request, response) => {
        const id = request.params.id
        const deleteResult = people.deletePerson(id)
        if(deleteResult) {
            return response
                .status(200)
                .send(deleteResult)
        }
        return response
            .status(404)
            .send({success: false, msg: 'Person not found'})
    }

    delete = (request, response) => {
        if(Object.keys(request.body).length) {
            const id = request.body.id || 0
            const deleteResult = people.deletePerson(id)
            if(deleteResult) {
                return response
                    .status(200)
                    .send(deleteResult)
            }
            return response
                .status(404)
                .send({success: false, msg: 'Person not found'})
        }
        people.setPeople([]);
        return response
            .status(200)
            .send([])
    }
}

module.exports = new PersonController()