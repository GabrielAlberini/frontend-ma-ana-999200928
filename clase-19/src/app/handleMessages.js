const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("formMessage")

let messages = [
  {
    id: 1,
    text: "¡Hola! ¿Querés venir por un café?",
    hour: "14:12",
    me: false
  },
  {
    id: 2,
    text: "Si, perfecto. ¿A las 18 te viene bien?",
    hour: "14:13",
    me: true
  },
  {
    id: 3,
    text: "Dale dale, en la plaza entonces 😋",
    hour: "14:14",
    me: false
  },
  {
    id: 4,
    text: "Si, perfecto. ¿A las 18 te viene bien?",
    hour: "14:15",
    me: true,
  }
]

const loadChats = () => {
  const data = JSON.parse(localStorage.getItem("messages"))
  if (data === null) {
    return messages
  }
  return data
}

const saveChats = (listOfMessages) => {
  localStorage.setItem("messages", JSON.stringify(listOfMessages))
  console.log("✅ Mensajes guardados")
}

const renderMessages = (listOfMessages) => {
  $listMessages.innerHTML = ""

  // bucles
  // for () {}
  // while(){}
  // filter()
  // forEach()

  // listOfMessages.forEach((message) => {
  //   let className

  //   if (message.me) {
  //     className = "me"
  //   } else {
  //     className = ""
  //   }

  //   $listMessages.innerHTML += `
  //   <div class="message ${className}">
  //     <p class="content">${message.text}</p>
  //     <p class="time">${message.hour}</p>
  //   </div>
  // `
  // })

  listOfMessages.forEach((message) => {
    $listMessages.innerHTML += `
    <div class="message ${message.me ? 'me' : ''}">
      <p class="content">${message.text}</p>
      <p class="time">${message.hour}</p>
    </div>
  `
  })
}

const sendMessage = (event) => {
  const now = new Date()

  if (event.key === "Enter") {
    const newMessage = {
      text: $message.value,
      me: true,
      hour: now.getHours() + ":" + now.getMinutes()
    }

    // modificando el array original
    // messages.push(newMessage)

    // spread operator
    const messagesInLs = loadChats()
    messages = [...messagesInLs, newMessage]
    saveChats(messages)
    renderMessages(messages)
    $formMessage.reset()
  }
}

// $formMessage.addEventListener("submit", sendMessage)
$message.addEventListener("keydown", (e) => {
  sendMessage(e)
})

const initialMessages = loadChats()
renderMessages(initialMessages)


