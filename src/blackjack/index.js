//! index.js:
//! ---------
// import { shuffle } from "underscore"; //* importamos lo que viene del módulo de 'underscore'
import _ from "underscore"; //* importamos lo que viene del módulo de 'underscore'

import { crearDeck, pedirCarta, obtenerPuntos, obtenerImagen, turnoComputadora } from "./usecases/index";


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');



// deck = crearDeck( tipos, especiales );      //* exportar módulos individuales
// deck = crearNuevoDeck( tipos, especiales ); //* exportar módulos individuales
deck = crearDeck( tipos, especiales );  //* exportar módulos por defecto


// Eventos
btnPedir.addEventListener('click', () => {
  
    const carta = pedirCarta( deck );
    
    puntosJugador = obtenerPuntos( carta, puntosJugador, puntosHTML[0]);
    obtenerImagen( carta, divCartasJugador )

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );  

    puntosJugador     = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});