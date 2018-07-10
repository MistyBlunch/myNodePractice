var events = require('events');
var eventEmitter = new events.EventEmitter();

//Creando un manejador de eventos:

var myEventHandler = () => {
    console.log('I hear a scream! :o');
}

//Asignando el manejador a un evento:
eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');