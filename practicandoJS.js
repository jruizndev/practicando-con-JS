// practica fechas

// let introDate = prompt('Ingrese la fecha', 'mm/dd/yyyy')
// let dateuser = new Date(introDate)

// let day = dateuser.getDay()

// let weekday

// switch (day) {
//     case 0:
//         weekday = 'Sunday'
//         break

//     case 1:
//         weekday = 'Monday'
//         break

//     case 2:
//         weekday = 'Tuesday'
//         break

//     case 3:
//         weekday = 'Wednesday'
//         break

//     case 4:
//         weekday = 'Thursday'
//         break

//     case 5:
//         weekday = 'Friday'
//         break

//     case 6:
//         weekday = 'Saturday'
//         break
// }

// alert('El día de la semana de esa fecha es: ' + weekday)

//ARRAYS (VECTORES Y MATRICES)

// let miVector = ['Jose', 'Francisco', 'Alfonso', 'Antonio', 'Jorge']

// //consulto lo que hay en la posición 2
// console.log(miVector[2])

// let miMatriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// //como accedo a la posición de 5. Primero especifico la fila y luego dentro del array la posición de 5
// console.log(miMatriz[1][1])

// //crear arrays vacios para incluir datos posteriormente

// //ejemplo vector
// let listname = new Array(3)
// listname[0] = 'Jose Alfonso'
// listname[1] = 'Ruiz Santa Quiteria'
// listname[2] = 'Nieto'
// console.log(listname)

// //ejemplo matriz

// let supermarketlist = new Array(3)
// for (let i = 0; i < 3; i++) {
//     supermarketlist[i] = new Array(3)
// }
// console.log(supermarketlist)

// //crear una matriz a partir de tres vectores

// let city1 = ['Madrid', 'Comunidad de Madrid', 'España']
// let city2 = ['Barcelona', 'Cataluña', 'España']
// let city3 = ['Málaga', 'Andalucía', 'España']

// let bigcities = [city1, city2, city3]
// console.log(bigcities)

// //Recorrer un array con for (vectores)

// let latamCountries = ['Argentina', 'Brasil', 'México', 'Colombia', 'Perú']
// for (let i = 0; i < latamCountries.length; i++) {
//     console.log(latamCountries[i])
//     //podemos añadir una descripción entre medias del reccorrido // también podeos hacer otras cosas
//     if (latamCountries[i] == 'Argentina') {
//         console.log('Es el país del mate')
//     }
// }

// //Recorrer matrices con for (2 veces)

// let allLatam = [
//     ['Argentina', 'Mexico', 'Colombia', 'Brasil'],
//     ['Chile', 'Peru', 'Venezuela', 'Uruguay'],
//     ['Ecuador', 'El Salvador', 'Bolivia', 'Paraguay'],
// ]

// for (let f = 0; f < allLatam.length; f++) {
//     for (let c = 0; c < allLatam[f].length; c++) {
//         console.log(allLatam[f][c]) // aquí podemos hacer que si es valor es tal hacer otras funciones
//     }
// }

// let regionsSpain = ['Andalucia', 'Murcia', 'Extremadura']

// for (let i = 0; i < regionsSpain.length; i++) {
//     console.log(regionsSpain[i])

//     if (regionsSpain[i] == 'Murcia') {
//         console.log('Aquí dicen acho')
//     }
// }

// // MÉTODOS ARRAYS

// let fruits = ['Apple', 'Orange']
// fruits.push('Mango') // añade un elemento al final del array
// console.log(fruits)

// fruits.pop() // elimina el último elemento
// console.log(fruits)

// fruits.shift() // elimina el primer elemento
// console.log(fruits)

// fruits.unshift('kiwi') //añade elmento al inicio
// fruits.unshift('watermelon')
// fruits.unshift('apple')
// console.log(fruits)

// let fruitsWithA = fruits.filter((fruit) => fruit.includes('a')) // Filter, es un métodos que nos permite filtrar a través de otr ométodo, el include(ciertos elementos, en este caso a)
// console.log(fruitsWithA)

// //concatenar dos vectores

// let fruits1 = ['Apple', 'Orange', 'Banana']
// let fruits2 = ['Mango', 'Kiwi']

// let allFruits = fruits1.concat(fruits2)
// console.log(allFruits)

// allFruits.reverse() // altero el orden del array al inverso
// console.log(allFruits)

// allFruits.sort() // ordena alfabeticamente orden ascendete
// console.log(allFruits)

// //fUNCIONES
// function gretting() {
//     console.log('Hola! Estoy en la función')
// }
// gretting()

// //función sumar

// function add(num1, num2) {
//     let result
//     result = num1 + num2
//     return result
// }

// let addition = add(5, 2)
// console.log('el resultado es: ' + addition)

// addition = add(8, 9)
// console.log('el resultado es: ' + addition)

// // EJERCICIO ARRAYS Y FUNCIONES POKEMON

// //CREAR ARRAY PARA NOMBRES DE POKEMON

// let pokemonsName = ['Charmander', 'Pikachu', 'Bulbasur', 'Squirtle']

// //Matriz para habilidades

// let habilities = [
//     [80, 75, 90], //charmander
//     [65, 55, 60], //pikachu
//     [80, 70, 65], //bulbasur
//     [85, 90, 70], //squirtle
// ]
// //función para calcular media
// function calculateHabMed(habilities) {
//     let medium = []

