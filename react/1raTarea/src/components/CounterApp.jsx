
//declarando e importando el usestate 
import { useState } from 'react'

import PropTypes from 'prop-types'

//rafc da ya una funcion con un h1
//rafcp es el mejor ya que te da ya la funcion y el propTypes
//el onclick es un evento para ejecutar algo cuando se toque el div 

// export const CounterApp = ({value}) => {

//     //handledAdd
//     const handledAdd = (e) => {
//         console.log(e);
//     }


//     return (
//     <>
//     <h1>Counter App</h1>
//     <h2>{value}</h2>

//     <button onClick={handledAdd }>+1</button>    
//     </>

//     )
// }

// CounterApp.PropTypes = {
//     value : PropTypes.number.isRequired

// }





///////////////////////////////////////////////////////////////////////////

//analizar
//hooks
//usestate
/**

para usar el usestate primero hay que  

el usestate  regresa un arreglo con un primer valor y una funcion
 */
export const CounterApp = ({ value }) => {



















//////////////////////////////////////////////
//haciendo el boton de aumentar el contador de clicks


    //asignando el usestate
    //lo que esta diciendo esto es que el usestate va a comenzar en 0
    //
    const [counter, setcounter] = useState(0);
    
    
    
    
    
    
    //se declara la funcion que se va a ejecutar cada vez que el evento
    //one click se ejecute
    const manejo = () => {
        //hay que llamar a la funcion del segundo valor del usestate
        //que le pusimos de nombre setCounter y le pasamos lo que queremos 
        //que cambie en el dom ya que este segungo valor del usestate 
        //es una fucion que cambia en el dom lo que le indiquemos 
        setcounter(counter+1)
    }




    

    ///haciendo la funcion que se va a ejecutar en el boton -1

    const restar = () => {
        setcounter(counter-1)
    }


    //haciendo la funcion que va a restableer el contador a cero

    const restablecer = () => {
        setcounter(counter === 0) 
    }
























    return (
        <>
            <h1>Counter App</h1>
            --esto es el valor del usestate que es el primer valor que tiene--
            <h2>{counter}</h2>

            <button onClick={restar} >-1</button>
            <button onClick={restablecer}>Reestablecer</button>
            <button onClick={manejo}>+1</button>

        </>

    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired

}


