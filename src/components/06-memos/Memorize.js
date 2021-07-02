import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

// import './simple.css';


export const Memorize = () => {


    const { state:counter, increment } = useCounter( 10 );

    
    let stateShow = false;

    //Si hay un cambio en el state, aunque no se esté incrementando, por tanto llamando al componente Small, pasará por ahi para redibujarlo
    //Si Small contuviera carga de elementos, tipo peticiones, se recargaria mucho - Usamos React.memo() en el Small
    const [show, setShow] = useState(stateShow);

    const valueButton = () => {

        stateShow = show ? 'Hide' : 'Show';

        return stateShow;
    }



    return (
        <div>
            <h1>Counter: <Small value = { counter } /></h1>
            <hr />


            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => 
                    setShow( !show )}
                >
                    { valueButton() }
            </button>
        </div>
    )
}
