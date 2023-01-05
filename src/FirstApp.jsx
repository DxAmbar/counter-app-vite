import PropTypes from 'prop-types';

export const App = ({ title, subTitle, name }) => {
    return (
    <>
    <div data-testid="test-title">{ title }</div>
    <p>{ subTitle }</p>
    <p>{ name }</p>
    </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

App.defaultProps = {
    name: "Daniela Baeza",
   // title: "No hay título",
    subTitle: "No hay subtítulo",

}