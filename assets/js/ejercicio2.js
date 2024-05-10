
// Escríbe aquí tu código
// definir variables
var buttons = document.querySelectorAll('button');
var resultBox = document.getElementById('caja')

// recorrer la colección de Nodos

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        // se captura elemento html del boton
        var elementoBoton = event.target

        // se asigna el color de fondo del boton capturado a la caja del resultado
        caja.style.backgroundColor = elementoBoton.style.backgroundColor
    })
})

