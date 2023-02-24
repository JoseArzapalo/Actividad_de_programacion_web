function obtenerDatos(){
    var nombre = document.getElementById ("nombre").value;
    var edad   = document.getElementById ("edad").value;

    if (edad < 18){
        alert (nombre + " eres menor de edad ten cuia");
    } else if (edad >= 18 && edad  <= 29){
        alert (nombre + " eres un joven en la plenitut de la vida");
    } else if (edad >= 30 && edad <= 59) {
        alert ("tuviste una buena vida " + nombre);
    } else if (edad >= 60){
        alert ("eres un adulto que paso su vida util sr. " + nombre);
    }

    document.registro.nombreObtenido.value = nombre;
    document.registro.edadObtenida.value = edad;
}