// referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $listChat = document.querySelector(".chats ul")

const chatsData = [
  {
    name: "Danyel Alejandro",
    lastMessage: "Vamos a tomar una birra",
    avatar: "https://placehold.co/100x100"
  },
  {
    name: "Anabella Vicentin",
    lastMessage: "Tengo que ir al super",
    avatar: "https://placehold.co/100x100"
  },
  {
    name: "Gustavo De Paolo",
    lastMessage: "Sale un counter?",
    avatar: "https://placehold.co/100x100"
  }
]

const renderChats = (list) => {
  $listChat.innerHTML = ""

  list.forEach((chat) => {
    $listChat.innerHTML += `
    <li class="user-chat">
      <img src="${chat.avatar}" alt="foto de perfil de maría lópez">
      <div>
        <h3>${chat.name}</h3>
        <p>${chat.lastMessage}</p>
      </div>
    </li>
    `
  })
}

const searchChats = () => {
  const $chats = document.querySelectorAll(".user-chat")
  const nameSearch = $search.value.toLowerCase()

  for (let i = 0; i < $chats.length; i++) {
    const $chat = $chats[i]
    const $titleTag = $chat.querySelector("h3")
    const name = $titleTag.textContent.toLowerCase()

    // Concepto: El método includes() en JavaScript se usa para verificar si un Array o un String contiene un elemento o subcadena específica, devolviendo true si lo encuentra y false si no lo encuentra; es una forma moderna y legible de buscar valores sin necesidad de conocer su índice, distinguiendo mayúsculas y minúsculas.
    if (name.includes(nameSearch)) {
      $chat.style.display = "flex"
    } else {
      $chat.style.display = "none"
    }
  }
}

$search.addEventListener("input", searchChats)
renderChats(chatsData)