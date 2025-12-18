// Operadores
// Procesan datos

// Operadores aritmeticos
const n1 = 10
const n2 = 15

const suma = n1 + n2

console.log(suma)

// + suma
// - resta
// * multiplicación
// / división
// ** potencia

const n3 = 3
const n4 = 3

console.log(n3 ** n4)

// % resto
console.log(9 % 3)

// Operadores asignación
let color = "rojo"
console.log(color)

let edad = 30

edad += 3

console.log(edad)

edad -= 10

console.log(edad)

// Operadores de comparación
// TODOS retornan un boolean

let pass = "pepe123"
let passDb = "pepe124"

// ¿Es igual?
console.log(pass === passDb)

// ¿Es diferente?
console.log(pass !== passDb)

const edadPropia = 31
const edadPrimo = 31

console.log(edadPropia > edadPrimo)

console.log(edadPropia >= edadPrimo)

const edadCliente = 18
console.log("Puedes pasar?", edadCliente >= 18)

const edadNiño = 12

console.log("Puede pasar al juego de niño", edadNiño <= 12)

// Operadores lógicos
// && AND
// || OR
// ! NOT

// Dejare pasar a la fiesta solo a los mayores de 25 o a aquellos que tengan un permiso

let persona = 22
let permiso = true

const resultado = persona >= 25 || permiso === true
console.log(resultado)

let multas = 1
let carnet = false
let emergencia = true

// Dejare pasar a los que no deban multas y tengan permiso

const dejarPasar = (multas >= 0 && multas <= 5 && carnet) || emergencia

console.log(dejarPasar)

// --------------------------------------------------
const numero1 = 4
const numero2 = 10

console.log(numero1 + numero2)

const palabra = "Hola"

console.log(numero1 + palabra)

// Concatenación
// unión de string
const nombre = "Gabriel"
const apellido = "Alberini"

console.log(nombre + " " + apellido)

// template string
// `` -> alt + 96

// interpolación
const saludo = `Hola, mi nombre es ${nombre.toUpperCase()} ${apellido} y tengo ${30 + 1}`
console.log(saludo)

// Crear un programa que automaticamente calcule el area de un circulo

const PI = Math.PI
const radio = 10

const area = PI * radio ** 2
console.log(area)

// Total con impuestos
// Crear variables para:
// - Precio del producto
// - Cantidad
// - IVA del 21%
// Calcular el total final con IVA incluido y mostrarlo por consola.

const producto = 1000
const cantidad = 2
const iva = 0.21

const subTotal = producto * cantidad
const total = subTotal + (subTotal * iva)
console.log(total)

// Averiguar el promedio de mis notas

const lengua = 9
const matematica = 7
const ciencia = 4
const educacionFisica = 10

const promedio = (lengua + matematica + ciencia + educacionFisica) / 4

console.log("Promedio:", promedio)

