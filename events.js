

class EventEmitter {
	
	constructor() {

		this.eventos = [];
		this.funciones= [];

	}

	on(nombre,funcion){


		this.eventos.push(nombre);
		this.eventos.push(funcion)
		/*this.eventos.push(nombre);
		this.funciones.push(funcion)
		//funcion(argumentos);
		console.log(this.funciones);*/

		console.log(this.eventos);

		
		

	}

	emit(nombre,argumento){

	}

	
}

exports = module.exports = EventEmitter;