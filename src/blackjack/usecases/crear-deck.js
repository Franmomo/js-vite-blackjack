//! crear-deck.js:
//! --------------
import _ from "underscore"; //* importamos lo que viene del módulo de 'underscore'

// export const miNombre = 'Francisco';

/**
 * 
 * @param {Array<String>} tipoDeCarta Ejemplo: ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tipoDeCarta, tiposEspeciales ) => {
// const crearDeck = ( tipoDeCarta, tiposEspeciales ) => { //* exportar módulos por defecto

    if ( !tipoDeCarta || tipoDeCarta.length === 0 )
        throw new Error('tiposDeCarta es obligatorio como un string[]');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error('tiposEspeciales son obligatorios como un string[]');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck; //* exportar módulos por defecto
