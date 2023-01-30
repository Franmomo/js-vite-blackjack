
export const obtenerImagen = ( carta, divCartasJugadorComputadora ) => {

    if ( !carta ) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugadorComputadora.append( imgCarta );
}
