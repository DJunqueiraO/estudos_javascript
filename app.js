const express = require('express');

const data = require('./courses/freecode_camp_expressjs/apiap/data');
const people = require('./courses/freecode_camp_expressjs/methodsap/people');
const app = express();
const port = 5000

app.use(express.static('courses/freecode_camp_expressjs/methodsap'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get('/api/people', (_, response) => {
    return response
        .status(200)
        .json(people.getPeople())
})

app.get('/api/people/:id', (request, response) => {
    const person = people.getPerson(request?.params.id)
    if(person) {
        return response
            .status(200)
            .send(person)
    }
    return response
        .status(404)
        .send({success: false, msg: 'Person not found'})
})

app.post('/api/people', (request, response) => {
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
})

app.post('/api/postman/people', (request, response) => {
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
        .send({success: true, data: [...data.people, {id: data.people.length + 1, name: body.name}]})
})

app.post('/login', (request, response) => {
    const body = request.body
    if (body?.name) {
        return response
            .status(200)
            .json({name: body.name})
    } else {
        if (!body) {
            return response
                .status(400)
                .json({error: 'Body is required'})
        } else if (!body.name) {
            return response
                .status(400)
                .json({error: 'Name is required'})
        }
    }
})

app.put('/api/people', (request, response) => {
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
})

app.delete('/api/people/:id', (request, response) => {
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
})

app.delete('/api/people', (request, response) => {
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
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`));