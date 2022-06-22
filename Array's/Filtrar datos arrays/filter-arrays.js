/* FILTRAR UN ARRAYS DE OBJETOS */

const persons = [
    {
        name: 'Charlie',
        phone: '9 654 678 76',
        age: 46
    },
    {
        name: 'Dante',
        phone: '9 534 875 12',
        age: 88
    },
    {
        name: 'Maria',
        phone: '9 642 345 85',
        age: 76
    },
    {
        name: 'Jhon',
        phone: '9 657 456 22',
        age: 93
    }
]

//con filter podemos filtar datos especificos los cuales retornaran el resultado deseado
persons.filter(persons => {
    return persons.age > 40 && persons.age < 100 
})