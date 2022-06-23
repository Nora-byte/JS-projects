/* Como eliminar una propiedad en el objeto */

// creamos el objeto.
const user ={
    firstname: 'Juan',
    lastname: 'Pedro'
}

// con esta variable, se elimina propiedad dentro del objeto
delete user.lastname

console.log(user.lastname) // undefined
console.log(user) // {firstname: 'Juan'}