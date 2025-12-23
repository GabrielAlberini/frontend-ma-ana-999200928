// dato complejo / compuesto
// es un tipo de datos MUTABLES
// conjunto de datos

// una lista ordenada de elementos
// en colores hay 3 elementos
// en la primer posición se encuentra el amarillo
// en la segunda posición se encuentra el azul
// en la tercera posición se encuentra el rojo
const colores = ["amarillo", "azul", "rojo"]

console.log(colores)

// en js la posición es 0

// longitud de un array
// length -> longitud -> cantidad de elementos
console.log(colores.length)

const materiasDeudadas = ["lengua"]

materiasDeudadas.length > 4 ? console.log("Repetis") : console.log("Puedes rendir las deudadas")

materiasDeudadas.push("ciencias naturales")

console.log(materiasDeudadas)

// push -> agrega un elemento al final del array
// unshift -> agrega un elemento al principio del array

const carrito = []

carrito.push("Computadora")
carrito.unshift("Celular")
carrito.push("Cepillo")
carrito.unshift("Desodorante")

// pop -> borra SIEMPRE el último elemento del array
carrito.pop()

// shift -> borra SIEMPRE el primer elemento del array
carrito.shift()

carrito.push("Broche")

// splice -> elemina un elemento X del array
carrito.splice(1, 1)
console.log(carrito)

if (carrito.length === 0) {
  console.log("Ve a la tienda a comprar 🤑🤑🤑")
} else if (carrito.length === 1) {
  console.log("El carrito tiene 1 producto.")
} else {
  console.log(`El carrito tiene ${carrito.length} productos.`)
}

// ------------
// Como leer elementos de un array
const alumnos = ["Antonella", "Matías", "Clara", "Anabella", "Pepe", "lolo"]

const alumno3 = alumnos[2]

console.log(alumno3)

// accediendo a un elemento por posicion
// const ultimoAlumno = alumnos[alumnos.length - 1]
const ultimoAlumno = alumnos.at(-1)
console.log(ultimoAlumno)

// const colores = ["amarillo", "azul", "rojo"]
// Es correcto que colores NO incluye a rosado? TRUE
if (!colores.includes("rosado")) {
  console.log("No incluye a rosado")
}