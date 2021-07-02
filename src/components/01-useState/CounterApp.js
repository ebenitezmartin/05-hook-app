import React, { useState } from 'react';
import './counterApp.css';

export const CounterApp = () => {


    // const [{ counterA, counterB }, setCounter] = useState({
    const [state, setState] = useState({
        counterA: 10,
        counterB: 20,
        counterC: 30,
        counterD: 40
    });

    const { counterA, counterB } = state;

    const handleAddCounterA = () => {
        // Si tenemos más propiedades estariamos obligados a escribirlas todas
        // setCounter( { counterA: counterA + 1, counterB: counterB } );
        // Usamos el operador spread para hacer una copia de todos los valores anteriores
        setState({ ...state, counterA: counterA +1});
    }

    return (
        <>
            <h1>Counter A:  { counterA }</h1>
            <h1>Counter B:  { counterB }</h1>
            <hr />

            <button 
                className="btn btn-primary" 
                onClick={ handleAddCounterA }> +1 
            </button>
        </>
    )
}
