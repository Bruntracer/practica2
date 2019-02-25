

const Habitacion = require('./habitacion');
const Termostato = require('./termostato');
const Programador = require('./programador');





const arrayConfig = [

	{hora:'14:11',temperatura:22},
	{hora:'14:12',temperatura:22},
	{hora:'12:30',temperatura:22},
	{hora:'12:30',temperatura:22}
]


const programador = new Programador(arrayConfig);
//programador.emiteEvento();
programador.on('ideal', (temp) => console.log('tira-----------'+temp));


