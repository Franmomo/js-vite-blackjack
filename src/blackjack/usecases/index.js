//! usecases/index.js:
//! ------------------
// import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck"; //* exportación independiente o individual
// import crearDeck, { miNombre } from "./usecases/crear-deck"; //* exportación módulos por defecto
export { crearDeck } from "./crear-deck"; //* exportación independiente o individual
export { obtenerImagen } from "./obtener-imagen";
export { obtenerPuntos } from "./obtener-puntos";
export { pedirCarta } from "./pedir-carta";
export { turnoComputadora } from "./turno-computadora";
export { valorCarta } from "./valor-carta";


