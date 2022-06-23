/* Notificaciones, con esta linea de comando se puede notificar al usuario
de un nuevo mensaje por JS */

Notification.requestPermission(Permissions => {
    if(Permissions === "granted"){
        new Notification("mensaje que sale para el usuario")
    }
})

// el requestPremission pregunta al usuario si quiere reciibir notificaciones
// new Notification() crea la notificacion