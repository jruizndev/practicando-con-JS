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

let miVector = ['Jose', 'Francisco', 'Alfonso', 'Antonio', 'Jorge']

//consulto lo que hay en la posición 2
console.log(miVector[2])

let miMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
//como accedo a la posición de 5. Primero especifico la fila y luego dentro del array la posición de 5
console.log(miMatriz[1][1])

//crear arrays vacios para incluir datos posteriormente

//ejemplo vector
let listname = new Array(3)
listname[0] = 'Jose Alfonso'
listname[1] = 'Ruiz Santa Quiteria'
listname[2] = 'Nieto'
console.log(listname)

//ejemplo matriz

let supermarketlist = new Array(3)
for (let i = 0; i < 3; i++) {
    supermarketlist[i] = new Array(3)
}
console.log(supermarketlist)

//crear una matriz a partir de tres vectores

let city1 = ['Madrid', 'Comunidad de Madrid', 'España']
let city2 = ['Barcelona', 'Cataluña', 'España']
let city3 = ['Málaga', 'Andalucía', 'España']

let bigcities = [city1, city2, city3]
console.log(bigcities)

//Recorrer un array con for (vectores)

let latamCountries = ['Argentina', 'Brasil', 'México', 'Colombia', 'Perú']
for (let i = 0; i < latamCountries.length; i++) {
    console.log(latamCountries[i])
    //podemos añadir una descripción entre medias del reccorrido // también podeos hacer otras cosas
    if (latamCountries[i] == 'Argentina') {
        console.log('Es el país del mate')
    }
}

//Recorrer matrices con for (2 veces)

let allLatam = [
    ['Argentina', 'Mexico', 'Colombia', 'Brasil'],
    ['Chile', 'Peru', 'Venezuela', 'Uruguay'],
    ['Ecuador', 'El Salvador', 'Bolivia', 'Paraguay'],
]

for (let f = 0; f < allLatam.length; f++) {
    for (let c = 0; c < allLatam[f].length; c++) {
        console.log(allLatam[f][c]) // aquí podemos hacer que si es valor es tal hacer otras funciones
    }
}

let regionsSpain = ['Andalucia', 'Murcia', 'Extremadura']

for (let i = 0; i < regionsSpain.length; i++) {
    console.log(regionsSpain[i])

    if (regionsSpain[i] == 'Murcia') {
        console.log('Aquí dicen acho')
    }
}

// MÉTODOS ARRAYS

let fruits = ['Apple', 'Orange']
fruits.push('Mango') // añade un elemento al final del array
console.log(fruits)

fruits.pop() // elimina el último elemento
console.log(fruits)

fruits.shift() // elimina el primer elemento
console.log(fruits)

fruits.unshift('kiwi') //añade elmento al inicio
fruits.unshift('watermelon')
fruits.unshift('apple')
console.log(fruits)

let fruitsWithA = fruits.filter((fruit) => fruit.includes('a')) // Filter, es un métodos que nos permite filtrar a través de otr ométodo, el include(ciertos elementos, en este caso a)
console.log(fruitsWithA)

//concatenar dos vectores

let fruits1 = ['Apple', 'Orange', 'Banana']
let fruits2 = ['Mango', 'Kiwi']

let allFruits = fruits1.concat(fruits2)
console.log(allFruits)

allFruits.reverse() // altero el orden del array al inverso
console.log(allFruits)

allFruits.sort() // ordena alfabeticamente orden ascendete
console.log(allFruits)

//fUNCIONES
function gretting() {
    console.log('Hola! Estoy en la función')
}
gretting()

//función sumar

function add(num1, num2) {
    let result
    result = num1 + num2
    return result
}

let addition = add(5, 2)
console.log('el resultado es: ' + addition)

addition = add(8, 9)
console.log('el resultado es: ' + addition)
