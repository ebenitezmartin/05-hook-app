import { useState, useEffect, useRef } from "react";

export const useFetch = ( url ) => {


    const isMounted = useRef(true);

    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        error: null 
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [isMounted]);

    useEffect(() => {

        setState({
            data: null, 
            loading: true, 
            error: null 
        });

        
        fetch( url )
        .then( resp => resp.json())
        .then( data => {

            /* Si desmontamos (escondemos) el componente antes de que termine el setTimeout del useFetch nos casca un warning
            Solucionamos esto con el useRef*/

            if (isMounted.current ){
                setState({
                    data: data, 
                    loading: false, 
                    error: null 
                });
            }else{
                console.log('setState no se llamo');
            }

        });
        // return () => {
        //     cleanup
        // }
    }, [url]);


    return state;
}
