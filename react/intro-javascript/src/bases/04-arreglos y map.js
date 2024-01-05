/////////////////////////////////////
//arreglos 

//creando un nuevo arreglo


//no se recomienda de esta manera 
//const array = new Array(100);



//de esta manera es mejor
const array = [1,2,3,4];

//no se recomienda utilizar el push

//////////////////////////////////////////////////////////////////////
//para insertar algo es mejor esto para copiar el arreglo anterior
let array2 = [...array,5];
///////////////////////////////////////////////////////////////////




//multiplicar los valores del 2 por 3
const array3 = array2.map(function (numero) {
    return numero *2;
    
});



console.log(array2);

console.log(array);

console.log(array3);
