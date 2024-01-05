import { useState } from 'react'
import { Addcategory } from './addCategoria'
import { GifGrid } from './gifGrid'







export const GifApp = () => {

    //para declarar un arreglo inicial debemos ponerlo en el usestate
    const [Arreglo,setArreglo] = useState(['pepe'])

////////////////////////////////////////////////////////
//no se puede hacer asi ya que el arreglo es una constante y las const
//no deben mutar
 // const handed = () => {
    //     setArreglo(Arreglo.push('pablo'));
    //     console.log(Arreglo);
    // }
///////////////////////////////////////
//asi tampoco porque le estamos cambiando el estado completo
    // const handed = () => {
    //     setArreglo('pablo');
        
    // }
/////////////////////////////////////////////////////////////
//utilizando el spreed
    // const handed = () => {
    //     //el set arreglo es el segundo valor del usestate que es una funcion que 
    //     //genera un nuevo objeto y lo cambia por el anterior en el dom
    //     setArreglo([...Arreglo,'pablo']);
        
        
        
    //     //o con un callback que es una funcion q devuelve el arreglo , otro elemento
        
    //     //setArreglo(arr => [...arr,'pablo'])
    // }

    

    return (
        <>
            <h2 className='titulo'>Gif Expert App</h2>
            <Addcategory setArreglo = {setArreglo}/>
            
            <hr /> 
            
            <ol>
                {
                    Arreglo.map( Element => {
                        return <GifGrid 
                        key={Element }
                        Element={Element}/>
                    })
                }
            </ol>
        </>)
} 