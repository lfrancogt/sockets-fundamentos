var socket = io();

// ==================================
// Escuchando
// ==================================

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servicdor:', mensaje);
})

// ==================================
// Envio de información
// ==================================

socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});