import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './simple.css';

export const SimpleForm = () => {

    //Esto es una mala práctica, no se debe poner un hook dentro de un condicional
    // if( true ){
    //     const [ state, setState ] = useState(0);
    // }

    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!!')
    }, []);

    //Esto es para cuando queremos que se produzca un cambio cuando algun elemento cambie
    //Por ejemplo validaciones, que se despliegue algo.. etc..
    useEffect( () => {
        // console.log('Form cambió')
    }, [ formState ]);

    useEffect( () => {
        // console.log('Email cambió')
    }, [ email ]);

    //e.target.name.... 
    const handleInputChange = ( { target } ) => {

        setFormState({...formState, 
           [ target.name ]: target.value });

    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }/>

                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="nombre@gmail.com "
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }/>
            </div>

            {/* Esto es para cuando queremos que se produzca un cambio cuando algun elemento cambie */}
            {/* Por ejemplo validaciones, que se despliegue algo.. etc..*/}
            { (name === '123') && <Message /> }
        </>
    )
}
