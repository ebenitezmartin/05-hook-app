
export const todoReducer = ( state = [], action ) => {
    
    switch ( action.type ) {
        case 'add':
            
            return [ ...state, action.payload ];

        case 'delete':
        
        // Filter devuelve un nuevo array en el que no esté el id que mandamos
            return state.filter( toDo => toDo.id !== action.payload );

        case 'toggle':

        //Esto y....
            // return state.map( toDo => {
            //     if( toDo.id === action.payload ){
            //         return {
            //             ...toDo,
            //             done: !toDo.done
            //         };
            //     }else{
            //         return toDo;
            //     }
            // });

        //...esto hace lo mismo (Operador ternario)
            return state.map( toDo => 
                ( toDo.id === action.payload ) 
                ? { ...toDo, done: !toDo.done } 
                : toDo
            );
    
        default:
            return state;
    }
    
    return ;
}
