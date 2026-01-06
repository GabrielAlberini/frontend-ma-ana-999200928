// Detectar que voy a necesitar y guardarlos en variables
const $nameInput = document.querySelector("#name")
const $emailInput = document.getElementById("email")
const $form = document.querySelector("form")
const $contactsList = document.querySelector("tbody")

let contacts
// parsear -> convertir un string (json) a un array de js
let contactsToLocalStorage = JSON.parse(localStorage.getItem("contacts"))

if (contactsToLocalStorage !== null) {
  contacts = contactsToLocalStorage
} else {
  contacts = []
}

// renderizar -> representar visualmente la data
const renderContacts = () => {
  $contactsList.innerHTML = ""

  for (let i = 0; i < contacts.length; i++) {
    // 1 - crear en js una fila de tabla
    const row = document.createElement("tr")
    // 2 - añadirle contenido html
    row.innerHTML = `
      <td>${contacts[i].name}</td>
      <td>${contacts[i].email}</td>
      <td>
        <button>Actualizar</button>
        <button>Borrar</button>
      </td>
    `
    // 3 - agregar la fila a la tabla
    $contactsList.appendChild(row)
  }
}

// Declaración (pc aprendé a enviar un form)
const sendForm = (event) => {
  event.preventDefault()
  console.log("El valor de nombre es:", $nameInput.value)
  console.log("El valor de email es:", $emailInput.value)

  // Clave, valor
  const newContact = {
    name: $nameInput.value,
    email: $emailInput.value
  }

  contacts.push(newContact)

  // pc guarda en tu memoria mi lista de contactos actualizada
  // setter -> función que actaliza
  const contactsToJson = JSON.stringify(contacts)
  localStorage.setItem("contacts", contactsToJson)

  console.log(contacts, "<- lista de contactos")
  $form.reset()
  renderContacts()
}

// Eventos
// TODO lo que hace el usuario en el navegador
// Decidir que es lo que sucede cuando ocurre un evento

// Evento submit
// "escuchar el evento": "cuando esto suceda, haré tal cosa"
// callback -> función que se ejecuta despues de pasa algo
$form.addEventListener("submit", sendForm)

renderContacts()