import { render } from "@testing-library/react";
import { App } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => { 

    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola pirinola';
        const { container } = render( <App title={ title }/> );

        expect(container).toMatchSnapshot();

    });

    
    test('Debe mostrar el título en un h1', () => { 

        const title = 'Hola pirinola';
        const { container, getByText } = render( <App title={ title }/> );

        expect (getByText( title )).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );

    });


});