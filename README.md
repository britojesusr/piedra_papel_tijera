# piedra_papel_tijera

Rock Paper Scissors ( Piedra papel o tijera ) es el resultado de un reto tomado en el curso Basico de Javascript en Platzi ( https://platzi.com/cursos/basico-javascript/ ) inspirado en el tradicional juego de manos en el que existen tres elementos: la piedra que vence a la tijera rompiéndola, la tijera que vence al papel cortándolo y el papel que vence a la piedra envolviéndola, dando lugar a un círculo o ciclo cerrado, que caracteriza al juego. Se utiliza con mucha frecuencia para decidir quién de dos personas hará algo, tal y como se hace a veces usando una moneda, o para dirimir algún asunto (véase volado).

En esta implementación utilicé un diseño visual muy simple bajo HTML y CSS
dandole prioridad a la logica que fue desarrollada en Javascript que es el
lenguaje en el que esta enfocado el curso
inicié el curso con cero conocimientos sobre el lenguaje y al finalizarlo 
y posterior a la practica estos fueron los resultados y los conocimientos adquiridos

Conocimientos:
- Historía sobre Javascript  ( Nacimiento, Caracteristica, Conceptos Básicos, Parte de su evolucion )
- Introduccion   ( sintaxis, variables, funciones ) 
- Bases de Javascript ( Scope, Hosting, Coercion, Operadores de Asignacion, comparacion y aritmeticos )
- Condicionales ( If, else, elseif )
- Ciclos ( for, for of, while, do while )
- Arrays ( Creacion, Recorridos de array, Eliminar elementos ) 
- Objects  
- Algunas funciones matématicas dentro del lenguaje

Resultados: 

<img src="https://i.ibb.co/cbWxysv/Screenshot-at-2020-08-10-11-18-43.png" alt="Screenshot-at-2020-08-10-11-18-43" border="0">

Verlo en linea: https://britojesusr.github.io/piedra_papel_tijera/#

Sobre el Juego: 

El objetivo es vencer al oponente seleccionando el arma que gana, según las siguientes reglas:

La piedra aplasta la tijera. (Gana la piedra.)
La tijera corta el papel. (Gana la tijera.)
El papel envuelve la piedra. (Gana el papel.)
En caso de empate (que dos jugadores elijan el mismo elemento) se juega otra vez.
A veces, esto se repite hasta que uno de los jugadores gana con tres puntos, o cinco, 
según se haya acordado previamente, y será entonces el vencedor del juego.

Lógica implementada con Javascript en el Juego

El jugador selecciona una opcion entre 
( piedra )  (  papel  )   ( tijera ) 

En ese momento su seleccion se almacena en una variable y es transformada en un numero entero entre 1 y 3
piedra = 1 ; papel = 2;  tijera = 3; 

Al mismo tiemppo es invocada una funcion matematica que escoje un numero aleatorio entre 1 y 3 
la cual será la opción que el codigo de javascript haya escogido

let numRandom = Math.floor(Math.random()*(max - min + 1)) + min; 

Este numero se almacena una variable y es comparado con el valor guardado de la seleccion del usuario

Se establecen una serie de condiciones IF y ELSE IF dentro de una funcion que permite elegir un ganador para esa ronda
aplicando las reglas ya conocidas del juego, el ganador de esa ronda sumara un punto a su contador y se reinicia el juego 
el ganador definitivo del juego será el que haya reunido en su contador 10 puntos en total .. 




Certificado de aprobación:

<img src="https://i.ibb.co/B4NxPZB/Captura-de-pantalla-2020-08-07-00-40-27.png" alt="Captura-de-pantalla-2020-08-07-00-40-27" border="0">



