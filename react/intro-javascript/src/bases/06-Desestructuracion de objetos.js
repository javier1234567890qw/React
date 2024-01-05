//////////////////////////////////////////

//desestructuracion o asignacion desestructurante

const persona = {
    nombre:"tony",
    edad:45,
    clave:"ironman",
};

//lo que se esta diciiendo es extrae lo que esta entre las llaves
//de este objeto
//const {nombre,clave} = persona;
//se estan inicializando arriba las variables nombre y clave
//y se igialan a las dos primeras propiedades del objeto 
//console.log(nombre);
//console.log(clave);



//en una funcion
//cuidado hay que poner el mismo nombre de las variables
const a = (usuario) => {

    const {edad,clave,nombre} = usuario ;
    
    console.log(edad,clave,nombre);
}

a(persona);



//haciendo la desestructuracion en los parametros
const b = ({edad,clave,nombre,rango="primer"}) => {

    
    
    console.log(edad,clave,nombre,rango);
} 

b(persona);