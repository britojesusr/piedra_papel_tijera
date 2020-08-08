/* Valores de referencia
    Rock = 1 
    Paper = 2
    Scissors = 3            */

// Rango de valores para la pc (1, 2, 3) (piedra, papel, tijera)
var numRandom;
var min = 1;
var max = 3; 

// contadores para el puntaje
    var contPlayer;
    var contPc;

    
// Funcion para traer la opcion seleccionada por el jugador desde html

function choicePlayer(selection){    
   
    var selectionPlayer = document.getElementById('selectionPlayer');     

    if(selection===1) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.setAttribute("class", "piedra optionPlayer true");             
    }

    else if (selection===2) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.setAttribute("class", "papel optionPlayer true");        
    }
    else if (selection===3) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.setAttribute("class", "tijera optionPlayer true");        
    }    

    else {
        alert("Debe seleccionar una opcion de ataque");
    }
     
}

// Funcion que toma la opcion de la PC y la coloca en modo batalla

function choicePc(numRandom){
    var selectionPc = document.getElementById('selectionPc');

    if (numRandom==1) {
        selectionPc.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.setAttribute("class", "true");
    }
    else if (numRandom==2) {
        selectionPc.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.setAttribute("class", "true");
    }
    else if (numRandom==3) {
        selectionPc.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.setAttribute("class", "true");
    }
    else {
        alert("Se ha producido un error, recargue el juego");
    }
}


//  Funcion  piedra papel o tijera batalla entre jugador y pc  

function piedraPapelTijera(opcPlayer, numRandom) {

    var textResul = document.getElementById('textResult');
    var scorePlayer = document.getElementById('scorePlayer');
    var scorePc = document.getElementById('scorePc');
    
    if (opcPlayer === numRandom) {

        textResul.textContent='tied';
        textResul.style.color='#06ffa1';
    }

    else if(opcPlayer==1 && numRandom==2) {

        textResul.textContent='paper covers rock';
        textResul.style.color='#f64646';
    }

    else if(opcPlayer==1 && numRandom==3) {

        textResul.textContent='rock crushes scissors';
        textResul.style.color='#f64646';
        contPlayer = + 1; 
        
    }
    else if(opcPlayer==2 && numRandom==1) {

        textResul.textContent='paper covers rock';
        textResul.style.color='#f64646';        
        
    }
    else if(opcPlayer==2 && numRandom==3) {

        textResul.textContent='scissors cuts paper';
        textResul.style.color='#f64646';        
        
    }
    else if(opcPlayer==3 && numRandom==1) {

        textResul.textContent='rock crushes scissors';
        textResul.style.color='#f64646';    
    }
    else if(opcPlayer==3 && numRandom==2) {

        textResul.textContent='scissors cuts paper';
        textResul.style.color='#f64646';        
    } 


}

//Funcion iniciar batalla - Se activa con el Boton battle del HTML y llama a piedraPapelTijera();

function startBattle(){

    var selectionPlayer = document.getElementById('selectionPlayer');

    if ( selectionPlayer.classList.contains(true)){

        var numRandom = Math.floor(Math.random()*(max - min + 1)) + min;      
        choicePc(numRandom);

        var x = selectionPlayer.classList.item(0);
            
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
    var selectionPlayer = document.getElementById('selectionPlayer');
    var selectionPc = document.getElementById('selectionPc');
    var textResul = document.getElementById('textResult');
    
    selectionPlayer.removeAttribute("src");
    selectionPlayer.setAttribute("class", "hidden");
    selectionPc.removeAttribute("src");
    selectionPc.setAttribute("class", "hidden");
    textResul.textContent='';
    
}







