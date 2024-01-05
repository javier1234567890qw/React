import React from 'react'
//importar el proptypes para asegurar que los componentes reciban lo que se necesita
//impt es el snippet
import PropTypes from 'prop-types'


////primera app
//hay que meter los elementos dentro de un Fragment y solo se importa el fragmnet
//o abrir un div sin la palabra div


//para imprimir una constante dentro de una etiqueta de hatml se debe poner
// entre {} solo funciona en los primitivos




// const PrimeraApp = () => {
//     //si imprime
//     //funciona con numeros
//     //funciona con decimales
//     //imprime los arreglos


//     //no imprime
//     //los objetos no los imprime
//     //el true o el false no lo imprime
//     const saludo = {
//         nombre: 'pepe',
//         edad : 34
//     };
//     return (
//         //asi se imprime una constante dentro de un h1
//         <>

//         <h1>{saludo}</h1>
//         <p>hola pepe</p>
//         </>
//     ) ;
// }

// export default PrimeraApp;
























//////////////////////////////////////////////////////////////////////
//imprimir un objeto seria de la siguiente manera


// const PrimeraApp = () => {
//     //si imprime
//     //funciona con numeros
//     //funciona con decimales
//     //imprime los arreglos


//     //no imprime
//     //los objetos no los imprime
//     //el true o el false no lo imprime
//     //el undefined tampoco se imprime
//     const saludo = {
//         nombre: 'pepe',
//         edad : 34
//     };
//     return (
//         //asi se imprime un objeto dentro de un h1
//         //se le pone de etiqueta pre
//         //y al objeto se lo convierte en un json.stringify(objeto,null,espacio en numeros);
//         <>

//         <pre>{JSON.stringify(saludo,null,3)}</pre>
//         <p>hola pepe</p>
//         </>
//     ) ;
// }

// export default PrimeraApp;


















///////////////////////////////////////////////////////////////////////










//propiedades o props


//lo que se hace es una desestructuracion de las props
// const PrimeraApp = ({saludo}) => {




//     return (
//         <>
//         <h1>{saludo}</h1>
//         <p>mi primera app</p>
//         </>
//     ) ;
// }

// export default PrimeraApp;

////para mandar info de aca hacia la app








//se le pasa algo por defecto para que no de undefined
// const PrimeraApp = ({saludo='hola mundo'}) => {




//     return (
//         <>
//         <h1>{saludo}</h1>
//         <p>mi primera app</p>
//         </>
//     ) ;
// }

// export default PrimeraApp;














/////////////////////////////////////////////////////////////////////////














//para asegurarse que el componente funcione despues de recibir algo especifico
//se usa el proptypes

// const PrimeraApp = ({saludo}) => {




//     return (
//         <>
//         <h1>{saludo}</h1>
//         <p>mi primera app</p>
//         </>
//     ) ;
// }

// //uso del proptypes
// //se pone asi 
// //como si fuera un oobjeto que es del saludo
// //y dentro se le pone como propiedad 
// //lo que va a recibir  : PropsTypes. el tipo de dato que sera esa variable .isRequired si es requerido por obligacion la variable saludo
// PrimeraApp.propTypes = {
//     saludo : PropTypes.string.isRequired

// }

// export default PrimeraApp;

















///////////////////////////////////////////////////////////////////////////////////////////////////










const PrimeraApp = ({saludo,subtitulo}) => {




    return (
        <>
        <h1>{saludo}</h1>
        <p> {subtitulo}</p>
        </>
    ) ;
}



//para que reciba el saludo por obligacion y que mande un mensaje si no es un string
PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired

}

//para que reciba otro parametro por defecto
PrimeraApp.defaultProps ={
    subtitulo : 'soy pablo'
}
export default PrimeraApp;
