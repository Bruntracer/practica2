
const EventEmitter = require('events');

// Importar modulo Later.js:
const later = require('later');



// Clase Termostato.
// Mira la temperatura de una habitacion y avisa si hace demasiado calor o frio.
// Tambien informa sobre la temperatura actual de la habitacion.
// Metodos:
//    indicarTemperaturaIdeal
//    encender
//    apagar
// Eventos:
//    tic
//    muchocalor
//    muchofrio
class Programador  extends EventEmitter {

	constructor(arrayConfig) {
		super();

		this.arrayConfig = arrayConfig;

		later.date.localTime();

		var _this = this;

		

		console.log(this)


		this.arrayConfig.forEach( function(valor) {

    		// Crear planificación para todos los dias a las 18:00
			const sched = later.parse.text('at '+valor.hora);
			// Crear un temporizador que escriba indefinidamente "hola"
			// en los instantes planificados anteriormente:
			later.setInterval(() => _this.emit('ideal', valor.temperatura), sched);
		});
		
	}
	

	

	
}

exports = module.exports = Programador;

