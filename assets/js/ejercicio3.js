// variables
var resultado = document.querySelector('.resultado');
var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');
var btnSumar = document.getElementById('btn-sumar');
var btnRestar = document.getElementById('btn-restar');

// funcion para limpiar resultado
function limpiarResultado(){
    resultado.innerHTML = '';
}
// función para insertar el resultado en el DOM
function mostrarResultado(result){
    // si es que el resultado es menor a 0, se muestra resultado 0
    if(result<0){
        result = 0
    }
    resultado.innerHTML = result
}

// lógica para el botón sumar
btnSumar.addEventListener('click', function(){
    limpiarResultado();
    // validar que lo ingresado sean numeros
    if(isNaN(valor1.value) || isNaN(valor2.value)){
        alert('Debes ingresar solo valores numéricos')
    } else {
        var resultado = Number(valor1.value) + Number(valor2.value)
        mostrarResultado(resultado)
    }
})

// lógica para el botón restar
btnRestar.addEventListener('click', function(){
    limpiarResultado();
    // validar que lo ingresado sean numeros
    if(isNaN(valor1.value) || isNaN(valor2.value)){
        alert('Debes ingresar solo valores numéricos')
    } else {
        var resultado = Number(valor1.value) - Number(valor2.value)
        mostrarResultado(resultado)
    }
})
