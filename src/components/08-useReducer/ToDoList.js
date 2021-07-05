import React from 'react';
import { TodoListItem } from './TodoListItem';

export const ToDoList = ( { toDos, handleToggle, handleDelete} ) => {
    return (
        <>
            <ul className="list-group list-group-flush">
            { toDos.map( (toDo, i) => (

                <TodoListItem 
                key={ toDo.id } 
                toDo={ toDo } 
                index={ i } 
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }/>

            ))}
            </ul>
        </>
    )
}
