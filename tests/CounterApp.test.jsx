import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en el <CounterApp/>', () => { 

    const initialValue = 100;
    const secondValue = 10;

    test('Debe de hacer match con el snapshot', () => { 
       
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar el valor inicial de 100', () => { 

        render(<CounterApp value={initialValue}/>); //o se puede poner directamente value={100}
        expect(screen.getByText(100)).toBeTruthy();

    })

    test('Debe de incrementar con el botón +1', () => {  

        render(<CounterApp value={secondValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    })

    test('Debe de decrementar con el botón -1', () => {  

        render(<CounterApp value={secondValue}/>);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();

    })

    test('Debe funcionar el botón reset', () => {  

        render(<CounterApp value={secondValue}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'})) //también se puede buscar por id
        screen.debug();

        expect(screen.getByText(secondValue)).toBeTruthy();

    })
    
})