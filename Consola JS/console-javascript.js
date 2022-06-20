/* Todo tipo de mensajes por consola en JS son importanes al depurar o construir un sitio web,
y es eso que se comparte las formas del uso correcto de la consola.
*/ 

console.log('soy un texto de consola js') // Mensaje en consola
console.info('este es un texto informativo') // Mensaje informativo en consola

console.warn('soy una alerta') // Mensajes de alerta en consola
console.error('este es un mensaje de error :( ') // Mensajes de alerta ERROR

console.count() // Inicia un conteo por aparacion
console.clear() // Limpia la consola

console.time() // Iniciar un contador
console.timeLog() // Muestra el contador
console.timeEnd() // Termina el contador

// Tambien la consola se puede imprimir un objeto

let persona = {
    edad: 27,
    nombre: 'juan',
    apellido: 'marin'
}

console.table(persona) // Imprime toda la informacion que pusee el objeto persona

