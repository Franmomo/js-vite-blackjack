//! turno-computadora.js:
//! ---------------------
import { pedirCarta, obtenerPuntos, obtenerImagen } from "./index";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck barja de cartas
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 */
export const turnoComputadora = ( puntosMinimos, deck = [], puntosHTML, divCartasComputadora ) => {

    let puntosComputadora = 0;
    
    if ( !puntosMinimos ) throw new Error('Los puntos minimos son obligatorios');
    if ( !puntosHTML ) throw new Error('Los puntos HTML son obligatorios');

    do {
        const carta = pedirCarta( deck );
        puntosComputadora = obtenerPuntos( carta, puntosComputadora, puntosHTML);
        obtenerImagen( carta, divCartasComputadora )

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  ( puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}