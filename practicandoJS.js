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

//Recorrer un array con for

let latamCountries = ['Argentina', 'Brasil', 'México', 'Colombia', 'Perú']
for (let i = 0; i < latamCountries.length; i++) {
    console.log(latamCountries[i])
    //podemos añadir una descripción entre medias del reccorrido
    if (latamCountries[i] == 'Argentina') {
        console.log('Es el país del mate')
    }
}
