import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    //console.log('render');

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
         //console.log(event) 
         setCounter( counter + 1 );
         /*otra forma podría ser
         setCounter ( (c) => c + 1);*/
    }

    const handleSubstract = () => setCounter ( counter - 1 );
    const handleReset = () => setCounter ( value );


    return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={ handleAdd }>
        +1
    </button>
    <button onClick={ handleSubstract }>
        -1
    </button>
    <button aria-label='btn-reset' onClick={ handleReset }>
        Reset
    </button>
    </>
    )
}

CounterApp.protTypes = {
    value: PropTypes.number.isRequired,
}