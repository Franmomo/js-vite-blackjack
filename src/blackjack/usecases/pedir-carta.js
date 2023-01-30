//! pedir-carta.js:
//! ---------------
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck ejemplo: ['2C','JH','7Q','AS'] 
 * @returns {String} retorna la última carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


