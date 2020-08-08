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

    else if (seleccion===2) {
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

function piedraPapelTijera(opcPlayer, numRandom) {

    var textResul = document.getElementById('textResult');
    
    if (opcPlayer === numRandom) {

        textResul.textContent='Empate =)';
        textResul.style.color='#06ffa1';
    }

    else if(opcPlayer==1 && numRandom==2) {

        textResul.textContent='paper covers rock';
        textResul.style.color='#f64646';        
        
    }

    else if(opcPlayer==1 && numRandom==3) {

        textResul.textContent='rock crushes scissors';
        textResul.style.color='#cf1b1b';        
        
    }
    else if(opcPlayer==2 && numRandom==1) {

        textResul.textContent='paper covers rock';
        textResul.style.color='#cf1b1b';        
        
    }
    else if(opcPlayer==2 && numRandom==3) {

        textResul.textContent='scissors cuts paper';
        textResul.style.color='#cf1b1b';        
        
    }
    else if(opcPlayer==3 && numRandom==1) {

        textResul.textContent='rock crushes scissors';
        textResul.style.color='#cf1b1b';    
    }
    else if(opcPlayer==3 && numRandom==2) {

        textResul.textContent='scissors cuts paper';
        textResul.style.color='#cf1b1b';        
    } 


}

//Funcion iniciar batalla - Se activa con el Boton battle del HTML y llama a piedraPapelTijera();

function startBattle(){

    var seleccionJugador = document.getElementById('seleccionJugador');

    if ( seleccionJugador.classList.contains(true)){

        var numRandom = Math.floor(Math.random()*(max - min + 1)) + min;      
        choicePc(numRandom);

        var x = seleccionJugador.classList.item(0);
            
        console.log(x);

        if ( x == "piedra") {
            var opcPlayer = 1;
            piedraPapelTijera(opcPlayer, numRandom);
        }

        else if (x == "papel") {
            var opcPlayer = 2;            
            piedraPapelTijera(opcPlayer, numRandom);
        }
        
        else {
            var opcPlayer = 3;            
            piedraPapelTijera(opcPlayer, numRandom);
        }                      

    } 
    
    else {
        alert("Debe seleccionar una opcion de ataque");
    }

}


function resetBattle(){
    var seleccionJugador = document.getElementById('seleccionJugador');
    var seleccionPc = document.getElementById('seleccionPc');
    var textResul = document.getElementById('textResult');
    
    seleccionJugador.removeAttribute("src");
    seleccionJugador.setAttribute("class", "hidden");
    seleccionPc.removeAttribute("src");
    seleccionPc.setAttribute("class", "hidden");
    textResul.textContent='';
    
    empate
}







