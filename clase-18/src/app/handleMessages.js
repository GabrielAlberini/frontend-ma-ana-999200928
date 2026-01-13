/*  <div class="message me">
  <p class="content">Si, perfecto. ¿A las 18 te viene bien?</p>
  <p class="time">14:13</p>
</div> */
const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("formMessage")

const messages = [
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
    text: "Si, perfecto. ¿A las 18 te iene bien?",
    hour: "14:15",
    me: true
  }
]

const renderMessages = (list) => {
  $listMessages.innerHTML = ""

  list.forEach((message) => {
    $listMessages.innerHTML += `
    <div class="message ${message.me ? 'me' : ""}">
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
    console.log(newMessage)
  }
}

// $formMessage.addEventListener("submit", sendMessage)
$message.addEventListener("keydown", (e) => {
  sendMessage(e)
})

renderMessages(messages)