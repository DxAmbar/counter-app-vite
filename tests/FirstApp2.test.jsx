import { render, screen } from "@testing-library/react";
import { App } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => { 

    const title = 'Hola pirinola';
    const subTitle = 'Soy un subtítulo';

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render ( <App title={ title }/> );
        expect ( container ).toMatchSnapshot();

    })

    test('Debe mostrar el mensaje "Hola pirinola"', () => {  

        render( <App title={ title }/> );
        //screen.debug(); para ver el objeto
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('Debe mostrar el título en un h1', () => {  

        render( <App title={ title }/> );
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);

    })
    
    test('Debe mostrar el subtítulo envido por props', () => { 

        render( 
            <App 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect(screen.getByText( subTitle )).toBeTruthy(); 

    })

 
});