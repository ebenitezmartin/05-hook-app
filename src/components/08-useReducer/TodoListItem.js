import React from 'react';

export const TodoListItem = ({ toDo, index, handleToggle, handleDelete }) => {
    return (
        <>
                <li 
                    key={ toDo.id } 
                    className="list-group-item">
                    <p
                        className={ `${ toDo.done && 'complete' }` }
                        onClick={ () => handleToggle(toDo.id) }>{index + 1}. { toDo.desc }</p>
                    <button 
                        className="btn btn-danger"
                        onClick={ () => handleDelete(toDo.id) }>
                        Borrar</button>
                </li>
        </>
    )
}
