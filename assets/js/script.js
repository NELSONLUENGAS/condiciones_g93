// Variables
/**
 * var (scope Global) se puede sobrescribir
 * let (scope de bloque) se puede modificar pero no sobrescribir
 *
 * Ej:
 * let perro, gato, vaca; definir variables
 *
 * - asignar variables
 * perro = 'Lazy';
 * gato = 'Michi'
 * vaca = 'Cow'
 *
 * ¨* eje: 2
 * perro = 'Caizer'
 */

// Constantes
/**
 * const (scope bloque) no se puede modificar y se debe asignar
 *
 * const Nombre = "Pedro"
 *
 * nombre = 'Paco' //No se puede
 */

//Condiciones

/**
 * /--Condiciones en una sola línea--/
 * if(condición) hacer acción
 * else hacer otra cosa
 *
 * /--Condiciones en más líneas--/
 * if(condición){
 *      ejecutar acciones
 * }else {
 *      ejecutar otras acciones
 * }
 *
 * /--Varias Condiciones en más líneas--/
 * if(condición){
 *      ejecutar acciones
 * }else if(condición){
 *      ejecutar acciones
 * }else if(condición){
 *      ejecutar acciones
 * }else {
 *      ejecutar otras acciones
 * }
 *
 *
 * /--Condiciones por casos--/
 */
// let colordeAlerta;
// const color = prompt('Escribe un color');
// switch (color) {
// 	case 'red':
// 		colordeAlerta = color;
// 		break;
// 	case 'yellow':
// 		colordeAlerta = color;
// 		break;
// 	case 'gray':
// 		colordeAlerta = color;
// 		break;
// 	case 'white':
// 		colordeAlerta = color;
// 		break;

// 	default:
// 		colordeAlerta = 'orange';
// 		break;
// }
// document.querySelector('h1').style.color = colordeAlerta;

//condionales ternarios
/**
 * if() => ? condicion
 * else  => :
 * else if() ? condicion :
 */
// let calor = Number(prompt('Escribe la temperatura actual'));
// const temperatura = calor > 28 ? 'Caliente' : calor < 18 ? 'Fresco' : 'Calido';
// document.querySelector('h1').innerText = `El clima está ${temperatura}`;

/**
 * Operadores de comparación
 * == (igual) '0' == 0 true
 * === (igual estricto)
 * < (menor) edad < 18
 * > (mayor)
 * <= (menor igual) edad <= 17
 * >= (mayor igual)
 *
 * != (diferente) '0' != 0 false
 * !== (diferente estrícto) '0' !== 0 true
 *
 * ?? (operador null)
 *  null ?? 'otro valor' => 'otro valor'
 *  12 ?? 'otro valor' => 12
 *
 * ?.
 */

// scope global
// var fruta;

// fruta = 'banano';
// if ('desayuno') {
// 	let fruta;

// 	fruta = 'pera';
// 	// scope bloque
// 	console.log(fruta);
// }
