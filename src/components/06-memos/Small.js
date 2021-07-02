import React from 'react';

//memo va a devolver la forma memorizada del componente y solo la va a  redibujar si el componente cambia directamente
export const Small = React.memo(({ value }) => {

    // console.log('Me volvieron a llamar :(');
    return (
        <>
            <small>{ value }</small>
        </>
    )
})
