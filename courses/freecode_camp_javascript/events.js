const EventEmitter = require('events');
const emitter = new EventEmitter()
const name = 'response';

emitter.on(name, (name, id) => {
    console.log(`Data received from ${name} with id ${id}`);
})

emitter.on(name, () => {
    console.log(`Some other logic here `);
})

emitter.emit(name, "Josicleison", 34);