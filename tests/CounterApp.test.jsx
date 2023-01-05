import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en el <CounterApp/>', () => { 

    const initialValue = 100;

    test('Debe de hacer match con el snapshot', () => { 
       
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar el valor inicial de 100', () => { 

        render(<CounterApp value={initialValue}/>); //o se puede poner directamente value={100}
        expect(screen.getByText(100)).toBeTruthy();




    })
    
})