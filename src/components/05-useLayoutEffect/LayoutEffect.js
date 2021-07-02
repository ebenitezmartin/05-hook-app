import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './simple.css';

//https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

export const LayoutEffect = () => {

    const { state, increment } = useCounter( 1 );
    
    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${ state }`);


    const { quote } = !!data && data[0];

    //Habrá que mantener la referencia al párrafo
    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    //Asi podemos sacar datos/mediciones despues de que se haya cargado el html
    //Con getBoundingClientRect obtenemos el width del pTag del html
    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
        
            <blockquote className="blockquote text-right">
                <p
                    ref={ pTag }
                    className="mb-0">
                         { quote } 
                </p>
            </blockquote>

            <pre>{ JSON.stringify( boxSize, null, 3) }</pre>

            <button className="btn btn-primary"
            onClick={ () => increment( 1 ) }>Siguiente frase</button>

        </div>
    )
};
