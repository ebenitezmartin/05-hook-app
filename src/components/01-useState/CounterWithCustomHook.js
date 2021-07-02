import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counterApp.css';


export const CounterWithCustomHook = () => {


    // Centralizar la llçogica de un contador para poderlo reutilizar
    // const [state, setState] = useState({
    //     counterA: 10,
    //     counterB: 20,
    //     counterC: 30,
    //     counterD: 40
    // });

    const { state, increment, decrement, reset } = useCounter( 100 );


    return (
        <>
            <h1>Counter with hook:  { state }</h1>
            <hr />

            <button 
                className="btn btn-primary" 
                onClick={ () => increment( 2 ) }> +1 
            </button>
            <button 
                className="btn btn-primary" 
                onClick={ () => decrement( 2 ) }> -1 
            </button>
            <button 
                className="btn btn-primary" 
                onClick={ reset }> Reset 
            </button>
        </>
    )
}
