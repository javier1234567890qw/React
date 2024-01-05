////////////////////////////////////////////////////


//operador condicional ternario

const usuarioA = true;





//metodo normal
// let mensaje = '';
// if (usuarioA === true) {
//     mensaje = 'activo';
    
// }else{ 

// mensaje = 'inactivo';

// }

// console.log(mensaje);



//metodo abreviado
//? if   
//: else   
// let mensaje = (usuarioA) ? 'activo' : 'inactivo';
// console.log(mensaje);


//aun mas abreviado para react

//esto almacena el resultado de la comparacion 
//si es true almacena el string 
//si es false almacena el false
const mensaje = (usuarioA) && 'activo';

console.log(mensaje)