/* Ordenar un array de objeto */

const users = [
    {id: 12, name: 'Mary'},
    {id: 6, name: 'Jhon'},
    {id: 2, name: 'Mery'},
    {id: 5, name: 'Juan'},
    {id: 1, name: 'Mary'},
];

// con el atributo sort nos permite ordenar un objeto arrays de orden mayor o menos
users.sort((a, b) =>{
    return a.id - b.id;
})