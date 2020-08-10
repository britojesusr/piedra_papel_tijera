/*Valores de referencia Rock =1; Paper = 2; Scissors = 3 */

// Rango de valores para la pc (1, 2, 3) (piedra, papel, tijera)

const min = 1;
const max = 3; 
// contadores para el puntaje

    
// Toma la seleccion del jugador y ejecuta la funcion aleatoria para la seleccion de PC

function choicePlayer(selection){    
   
    const selectionPlayer = document.getElementById('selectionPlayer');     

    if(selection===1) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.classList.add("piedra", "optionPlayer", "true");
        startBattle();
    }

    else if (selection===2) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.classList.add("papel", "optionPlayer", "true");
        startBattle();   
    }

    else if (selection===3) {
        selectionPlayer.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        selectionPlayer.removeAttribute("class", "hidden");
        selectionPlayer.classList.add("tijera", "optionPlayer", "true");
        startBattle();     
    }    

    else {
        alert("Debe seleccionar una opcion de ataque");
    }
     
}

// Funcion que toma la opcion de la PC y la coloca en modo batalla

function choicePc(numRandom){
    const selectionPc = document.getElementById('selectionPc');

    if (numRandom==1) {
        selectionPc.setAttribute("src", "https://i.ibb.co/p2FKT1B/piedra.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.classList.add("true");
    }
    else if (numRandom==2) {
        selectionPc.setAttribute("src", "https://i.ibb.co/2ggW1FD/papel.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.classList.add("true");
    }
    else if (numRandom==3) {
        selectionPc.setAttribute("src", "https://i.ibb.co/qMkqkJn/tijera.png");
        selectionPc.removeAttribute("class", "hidden");
        selectionPc.classList.add("true");
    }
    else {
        alert("Se ha producido un error, recargue el juego");
    }
}


//  Branch Funcionalidad implementar un ciclo para llevar score y mostrar el ganador 

function piedraPapelTijera(opcPlayer, numRandom) {

    const textResul = document.getElementById('textResult');
    const scorePlayer = document.getElementById('scorePlayer');
    const scorePc = document.getElementById('scorePc');

    let contPlayer = parseInt(scorePlayer.value); 
    let contPc = parseInt(scorePc.value);  
    
        if (opcPlayer === numRandom) {

            textResul.textContent='tied';
            textResul.style.color='#4fa8f0';
            winner();             
        }

        else if(opcPlayer==1 && numRandom==2) {

            textResul.textContent='paper covers rock';
            textResul.style.color='#f64646';
            contPc+=1;
            document.getElementById('scorePc').value=contPc;
            winner();                                       
        }

        else if(opcPlayer==1 && numRandom==3) {

            textResul.textContent='rock crushes scissors';
            textResul.style.color='#06ffa1';
            contPlayer+=1;
            document.getElementById('scorePlayer').value=contPlayer;
            winner();                          
        }

        else if(opcPlayer==2 && numRandom==1) {

            textResul.textContent='paper covers rock';
            textResul.style.color='#06ffa1';
            contPlayer+=1;
            document.getElementById('scorePlayer').value=contPlayer;
            winner();              
        }

        else if(opcPlayer==2 && numRandom==3) {

            textResul.textContent='scissors cuts paper';
            textResul.style.color='#f64646';
            contPc+=1;
            document.getElementById('scorePc').value=contPc;
            winner();           
        }

        else if(opcPlayer==3 && numRandom==1) {

            textResul.textContent='rock crushes scissors';
            textResul.style.color='#f64646';
            contPc+=1;
            document.getElementById('scorePc').value=contPc;
            winner(); 
        }

        else if(opcPlayer==3 && numRandom==2) {

            textResul.textContent='scissors cuts paper';
            textResul.style.color='#06ffa1';
            contPlayer+=1;
            document.getElementById('scorePlayer').value=contPlayer;
            winner();                                
        }    
}

//Funcion iniciar batalla - Se activa con el Boton battle del HTML y llama a piedraPapelTijera();

function startBattle(){

    const selectionPlayer = document.getElementById('selectionPlayer');
    const selectionPlayerValue =selectionPlayer.classList;

    if ( selectionPlayerValue.contains(true)){
        
        document.getElementById('options').style.pointerEvents="none";
                
        let numRandom = Math.floor(Math.random()*(max - min + 1)) + min;      
        choicePc(numRandom);

        let x = selectionPlayer.classList.item(0);              

            if ( x == "piedra") {
                let opcPlayer = 1;
                piedraPapelTijera(opcPlayer, numRandom);
            }

            else if (x == "papel") {
                let opcPlayer = 2;            
                piedraPapelTijera(opcPlayer, numRandom);
            }
            
            else if ( x == "tijera") {
                let opcPlayer = 3;            
                piedraPapelTijera(opcPlayer, numRandom);
            }

            else  {
                alert("Se ha roto el codigo, por favor reset");
            }      
    } 
    
    else {
        alert("Debe seleccionar una opción");
    }
    
}   

function nextRound() {
       
    const selectionPlayer = document.getElementById('selectionPlayer');
    const selectionPc = document.getElementById('selectionPc');
    const textResul = document.getElementById('textResult');
    
    document.getElementById('options').style.pointerEvents="initial";

    selectionPlayer.removeAttribute("src");
    selectionPlayer.setAttribute("class", "hidden");
    selectionPc.removeAttribute("src");
    selectionPc.setAttribute("class", "hidden"); 
    textResul.textContent='';
}

function resetAllBattle(){
    const selectionPlayer = document.getElementById('selectionPlayer');
    const selectionPc = document.getElementById('selectionPc');
    const textResul = document.getElementById('textResult');
    const contPlayer = document.getElementById('scorePlayer');
    const contPc = document.getElementById('scorePc');
    const playerWin = document.getElementById('playerWin');
    const pcWin = document.getElementById('pcWin');

    document.getElementById('nextButton').style.pointerEvents="initial";
    document.getElementById('options').style.pointerEvents="initial";

    playerWin.textContent='';
    pcWin.textContent='';
    selectionPlayer.removeAttribute("src");
    selectionPlayer.setAttribute("class", "hidden");
    selectionPc.removeAttribute("src");
    selectionPc.setAttribute("class", "hidden");
    contPlayer.value=0;
    contPc.value=0;
    textResul.textContent='';   
}

function winner () {

    const playerWin = document.getElementById('playerWin');
    const pcWin = document.getElementById('pcWin');

    const contPlayer = document.getElementById('scorePlayer');
    const contPlayerValue = contPlayer.value;

    const contPc = document.getElementById('scorePc');
    const contPcValue = contPc.value;   

    if (contPlayerValue==10) {
        playerWin.textContent='YOU WIN';
        playerWin.style.color='#00FF00';        
        document.getElementById('nextButton').style.pointerEvents="none";
    }

    else if (contPcValue==10){        
        pcWin.textContent='Javascript Win';
        pcWin.style.color='#00FF00';
        playerWin.textContent='You Lose';
        playerWin.style.color='#FF0000';        
        document.getElementById('nextButton').style.pointerEvents="none";
    }  
}

