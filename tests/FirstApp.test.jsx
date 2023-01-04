import { render } from "@testing-library/react";
import { App } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => { 

    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola pirinola';
        render( <App title={title}/> );



     });


});