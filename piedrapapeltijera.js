// Rango de valores para la pc (1, 2, 3) (piedra, papel, tijera)
var numRandom;
var min = 1;
var max = 3; 
    
// Funcion para traer la opcion seleccionada por el jugador desde html

function choicePlayer(seleccion){    
   
    var seleccionJugador = document.getElementById('seleccionJugador');       

    if(seleccion===1) {
        seleccionJugador.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "piedra opcionJugador true");             
    }

    else if(seleccion===2) {
        seleccionJugador.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "papel opcionJugador true");            
    }

    else if (seleccion===3) {
        seleccionJugador.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        seleccionJugador.removeAttribute("class", "hidden");
        seleccionJugador.setAttribute("class", "tijera opcionJugador true");        
    }

    else {
        alert("Debe seleccionar una opcion de ataque");
    }
     
}

// Funcion que toma la opcion de la PC y la coloca en modo batalla

function choicePc(numRandom){
    var seleccionPc = document.getElementById('seleccionPc');

    if (numRandom==1) {
        seleccionPc.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "true");
    }
    else if (numRandom==2) {
        seleccionPc.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "true");
    }
    else if (numRandom==3) {
        seleccionPc.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        seleccionPc.removeAttribute("class", "hidden");
        seleccionPc.setAttribute("class", "true");
    }
    else {
        alert("Se ha producido un error, recargue el juego");
    }
}


//  Funcion  piedra papel o tijera batalla entre jugador y pc  

function piedraPapelTijera(numRandom, seleccionJugador) {  
 
    var opcionUsuario = parametro1;
    var opcionPC      = parametro2;

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


//Funcion iniciar batalla - Se activa con el Boton battle del HTML y llama a piedraPapelTijera();

function startBattle(){

     if ( document.getElementById('seleccionJugador').classList.contains(true) ) {

        var numRandom = Math.floor(Math.random()*(max - min + 1)) + min;
        console.log(min, max);
        console.log(numRandom);  
    
        choicePc(numRandom);       
        var opcPlayer = document.getElementById('seleccionJugador').classList.item(0);
        
        console.log("Funciona soy " + opcPlayer);    
        console.log("La pc ataca con : " +numRandom);   
    
        piedraPapelTijera(numRandom, opcPlayer);

     } 
    
     else {
        alert("Debe seleccionar una opcion de ataque");
     }
    

        


}








