//import     lo que se va a importar     from    'la direccion'; 
//import { heroes } from './data/heroes';

import { heroes } from "./data/heroes";

//el snipets es imp


//el metodo find es como un for eaach que por cada elemento va haciendo algo
//en este caso va haciendo una funcion
/*
const getHeroresbyID = (id1) => {
    return heroes.forEach((heroe)=>{
        if (heroe.id === id1) {
            const heroeEncontrado = heroe;
            return console.log(`el heroe con ese id es ${heroeEncontrado.name}`); ;
        }
        
    })
}
*/


//optimizando el codigo 
//el forheach solo hace algo con cada valor el find devuelve un arreglo con el primero que encuentre

const getHeroresbyID = (id1) =>  heroes.find(  (heroe)  => heroe.id === id1 )
;




//hacer el metodo get heroes by onwer
//filter devuelve un arreglo con todos los encontrados
const getHeroresbyOnwer = onw =>  heroes.filter( heroe => heroe.ower === onw )



export{
    getHeroresbyID,
    getHeroresbyOnwer
};