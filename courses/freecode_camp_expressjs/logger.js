function logger(request, _, next) {
    const method = request.method
    const url = request.url
    const time = new Date().toLocaleTimeString()
    console.log({method, url, time});
    next()
}

module.exports = logger