//     for (let i = 0; i < habilities.length; i++) {
//         let file = habilities[i]
//         let addP = file.reduce((total, hability) => total + hability, 0)
//         medium[i] = addP / file.length
//     }
//     return medium
// }
// //funcion para evaluar si entra en liga pokemon (nv 70)
// function levelCheck(pokemonsName, medium) {
//     for (let i = 0; i < medium.length; i++) {
//         if (medium[i] >= 70) {
//             console.log(
//                 'El Pokemon ' +
//                     pokemonsName[i] +
//                     ' Supera el promedio con: ' +
//                     medium[i]
//             )
//         } else {
//             console.log(
//                 'El Pokémon ' +
//                     pokemonsName[i] +
//                     ' No supera el promedio con: ' +
//                     medium[i]
//             )
//         }
//     }
// }

// let medium = calculateHabMed(habilities)
// levelCheck(pokemonsName, medium)

// //Métodos de strings:
// //lengt: Propiedad, devuelve la cantidad de caracteres
// let phrase = 'Hello World'
// let longitud = phrase.length
// console.log('La longitud es: ' + longitud)

// //Método slice: Partir de nuestro string y crear una nueva cadena sin modificar la orginal. Podemos sacar un fragmento especificando el inico y el final
// let completePhrase = 'Caminando evoluciono'
// let fragmento = completePhrase.slice(0, 9)
// console.log(fragmento)

// //Metodo split: Dividir cadena de caracteres en distintas partes. Tiene en cuenta un separador
// let superMarketString = 'banana, manzana, lechuga, tomate'
// console.log('Frase original: ' + superMarketString)
// let lista = superMarketString.split(', ')
// console.log(lista)

// //toUpperCase: pasar a mayuscula cadena de carecteres

// let minuscula = 'Hello World'
// let mayuscula = minuscula.toUpperCase()
// let minus = minuscula.toLowerCase()
// console.log(mayuscula + ' ' + minus)

// //Metodo concat: Unir dos cadenas de texto
// let concatenacion1 = 'hola soy Pepe'
// let concatenacion2 = ' y estoy aprendiendo js'
// let frasefinal = concatenacion1.concat(concatenacion2)
// console.log('El mensaje es: ' + frasefinal)

// //Metodo indexof: Podemos buscar una palabra
// let frase1 = 'Hola Mundo, continuamos con js'
// let posicion = frase1.indexOf('Pepe') // Si la palabra se encuentra en el string nos dirá su posición, si no, podemos solucionarlo con un condicional
// if (posicion >= 0) {
//     console.log('Encontré en la posición: ' + posicion)
// } else {
//     console.log('No encontré la palabra buscada')
// }

// //Metodo includes: Nos dice si esta o no la palabra o la parte del string)
// let frase2 = 'Hola Mundo, continuamos con js'
// let bandera = frase2.includes('continuamos con js')
// if (bandera == true) {
//     console.log('Encontré la palabra')
// } else {
//     console.log('No encontré la palabra buscada')
// }

// //EJERCICIO PRÁCTICO: CREAR PROGRAMA QUE, DADA UNA LISTA DE NOMBRES, UN USUARIO
// //SEA CAPAZ DE INGRESAR UN NOMBRE POR TECLADO Y EL PROGRAMA REALICE LA BUSQUEDA
// //E IDENTIFIQUE SI EL MISMO ESTÁ PRESENTE EN LA LISTA O NO. MOSTRAR EN PANTALLA SI SI, O SI NO.
// // EL PROGRAMA DEBE SER INSENSIBLE A MAYUSCULAS Y MINUSCULAS

// //lista de nombres fija
// let webUsers = [
//     'Manuel',
//     'Sofia',
//     'Estefania',
//     'Alberto',
//     'Maria',
//     'Claudia',
//     'Rodrigo',
// ]

// //usuario pueda ingresar un nombre por teclado
// let nombreBuscar = prompt('Ingresa el nombre a buscar: ')

// //buscar si está o no
// let estaONo = buscarNombre(webUsers, nombreBuscar)

// function buscarNombre(webUsers, nombreBuscar) {
//     return webUsers.includes(nombreBuscar)
// }

// //Informar en pantalla
// if (estaONo == true) {
//     alert('El nombre esta en la lista')
// } else {
//     alert('El nombre no esta en la lista')
// }
//ECMA SCRIPT MAP

let numbers = [5, 10, 15]
let doubles = numbers.map(function (num) {
    return num * 2
})
console.log(doubles) //Resultado [10, 20, 30]

//Modificar objetos de un array
let users = [
    { name: 'Pepe', surname: 'Ruiz' },
    { name: 'Mónica', surname: ' Serna' },
    { name: 'Ana', surname: 'García' },
    { name: 'Violeta', surname: 'Flowers' },
]

let reformattedArray = users.map(function (obj) {
    let rObj = {}
    rObj = obj.name + ' ' + obj.surname
    return rObj
}) // Resultado: ARRAY CON NOMBRES Y APELLIDOS. EJ.: Mónica Serna

console.log(reformattedArray)

//convertir objetos en un array de nombres
const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 35 },
]

const nombres = personas.map((persona) => persona.nombre)

console.log(nombres) // ['Juan', 'Ana', 'Pedro']*/

//UpperCase
let palabras = ['hola', 'mundo', 'javascript']
let mayusculas = palabras.map((palabra) => palabra.toUpperCase())
console.log(mayusculas) // ['HOLA', 'MUNDO', 'JAVASCRIPT']
