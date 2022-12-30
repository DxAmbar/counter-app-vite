import PropTypes from 'prop-types';

export const App = ({ title, subTitle }) => {
    return (
    <>
    <h1>{ title }</h1>
    <p>{ subTitle }</p>
    </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

App.defaultProps = {
    title: "No hay título",
    subTitle: "No hay subtítulo",

}