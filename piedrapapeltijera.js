var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";
var opcPlayer;

function choicePlayer(seleccion){
    var seleccion = seleccion;
    console.log(seleccion);
    var seleccionJugador = document.getElementById('seleccionJugador');

    if(seleccion==opc1) {
        seleccionJugador.setAttribute("src", "/archivos/piedra.png");
        
    }
    else if(seleccion==opc2) {
        seleccionJugador.setAttribute("src", "/archivos/papel.png");
        
    }
    else {
        seleccionJugador.setAttribute("src", "/archivos/tijera.png");
        
    }
    
}
    


function startBattle() {
    

}





/*

function piedraPapelTijera() {
 
    if (opcionUsuario == opcionPC) {

        console.log("La opcion de ambos es: "+ opcionPC + " se ha producido un empate");
}

    else if (opcionUsuario=="papel" && opcionPC=="piedra") {

        console.log("Ha ganado el usario");
}

    else if (opcionUsuario=="papel" && opcionPC=="tijera") {

        console.log("Ha ganado la PC");
}

    else if (opcionUsuario=="piedra" && opcionPC=="tijera") {

        console.log("Ha ganado el usuario");
}

 else if (opcionUsuario=="piedra" && opcionPC=="papel") {

        console.log("Ha ganado la pc");
}


    else if (opcionUsuario=="tijera" && opcionPC=="papel") {

        console.log("Ha ganado el usuario");
}
   

    else if (opcionUsuario=="tijera" && opcionPC=="piedra") {

        console.log("Ha ganado la pc");
}

    else {

    console.log("Resultado desconocido, vuelva a elegir");

}


}

piedraPapelTijera();
*/