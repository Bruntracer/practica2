
const EventEmitter = require('./events');

const evento = new EventEmitter();

evento.on('pepe', () => console.log('hola'));