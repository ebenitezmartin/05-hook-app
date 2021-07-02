import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

// import './simple.css';


export const MemoHook = () => {

    const { state:counter, increment } = useCounter( 500 );
    const [ show, setShow ] = useState(true);

    //Para memorizar el valor si los argumentos son iguales, si no reprocesalos
    //Si el counter cambia necesito reprocesarlos
    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h4>Counter: { counter } </h4>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}>
                    Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
