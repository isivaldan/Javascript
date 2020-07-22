// //Numeros en JS

// const prod1 = "Pizza",
//     precio1 = 30
// prod2 = "Burger"
// precio2 = 40
// total = (precio1, precio2) => {
//     return precio1 + precio2
// }
// html = `
// <ul>
// <li>${prod1}</li>
// <li>${precio1}</li>
// <li>${prod2}</li>
// <li>${precio2}</li>
// <li>Total ${total(precio1,precio2)}</li>
// </ul>
// `




// document.getElementById('app').innerHTML = html


// const numeros = [10, 20, 30, 40, 50, 70, 80, 100, 5, 6, 9]
// console.log(numeros)

// numeros.push(60)

// numeros.splice(2, 1)

// numeros.sort((a, b) => {
//     a - b
// })
// console.log(numeros)


// const person = {
//     name: "Isi",
//     edad: 34,
//     profesion: "Ing",
//     email: "isi@correo.com",
//     musica: ["house", "chill", "rock"],
//     fechacumple: () => {
//         return new Date().getFullYear() - person.edad;
//     }
// }
// person.musica.push("classic")
// console.log(person.fechacumple())


// const auto = [
//     { modelo: 'Mustang', motor: 6.2 },
//     { modelo: 'Camaro', motor: 6.1 },
//     { modelo: 'Mustang', motor: 6.3 }
// ]

// for (let i = 0; i < auto.length; i++) {
//     console.log(auto[i].modelo)
// }

// suma = (a, b) => {
//     return console.log(a + b)
// }

// saludar = (nombre = 'Visita') => {
//     console.log(`Hola ${nombre}`)
// }
// let sumar = suma(2, 3)

// saludar('Isi');
// saludar();

// ((nom) => {
//     return console.log(`Hey${nom}`)
// })('Isi');

// const musica = {
//     reproducir: () => {
//         return console.log("reproducir");
//     }
// }
// musica.reproducir()

// obtenerCLientes = () => {
//     console.log('Descargando...')
//     setTimeout(() => {
//         console.log('Completo')
//     }, 3000)
// }
// try {
//     algo()
// } catch {
//     console.error('Malo')
// } finally {
//     console.log("Seguir")
// }
// obtenerCLientes();
// //Objeto Date

// const diaHoy = new Date();

// console.log(diaHoy)
// let navidad2020 = new Date('12-25-2020')
// console.log(navidad2020)

// let valor;
// //mes
// valor = diaHoy.getMonth()
// console.log(valor)


// const edad = 18

// if (edad >= 18)
//     console.log("hola")

// else
//     console.log("nope")

// const logueado = true
// console.log(logueado === true ? 'si se cuple' : 'No se cumple')

// // switch
// const metodoPago = 'efectivo'
// switch (metodoPago) {
//     case 'efectivo':
//         console.log(`El usuario pago con ${metodoPago}`)
//         break
//     case 'efectivo':
//         console.log(`El usuario pago con ${metodoPago}`)
//     case 'efectivo':
//         console.log(`El usuario pago con ${metodoPago}`)
//         break
//     default:
//         console.log('nope')
//         break
// }
// //for
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log('*');
//     } else {
//         console.log('.');
//     }
// }

// let i = 0;
// while (i < 5) {
//     console.log('Hey')
//     i++
// }

// //foreach

// const pendientes = ['tarea', 'comer', 'proyectos', 'apender js']

// pendientes.forEach(pendiente => console.log(`${pendiente}`))

// pendientes.forEach((pendiente, index) => {
//     return console.log(`${index}${pendiente}`)
// })

// const carrito = [
//     { id: 'Mustang', motor: 6.2 },
//     { id: 'Camaro', motor: 6.1 },
//     { id: 'Mustang', motor: 6.3 }
// ]

// const ids = [...carrito].map(carrito => carrito.id)

// console.log(ids)

// const anotherArr = {
//     id: 'Mustang',

//     jej: 'Camaro',

//     jij: 'Mustang'
// }
// for (let carr in anotherArr) {
//     console.log(`${carr}:${anotherArr[carr]}`);
// }


// const ciudades = ['london', 'new york', 'madrid', 'paris']
// const ordenes = new Set([123, 231, 131, 102])
// const datos = new Map();
// datos.set('nombre', 'isi')
// datos.set('profesion', 'desa')
//     //default
// for (let entrada of ordenes) {
//     console.log(entrada)
// }
// //entries iterador

// for (let entrada of ciudades.entries()) {
//     console.log(entrada)
// }
// //values
// for (let entrada of datos.values()) {
//     console.log(entrada)
// }

// //keys
// for (let entrada of datos.keys()) {
//     console.log(entrada)
// }

// const enlaces = document.getElementsByTagName('a')
// for (let enlace of enlaces) {
//     console.log(enlace.href)
// }