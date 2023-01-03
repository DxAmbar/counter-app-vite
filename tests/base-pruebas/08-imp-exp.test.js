import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

describe('Pruenbas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});


    });

    test('getHeroeById debe retornar undenfined si no exite el ID', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toBeFalsy(); //evalúa si es null, undefined o false


    });

    test('getHeroesByOwner debe regresar héroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        console.log(heroes);

        expect( heroes.length ).toBe( 3 );
        
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     });

     test('getHeroesByOwner debe regresar héroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        console.log(heroes);

        expect( heroes.length ).toBe( 2 );
        
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     });


});