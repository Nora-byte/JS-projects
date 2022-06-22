/* Agregar dias y fechas en js*/

// creamos la variable dias
const date = new Date()

// getdate, recupera el numero del dia del mes
date.getDate()

/* setdate, nos permite actualizar la fecha que tenemos guardada y
devuelve mas informacion necesaria para complementar el dia recuperado, formateando
a una unidad entendible para el usuario */
date.setDate(
    date.getDate() + 7
)

console.log(date) // 2022-06-21T12 23:21Z