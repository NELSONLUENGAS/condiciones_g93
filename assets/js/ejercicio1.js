// Si la temperatura es menor a 0°C, mostrar "Hace mucho frío".
// ● Si la temperatura está entre 0°C y 10°C (inclusive), mostrar "Hace frío".
// ● Si la temperatura está entre 11°C y 20°C (inclusive), mostrar
// "Temperatura agradable".
// ● Si la temperatura está entre 21°C y 30°C (inclusive), mostrar "Hace calor".
// ● Si la temperatura es mayor a 30°C, mostrar "Hace mucho calor".

let mensaje;
// const temperatura = prompt('Escribe la temperatura actual');
// console.log(temperatura);
// if (temperatura < 0) {
// 	mensaje = 'Hace mucho frío 🥶';
// } else if (temperatura >= 0 && temperatura <= 10) {
// 	mensaje = 'Hace frío';
// } else if (temperatura >= 11 && temperatura <= 20) {
// 	mensaje = 'Temperatura agradable';
// } else if (temperatura >= 21 && temperatura <= 30) {
// 	mensaje = 'Hace calor';
// } else mensaje = 'Hace mucho calor 🔥';

// switch (temperatura) {
// 	case '0': //Bien
// 		mensaje = 'Hace mucho frío 🥶';
// 		break;
// 	case temperatura >= 0 && temperatura <= 10: //mal
// 		mensaje = 'Hace frío 🥶';
// 		break;
// 	case temperatura >= 11 && temperatura <= 20: //mal
// 		mensaje = 'Temperatura agradable 🤙';
// 		break;
// 	case temperatura >= 21 && temperatura <= 30: //mal
// 		mensaje = 'Hace calor 🔥';
// 		break;
// 	default:
// 		mensaje = 'Hace mucho calor 🔥';
// 		break;
// }

// document.querySelector('h1').innerText = `Hoy ${mensaje}`;

const button = document.getElementById('enviar');
let valor_1;
let valor_2;
let valor_3;
let valor_4;

let select_1;
let select_2;
let select_3;

button.addEventListener('click', function () {
	if (this.classList.contains('background-red')) {
		// console.log('lo tiene');
		this.classList.remove('background-red');
	} else {
		// console.log('no lo tiene');
		this.classList.add('background-red');
	}
	// this.classList.toggle('background-red');
	valor_1 = Number(document.querySelector('#valor_1').value);
	valor_2 = Number(document.querySelector('#valor_2').value);
	valor_3 = Number(document.querySelector('#valor_3').value);
	valor_4 = Number(document.querySelector('#valor_4').value);

	const total = valor_1 + valor_2 + valor_3 + valor_4;
	if (valor_1 < 0 || valor_2 < 0 || valor_3 < 0 || valor_4 < 0) {
		alert('Todos los valores deben ser positivos');
	} else {
		document.querySelector('h1').innerText = `Hoy tienes ${total}`;
	}

	// Ejercicio #3
	select_1 = document.querySelector('#select_1').value;
	select_2 = document.querySelector('#select_2').value;
	select_3 = document.querySelector('#select_3').value;

	const message = `${select_1}${select_2}${select_3}`;

	if (message === 'malmonedabien') {
		document.querySelector('#message').innerText = 'Combinacion correcta';
	} else {
		document.querySelector('#message').innerText = 'Combinacion incorrecta';
	}
});

document.querySelector('#valor_1').addEventListener('change', function (event) {
	valor_1 = event.target.value;

	console.log(event.target.value);
});
