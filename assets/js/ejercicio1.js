
// 1. VALIDACION DEL FORMULARIO
// variables
var contactForm = document.getElementById('formulario');
var nameForm = document.getElementById("nombre");
var subjectForm = document.getElementById("asunto");
var messageForm = document.getElementById("mensaje");

var resultMessage = document.querySelector(".resultado");

var nameError = document.querySelector(".errorNombre")
var subjectError = document.querySelector(".errorAsunto")
var messageError = document.querySelector(".errorMensaje")

// 1.1 funcion para validar los inputs con una expresion regular
function validation(name, subject, message){
    var expression = /[a-zA-Z]\w+/
    var validationFlag = true;
    if(name == "" || !expression.test(name)){
        nameError.innerHTML = "El nombre es necesario y no debe contener números"
        validationFlag = false;
    }
    if(subject == "" || !expression.test(subject)){
        subjectError.innerHTML = "El asunto es necesario y no debe contener números"
        validationFlag = false;
    }
    if(message == "" || !expression.test(message)){
        messageError.innerHTML = "El mensaje es necesario y no debe contener números"
        validationFlag = false;
    }
    return validationFlag;
}
// 1.2 función para limpiar mensajes (error y exito)
function clearMessages(){
    resultMessage.innerHTML = "";
    nameError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";
}

// 1.3 función para limpiar el formulario
contactForm.reset();

// 1.4 función para mostrar mensaje exitoso
function success(){
    resultMessage.innerHTML = "Mensaje enviado exitosamente."
}
// 1.5 event listener para evento Submit (cuando usuario haga click en 'Enviar mensaje' se desencadenará este evento y la lógica que hay dentro)
contactForm.addEventListener("submit", function(event){
    event.preventDefault();

    // limpiar mensajes
    clearMessages()

    // se maneja el resultado de la validación
    if(validation(nameForm.value, subjectForm.value, messageForm.value)){
        // Si validacion es correcta, ejecutamos la función de exito
        success();
        contactForm.reset();
    }
})
