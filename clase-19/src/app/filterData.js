// referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $listChat = document.querySelector(".chats ul")

const chatsData = [
  {
    name: "Danyel Alejandro", // danyel alejandro
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

  if (list.length === 0) {
    $listChat.innerHTML = "<li class='empty'>No hay chats para mostrar</li>"
  }

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
  const nameSearch = $search.value.toLowerCase()
  const filteredChats = chatsData.filter((chat) => chat.name.toLowerCase().includes(nameSearch))
  renderChats(filteredChats)
}

$search.addEventListener("input", searchChats)
renderChats(chatsData)