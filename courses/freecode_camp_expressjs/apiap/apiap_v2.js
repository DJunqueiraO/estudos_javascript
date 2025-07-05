const express = require('express');
const logger = require('./courses/freecode_camp_expressjs/logger.js');
const authorize = require('./courses/freecode_camp_expressjs/authorize.js');
const morgan = require('morgan');

const data = require('./courses/freecode_camp_expressjs/apiap/data');
const app = express();
const port = 5000

// app.use(
//     /*'/api', - isso serve para especificar em qual subrota ira funcionar*/
//     [authorize, logger]
// )

app.use(morgan('tiny'))

app.get('/', (request, response) => {
    response.send(
        '<h1>Home Page</h1>'
    );
});

app.get('/about', (_, response) => {
    response.send(
        '<h1>About Page</h1>'
    );
})

app.get('/api/products', (_, response) => {
    return response
        .status(200)
        .json(data.products.map(product => (
            {name: product.name, image: product.image, price: product.price}
        )))
})

app.get('/api/persons', (_, response) => {
    return response
        .status(200)
        .json(data.people.map(person => (
            {name: person.name}
        )))
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`));