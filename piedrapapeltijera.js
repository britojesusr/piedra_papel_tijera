var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";
var opcPlayer;

// Rango de valores para la pc (1, 2, 3) (piedra, papel, tijera)
var numRandom;
var min = 1;
var max = 3; 

// Funcion que toma la opcion del jugador y la coloca en modo batalla
  
    
// Funcion para traer la opcion seleccionada por el jugador

        function choicePlayer(seleccion)
            {
            choicePlayerReady(seleccion);
        }


function choicePlayerReady(seleccion) {    

    var comp = seleccion;

    var seleccionJugador = document.getElementById('seleccionJugador');
    console.log(seleccionJugador);    

    if(comp===opc1) {
        seleccionJugador.setAttribute("src", "/archivos/piedra.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "show");            
    }

    else if(comp===opc2) {
        seleccionJugador.setAttribute("src", "/archivos/papel.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "show");            
    }

    else if (comp===opc3) {
        seleccionJugador.setAttribute("src", "/archivos/tijera.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "show");
    }

    else {
        alert("Debe seleccionar una opcion de ataque");
    }
     
}



// Funcion que toma la opcion de la PC y la coloca en modo batalla

function choicePc(numRandom){
    var seleccionPc = document.getElementById('seleccionPc');
    console.log(seleccionPc);

    if (numRandom==1) {
        seleccionPc.setAttribute("src", "/archivos/piedra.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "show");
    }
    else if (numRandom==2) {
        seleccionPc.setAttribute("src", "/archivos/papel.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "show");
    }
    else if (numRandom==3) {
        seleccionPc.setAttribute("src", "/archivos/tijera.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "show");
    }
    else {
        alert("Está prohibido hacer trampa ¬¬!");
    }
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





function startBattle(){
    
    var numRandom = Math.floor(Math.random()*(max - min + 1)) + min;
    console.log(min, max);
    console.log(numRandom);    

    choicePc(numRandom); // function choicePc 
    choicePlayerReady(eleccion);
    
    console.log("El jugador ataca con : " +seleccion);
    console.log("La pc ataca con : " +numRandom);
    




    
    


}








