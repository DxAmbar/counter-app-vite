import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const handleAdd = (event) => {
         console.log(event) 
        }

    return (
    <>
    <h1>CounterApp</h1>
    <h2>{ value }</h2>

    <button onClick={ handleAdd }>
        +1
    </button>
    </>
    )
}

CounterApp.protTypes = {
    value: PropTypes.number.isRequired,
}