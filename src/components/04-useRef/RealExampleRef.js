import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './simple.css';

export const RealExampleRef = () => {

    let stateShow = false;

    const [show, setShow] = useState(stateShow);

    const valueButton = () => {

        stateShow = show ? 'Hide' : 'Show';

        return stateShow;
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {/* Si desmontamos (escondemos) el componente antes de que termine el setTimeout del useFetch nos casca un warning
            Solucionamos esto con el useRef*/}
            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-2"
                onClick={ () => 
                    setShow( !show )}
                >
                    { valueButton() }
            </button>

        </div>
    )
}
