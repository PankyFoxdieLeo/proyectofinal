var edad=prompt("ingrese edad");

function validadedad(edad){
    
    if (edad >= 18){
        alert("puedes ingresar");
    }
    else {
        alert("no puedes ingresar a la pagina");
    }
}

validadedad(edad);


var distancia=confirm("vivis a menos de 80km de san nicolas?");

function ValidarDistancia(distancia){

    if(distancia == true){
        alert("tu envio es sin costo")
    }
    else{
        alert("tu envio tiene un costo de $800")
    }
}