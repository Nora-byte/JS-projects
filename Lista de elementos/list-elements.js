/* Como mostrar bien una lista de elementos,
si se añade elementos nuevos directamente a la lista, 
lo que se hace es refrescar el DOM cada vez que se 
agrega un nuevo elemento con el siguiente codigo*/

const users = ['Jack', 'Wendy', 'Tonny']

// Se crea el fragmento 
const usersFragment = document.createDocumentFragment()

users.forEach(user => {
    const userElement = document.createElement('LI')
    userElement.innerText = user

    // Se rellena el fragmento
    usersFragment.appendChild(userElement)
})

// Usamos el fragmento creado
document.getElementsById('list').appendChild(usersFragment)