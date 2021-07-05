import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";


import "./styles.css";

//https://es.reactjs.org/docs/hooks-reference.html#usereducer

// const initialState = [{
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false

// }];

// init -> función para inicializar el estado (función externa al componente)
const init = () => {

    // inicializamos el componente con lo que haya en el localStorage si no se ha eliminado previamente
    // Si este estuviera vacio nos devuelve un [] vacío
    return JSON.parse(localStorage.getItem('toDos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: "Aprender React",
    //     done: false
    // }]
}


export const TodoApp = () => {

    // reducer -> la funcion reducer
    // initalstate -> estado inicial
    // init -> función para inicializar el estado (función externa al componente)
    // dispatch -> Nos va a ayudar a usar el disparador hacia el reducer (es lo que hará que React se entere de si hay nuevos cambios para dibujar en pantalla)
    // const [state, dispatch] = useReducer(reducer, initialState, init);

    const [ toDos, dispatch ] = useReducer(todoReducer, [], init);


    // Para grabar en el localStorage usamos un efecto
    // Si los toDos cambian se graban en él
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));

    }, [ toDos ]);


    const handleDelete = (toDoId) => {

        const action = {
            type: 'delete',
            payload: toDoId
        }
    
        dispatch( action );

    }

    const handleToggle = (toDo) => {
        dispatch({
            type: 'toggle',
            payload: toDo 
        });

    }

    const handleAddToDo = (newToDo) => {
    
        dispatch( {
            type: 'add',
            payload: newToDo
        } );

    }

    return (
        <div>
            <h1>TodoApp : ({ toDos.length })</h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    {/* ToDoList, toDos */}
                    <ToDoList 
                        toDos={ toDos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete } />

                </div>
                <div className="col-5">
                
                    <ToDoAdd handleAddToDo={ handleAddToDo } />

                </div>
            </div>

        </div>
    )
}
