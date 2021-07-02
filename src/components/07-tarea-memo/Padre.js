import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const increment = ( num ) => {
    //     setValor( valor + num );
    // };


    const increment = useCallback(
        ( num ) => {
            //Va a devolver una versión "memorizada" de esa función si la dependencia no cambia
            setValor( v => v + num );
        }, [ setValor ]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
