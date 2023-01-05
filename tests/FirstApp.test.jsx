import { render } from "@testing-library/react";
import { App } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => { 

     /*test('Debe hacer match con el snapshot', () => {

        const title = 'Hola pirinola';
        const { container } = render( <App title={ title }/> );

        expect(container).toMatchSnapshot();

    }); */

    
    test('Debe mostrar el título en un h1', () => { 

        const title = 'Hola pirinola';
        const { container, getByText, getByTestId } = render( <App title={ title }/> );

        expect (getByText( title )).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title ); */

        expect( getByTestId('test-title' ).innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtítulo enviado por props', () => { 
        
        const title = 'Hola pirinola';
        const subTitle = 'Soy un subtítulo';
        const { getByText } = render( 
            <App 
                title={ title }
                subTitle={ subTitle }
            /> 
        );


        expect(getByText( subTitle )).toBeTruthy(); 
        /*getAllByText para más de un elemento, por ejemplo para dos:
        expect(getAllByText(subTitle).length).toBe(2);
        ya que devuelve un arreglo con los números de elementos que encuentra y son dados*/


    });


});