const express = require('express');
const data = require('./courses/freecode_camp_expressjs/apiap/data');

const app = express();
const port = 5000

app.get('/', (_, response) => {
    response.send(
        '<h1>Home Page</h1>' + 
        '<a href="/api/products">products</a><br>' +
        '<a href="/api/people">people</a>'
    );
});

app.get('/api/products', (_, response) => {
    return response
        .status(200)
        .json(data.products.map(product => (
            {name: product.name, image: product.image, price: product.price}
        )))
});

app.get('/api/products/:id', (request, response) => {
    const product = data.products.find(product => product.id.toString() === request.params.id)
    if(product) {
        return response.status(200).json(product);
    } else {
        return response.status(404).json({error: 'Product not found'});
    }
});

app.get('/api/products/:id/reviews/:rid', (request, response) => {
    response.send('lero lero')
})

app.get('/api/v1/query', (request, response) => {
    const query = request.query
    const limit = query.limit
    let products = data.products.filter(
        product => Object.keys(query).every(key => key === 'limit' || product[key].toString() === query[key])
    )
    
    if(limit) {
        products = products.slice(0, Number(limit))
    }
    return response.status(200).json(products);
})

app.get('/api/people', (_, response) => {
    response.json(data.people);
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
