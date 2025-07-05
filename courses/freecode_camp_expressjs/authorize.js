const authorize = (request, response, next) => {
    if(request?.headers?.username === 'Josicleison') {
        request.user = {name: 'josicleison', id: 4}
        next();
    } else {
        response.status(401).send('Unauthorized');
    }
}

module.exports = authorize