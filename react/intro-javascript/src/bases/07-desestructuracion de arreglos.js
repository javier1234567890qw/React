const array = ["vegeta","goku","trunks"];


const [ , ,p3] = array;//se puede dejar un espacio para coger el ultimo

console.log(p3);


const retornaArr = () => {
    return ["abc",123];
}
//desestructurando el retorno de un arreglo de una funcion
 
const [ , a] = retornaArr();




console.log(a);


//tarea 
//funcion usestate
//recive un valor 

//el primer valor del arreglo se llama nombre y el segundo set Nombre
const useState = ( valor ) => {
    return [ valor ,() => {console.log('hola mundo') }];
       
    
}

const [nombre,setTnombre] = useState('pepe');

console.log(nombre);
//hay que llamar la segunda parte del arreglo como una funcion ya que esta guardando una funcion
setTnombre();
