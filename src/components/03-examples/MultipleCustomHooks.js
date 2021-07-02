import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './simple.css';

//https://breakingbadapi.com/

export const MultipleCustomHooks = () => {

    //Reutilizando un customHook
    const { state, increment } = useCounter( 1 );
    
    const { data, loading } = useFetch(`https://breakingbadapi.com/api/quotes/${ state }`);

    //Los datos vienen asi [{}]
    //Comprobamos si no viene null y si no, extraemos los datos del objeto
    /** 
     * !!data -> 
     * null == null
     * !null == true
     * !!null == false
     */

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) :
                (            
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> { quote } </p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )

            }

            <button className="btn btn-primary"
            onClick={ () => increment( 1 ) }>Siguiente frase</button>

        </div>
    )
};
