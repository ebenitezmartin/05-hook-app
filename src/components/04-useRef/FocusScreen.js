import React, { useRef } from 'react';

import './simple.css';


export const FocusScreen = () => {


    // const handleClick = (e) => {
    //     document.querySelector('input').select();
    // };

    
    /**
     * Es mejor asi para obtener una referencia mutable
     */
    const inputRef = useRef();

    const handleClick = (e) => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Nombre" />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
