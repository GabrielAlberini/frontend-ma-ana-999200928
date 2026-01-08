const $nameInput = document.querySelector("#name")
const $emailInput = document.getElementById("email")
const $contactId = document.getElementById("contactId")
const $form = document.querySelector("form")
const $btnCancel = document.getElementById("btn-cancel")
const $contactsList = document.querySelector("tbody")
const $btnClearContacts = document.getElementById("clearContacts")
const $welcomeContainer = document.querySelector(".welcome")
const $btnStart = document.getElementById("btn-start")

let contacts = []
let contactsToLocalStorage = JSON.parse(localStorage.getItem("contacts"))

if (contactsToLocalStorage !== null) {
  contacts = contactsToLocalStorage
}

const showWelcome = () => {
  const haveContacts = contacts.length === 0
  $welcomeContainer.style.display = haveContacts ? "flex" : "none"
}

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
        <button class="btn-update" onclick="updateContact(${i})">Actualizar</button>
        <button class="btn-delete" onclick="deleteContact(${i})">Borrar</button>
      </td>
    `
    $contactsList.appendChild(row)
  }

  localStorage.setItem("contacts", JSON.stringify(contacts))
}

const sendForm = (event) => {
  event.preventDefault()

  const name = $nameInput.value
  const email = $emailInput.value

  const dataContact = {
    name: name,
    email: email
  }

  if (name === "" || email === "") {
    alert("🚧 El contacto debe tener nombre y email 🚧")
    return
  }

  const foundContact = contacts.find(contact => contact.email === email)

  if (foundContact) {
    alert("🚧 El usuario ya existe, intentalo con un email nuevo 🚧")
    return
  }

  if (name.length < 3) {
    alert("🚧 El nombre del usuario debe tener al menos 3 caracteres 🚧")
    return
  }

  if ($contactId.value === "") {
    contacts.push(dataContact)
    renderContacts()
  } else {
    contacts[$contactId.value] = dataContact
    $contactId.value = ""
  }

  $form.reset()
  renderContacts()
}

const deleteContact = (index) => {
  const valid = confirm("¿Está seguro que quieres borrar el contacto?")
  console.log(valid, "<- confirmación del usuario")
  if (valid) {
    contacts.splice(index, 1)
    renderContacts()
  }
}

const updateContact = (index) => {
  $nameInput.value = contacts[index].name
  $emailInput.value = contacts[index].email
  $contactId.value = index
  console.log("Actualizando contacto.")
}

const cancelSendForm = () => {
  $form.reset()
}

const clearContacts = () => {
  const valid = confirm("¿Está seguro que quieres borrar todos los contactos 🙄?")
  if (valid) {
    console.log("dentro de la función")
    localStorage.removeItem("contacts")
    contacts = []
    renderContacts()
  }
}

const hideWelcome = () => {
  $welcomeContainer.style.display = "none"
}

$form.addEventListener("submit", sendForm)
$btnCancel.addEventListener("click", cancelSendForm)
$btnClearContacts.addEventListener("click", clearContacts)
$btnStart.addEventListener("click", hideWelcome)

showWelcome()
renderContacts()