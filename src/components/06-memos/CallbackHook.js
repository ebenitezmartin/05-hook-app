import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //Al regenerar la vista se vuelve a reservar un nuevo espacio de memoria para la función
    //Por lo que un React.memo() en el ShowIncrement no valdrá de nada aquí y volverá a entrar por el setCounter cada vez
    //Resolvemos esto con un useCallback
    // const increment = () => {
    //     setCounter( counter + 1 );
    // };

    const increment = useCallback(
        ( num ) => {
            //Va a devolver una versión "memorizada" de esa función si la dependencia no cambia
            setCounter( c => c + num );
        }, [ setCounter ]);

        //Si pretendemos hacer uso de un useEffect con una función como dependencia, también será necesario hacerlo mediante useCallback
        // Para así evitar que se ejecute en bucle en cada renderización
        useEffect(() => {
            //????
        }, [increment]);

    return (
        <div>
            <h1>Counter: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>

        </div>
    )
}
