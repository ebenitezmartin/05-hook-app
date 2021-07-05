//CONCEPTOS GENERALES


const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false

}];

const toDoReducer = ( state = initialState, action ) => {

    if( action?.type === 'agregar' ){
        return [ ...state, action.payload ];
    }

    //Aunque no se haga nada, siempre hay que devolver un state
    return state;

}

//Inicialización
let toDos = toDoReducer();

//No usar esto en un reducer (no usar esto en React XD) ya que modifica, muta el objeto state
// todos.push();

//Esto hay que mandarlo de alguna manera a mi reducer mediante la action
const newToDo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

//Es un estandar que el action contenga la propiedad type para informar al reducer del tipo de acción (agregar, borrar, actualizar...)
//Es un estandar también que el nuevo state se llame payload, asi otros desarrolladores saben que es
const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo    

};


toDos = toDoReducer( toDos, agregarToDoAction );


console.log(toDos);