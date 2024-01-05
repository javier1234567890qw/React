
/*
const nombre = "javier";
const apellido = "alejandro";



//template string
/*
const nombreEntero = ` ${nombre} 

${apellido}

${1+1}


${getSaludo(nombre)}
`;


console.log(nombreEntero);


function getSaludo(nombre) {
    return 'hola '+ nombre;
}*/







///////////////////////////////////////////////////////
//objetos literales



const persona = {
    nombre: "tony",
    apellido: "stark",
    edad: 45,
    //tiene adentro otro objeto
    direccion: {
        ciudad: "new york",
        zip: 345678,
    }
};

//creando un objeto de tipo persona 
console.log({ persona: persona });



//no hacer nunca esto
//persona2.nombre = "peter";





//para duplicar bien un objeto se usa el spreed que son los tres puntos entre parentesis
const persona2 = { ...persona };




persona2.nombre = "peter";
console.log(persona);
console.log(persona2);