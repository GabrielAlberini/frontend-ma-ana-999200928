// programar -> generación de sistemas automatizados
// pensar en soluciones algoritmicas
// proceso organizado y ordenado de soluciar algo

// condicional

// situación base
// posibles resultados

const clima = "soleado"

// si llueve -> console.log("Esta lloviendo, lleva paraguas")
// si no llueve -> console.log("No esta lloviendo, sali tranqui")

// {} -> scope -> zona privada
// if (clima === "lluvioso") console.log("Esta lloviendo, lleva paraguas")

if (clima === "lluvioso") {
  console.log("Esta lloviendo, lleva paraguas")
} else {
  console.log("No esta lloviendo, sali tranqui")
}

const edad = 15
let estaAcompañado = true

if (edad > 16) {
  console.log("Podes ver la peli")
} else if (edad === 15) {
  console.log("Solo podes ver la peli acompañado de un mayor, con quien estas?")
  if (estaAcompañado) {
    console.log("Estas acompañado de un mayor, podes pasar a ver la peli")
  } else {
    console.log("No podes ver la peli, volve acompañado de un mayor de edad")
  }
} else if (edad === 14) {
  console.log("Sos muy pequeño, podes ir a la sala de juegos")
} else {
  console.log("No podes ver la peli, sos menor de edad")
}

const multas = 0
const tengoCarnet = false

if (tengoCarnet) {
  // CASO DE ÉXITO
  console.log("Puedo conducir.")
} else {
  // CASO DE NO ÉXITO
  console.log("No puedo conducir.")
}

// Si pasa lo esperado hago console.log("Puedo conducir.") SI NO console.log("No puedo conducir.")

if (tengoCarnet && multas === 0) {
  console.log("Puedes conducir estas en norma")
}

if (tengoCarnet || multas === 0) {
  console.log("Puedes conducir estas en norma")
}

const vidas = 3
const poder = 9
const pociones = 7

// Enfrentar al dragón final
// Debes contar con mas de 2 vidas, más de 4 de poder y deber tener un valor diferente a 7 posiones (el 7 es mala suerte en nuestro juego)

if (vidas > 2 && poder > 4 && pociones !== 7) {
  console.log("Puedes enfrentar al dragón final 🐉")
} else {
  console.log("No puedes enfrentar al dragón te va a hacer papilla capo anda no mas 😎")
}

// ------------------

// Operador lógico (&&, ||) 
// negacion (!)

const logueado = true

// El correcto que el usuario no está logueado? FALSE
if (!logueado) {
  // Caso de no éxito
  console.log("❌ Usuario deslogueado")
} else {
  console.log("✅ Estas logueado")
}

// Operador ternario

// condicion -> caso éxito -> caso no éxito

logueado === true ? console.log("✅ Logueado") : console.log("❌ Deslogueado")

const color = "violeta"
let grupo


// if (color === "violeta") {
//   grupo = 1
// } else {
//   grupo = 2
// }

color === "violeta" ? grupo = 1 : grupo = 2
console.log(`El grupo que te toca es el ${grupo}`)

const n = 123

// En la división de 123 en 2 resta un valor igual a 0?
n % 2 === 0 ? console.log("Es par") : console.log("Es impar")