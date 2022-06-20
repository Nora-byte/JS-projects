/* Funciones constructuras, con ellas se puede crear
uno o varios objetos con las mismas funciones constructoras, 
los cuales:

-> Un cambio en los objetos no afectas a otros objetos
-> el constructor puede recibir parametros
*/

// function contructor 
function dog(){
    this.name = 'Dante'
    this.color = 'gray'

    this.sleeps = function(){
        return 'El perro esta jugando ahora..'
    }
}

// un objeto creado desde la funcion constructora
const myDog = new dog()
console.log(myDog)
// resultado del console.log -> Dog { name: 'Dante', color: 'gray', sleeps: [function]}