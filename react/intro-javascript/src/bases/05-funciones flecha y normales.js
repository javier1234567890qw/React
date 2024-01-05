///funciones en javascript react 


//funcion normal
/*
function saludar(nombre) {
    return console.log(`hola  ${nombre}`)
    
}
*/
//es muy facil sobreescribir la funcion accidentalmente
//saludar = 30;



/*






//se deberia hacer 
const saludar =function (nombre) {
    return console.log(`hola  ${nombre}`)
    
}

//al tratar de sobreescribirla 
saludar =30;//aparece un error

console.log(saludar)
//con una arrow function
*/





//funcion de flecha
/*
//ventajas : simplificaciom
const saludar = (pepe) => {
    return console.log(`${pepe}`) 
}
//simplificacion cuando hay un solo return
const saludar1 = (name) => console.log(`${name}`) ;


console.log(saludar1("pepe"));

//funcion que devuelve un objeto
/*
const getUser = () => {
    return {
        id : 123,
        username: "pepe"
    }
}
console.log(getUser());
*/


//simplificando la funcion flecha poniendo entre parentesis lo que se quiere retornar
/*
const getUser = () => ( {
id : 123,
username: "pepe"
})

console.log(getUser());

const user = getUser();

 //tarea

const getUsuarioActivo = (nombre) => ( {
        uid : 'ABC567',
        username: nombre
    })

const UsuarioActivo = getUsuarioActivo('javier');
console.log(UsuarioActivo,"*****");*/