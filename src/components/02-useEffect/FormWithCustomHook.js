import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './simple.css';

export const FormWithCustomHook = () => {


    const [ values, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });
    

    const { name, email, password } = values;

    useEffect(() => {
        // console.log('El email cambió');

    }, [email])


    //Esto no deberia estar aquí - creamos un customhook (useForm)
    // const handleInputChange = ( { target } ) => {

    //     setFormState({...formState, 
    //        [ target.name ]: target.value });

    // };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        // console.log( values );

    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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

                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={ password }
                    onChange={ handleInputChange }/>
            </div>

            <button 
                type="submit"
                className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
