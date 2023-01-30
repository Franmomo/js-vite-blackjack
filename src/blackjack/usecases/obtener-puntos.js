import { valorCarta } from "./index";

export const obtenerPuntos = ( carta, puntosJugadorComputadora, puntosHTML ) => {

    if ( !carta ) throw new Error('La carta es obligatoria');
        
    puntosJugadorComputadora = puntosJugadorComputadora + valorCarta( carta );
    puntosHTML.innerText = puntosJugadorComputadora;
    return puntosJugadorComputadora;
}
