import React, { useEffect, useState } from 'react';

export const Message = () => {


    const [coords, setCoords] = useState({
        x:0,
        y: 0
    });

    const { x, y } = coords;

    useEffect(() => {
        //Este evento, aunk pase por el return, no se desmonta realmente, asi que en el momento que vuelva a pasar por aqui, se habrá creado un nuevo listener
        //Para ello creamos una nueva funcion independiente para referenciar ese callback capturando el evento para poder eliminarlo despues
        
        // window.addEventListener('mousemove', (e) =>{
        //     console.log(' :D ');
        // });

        const mousemove = (e) => {
            const coors = { x: e.x, y: e.y };
            setCoords( coors );
            // console.log(' :D ');
        };

        window.addEventListener( 'mousemove', mousemove );

        return () => {
            // console.log('Componente desmontado');
            window.removeEventListener( 'mousemove', mousemove );

        }
    }, []);

    return (
        <div>
            <h3>Message</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
