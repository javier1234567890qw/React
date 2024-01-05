import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './components/Primera app'
import './index.css'//para importar el css 1ra manera
import { CounterApp } from './components/CounterApp'
import { gifApp } from './components/gifApp';






const divRoot = document.querySelector('#root');




ReactDOM.render(<CounterApp/>,divRoot);







































///////////////////////////////////////////////////////////////////////
//1ra clase


// //declaramos una variable y la igualamos al h1
// const saludo = <h1>hola mundo</h1>;


// //declaramos una variable y le pasamos el div donde se va arenderizar la aplicacion de react
// const divRoot = document.querySelector('#root');


// //el metodo render es mostrar algo 
// //tiene dos metodos el 1ro-es lo que se quiere mostrar
// //2do - en el componente donde se quiere mostrar 

// ReactDom.render(saludo,divRoot);


/////////////////////////////////////////////////////////////////////////















/////////////////////////////////////////////////////////////////////////////
//2da clase


///FC funcional componnet

// const divRoot = document.querySelector('#root');


//ReactDOM.render(<PrimeraApp />,divRoot);





//primera forma de mandar datos
//esto dice que el componente de primera app va a recibir como parametro saludo
// ReactDOM.render(<PrimeraApp saludo= "hola soy javier" />,divRoot);




//sin pasarle nada ya que tendria un valor por defecto en el componente
//asi se pasan los numeros
// ReactDOM.render(<PrimeraApp saludo={1} />,divRoot);


//mandando un numero para comprobar si el propTypes funciona
// ReactDOM.render(<PrimeraApp />,divRoot);