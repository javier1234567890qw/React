import { useState } from 'react'



export const Addcategory = ({ setArreglo }) => {
    //analizar
    const [value, setvalue] = useState('');

    //recive el evento de escribir 
    const handledInput = (e) => {
        setvalue(e.target.value)
    }

    const handSubmit = (e) => {
        ///para prevenir tener que refrescar la pagina   
        e.preventDefault();
    }

    const butonAgregar = () => {
        //ya que set arreglo recibe el arreglo podemos usar esto a favor e
        //entonces usando el metodo spreed retornamos todas las caracteristicas del arr , la adicional 
        if (value.length === 0 ) {
            setvalue('');
        } else {
            setArreglo(Arreglo => [value,...Arreglo ]);
            setvalue('');

        }
        
    }
    return (
        <form className='contenedorBuscar' onSubmit={handSubmit}>
            <input type="text" value={value} onChange={handledInput} />
            <button onClick={butonAgregar}>Agregar</button>
        </form>

    )
}