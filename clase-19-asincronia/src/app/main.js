// console.log("Preparar comida cliente 3 -> 30 segundos")

// setTimeout(() => {
//   console.log("Preparar comida cliente 1 -> 30 minutos")
// }, 5000)

// console.log("Preparar comida cliente 2 -> 10 minutos")

// asincronia se utiliza para consumir recursos externos
// realizar pago en mp
// consumir api

// asynchronous
const $spells = document.getElementById("spells")

const fetchingData = async () => {
  try {
    const response = await fetch("https://poetrydb.org/author")

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      data.authors.forEach((author) => {
        $authors.innerHTML += `<h3>${author}</h3>`
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const fetchingSpellsData = async () => {
  try {
    const response = await fetch("https://wizard-world-api.herokuapp.com/spells")
    const data = await response.json()
    console.log(data)
    data.forEach((spell) => {
      $spells.innerHTML += `
        <div>
          <h4>${spell.name}</h4>
          <p>Effect: ${spell.effect}</p>
          <p>${spell.creator ? `Creador: ${spell.creator}` : ""}</p>
        </div>
      `
    })
  } catch (error) {
    console.log(error)
  }
}

fetchingSpellsData()